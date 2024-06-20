<?php

namespace App\Core;

require_once "../src/Config/config.php";

class Router
{
    private $staticRoutes = [];
    private $dynamicRoutes = [];
    private $middlewares = [];
    private $url;
    private $requestMethod;

    public function __construct()
    {
        $this->url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $this->url = str_replace(BASE_PATH, '', $this->url);

        if ($this->url !== '/') {
            $this->url = rtrim($this->url, '/');
        }

        $this->requestMethod = $_SERVER['REQUEST_METHOD'];
    }

    public function add(array $routes)
    {
        foreach ($routes as $route => $handler) {
            if (strpos($route, '{') !== false) {
                $this->dynamicRoutes[] = [
                    'route' => $route,
                    'controller' => $handler['controller'],
                    'action' => $handler['action'],
                    'method' => $handler['method']
                ];
            } else {
                $this->staticRoutes[$handler['method']][$route] = [
                    'controller' => $handler['controller'],
                    'action' => $handler['action'],
                ];
            }
        }
    }

    public function middleware($middlewareClass)
    {
        $this->middlewares[] = $middlewareClass;
    }

    public function dispatch()
    {
        $this->applyMiddleware();

        if (isset($this->staticRoutes[$this->requestMethod][$this->url])) {
            $route = $this->staticRoutes[$this->requestMethod][$this->url];
            $controller = new $route['controller']();
            $action = $route['action'];
            $controller->$action();
            return;
        }

        foreach ($this->dynamicRoutes as $route) {
            if ($route['method'] === $this->requestMethod) {
                $pattern = $this->convertToPattern($route['route']);
                if (preg_match($pattern, $this->url, $matches)) {
                    array_shift($matches);
                    $controllerName = $route['controller'];
                    $action = $route['action'];

                    if (class_exists($controllerName)) {
                        $controller = new $controllerName(...$matches);
                        if (method_exists($controller, $action)) {
                            call_user_func_array([$controller, $action], $matches);
                        } else {
                            echo "404 Not Found: Method $action not found in $controllerName";
                        }
                    } else {
                        echo "404 Not Found: Controller $controllerName not found";
                    }
                    return;
                }
            }
        }
        echo "404 Not Found";
    }

    private function convertToPattern($route)
    {
        return '#^' . preg_replace('/\{([a-zA-Z0-9_-]+)\}/', '([a-zA-Z0-9_-]+)', $route) . '$#';
    }

    private function applyMiddleware()
    {
        foreach ($this->middlewares as $middlewareClass) {
            $middleware = new $middlewareClass();
            $middleware->handle($_REQUEST, function ($request) {
                return $request;
            });
        }
    }
}
