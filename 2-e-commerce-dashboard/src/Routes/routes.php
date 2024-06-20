<?php

use App\Controllers\HomeController;

return [
    '/' => [
        'controller' => HomeController::class,
        'action' => 'index',
        'method' => 'GET'
    ],
];
