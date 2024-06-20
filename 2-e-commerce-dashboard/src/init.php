<?php

namespace App;

use App\Core\Router;

$router = new Router();

$routeGroups = [
    "home" => "Routes/routes.php",
    "store" => "Routes/store/routes.php",
    "store_id" => "Routes/store/[storeId]/routes.php",
    "store_billboards" => "Routes/store/[storeId]/billboards/routes.php",
    "store_categories" => "Routes/store/[storeId]/categories/routes.php",
    "store_sizes" => "Routes/store/[storeId]/sizes/routes.php",
    "store_colors" => "Routes/store/[storeId]/colors/routes.php",
    "store_products" => "Routes/store/[storeId]/products/routes.php",
    "store_orders" => "Routes/store/[storeId]/orders/routes.php",
    "store_settings" => "Routes/store/[storeId]/settings/routes.php",
];

foreach ($routeGroups as $groupName => $routeFile) {
    $routes = require_once $routeFile;
    $router->add($routes);
}


$router->dispatch();
