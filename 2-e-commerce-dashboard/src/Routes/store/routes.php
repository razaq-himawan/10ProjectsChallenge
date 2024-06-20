<?php

use App\Controllers\StoreController;

return [
    '/store' => [
        'controller' => StoreController::class,
        'action' => 'redirect',
        'method' => 'GET'
    ],
    '/store/create-store' => [
        'controller' => StoreController::class,
        'action' => 'createStore',
        'method' => 'POST'
    ],
];
