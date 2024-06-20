<?php

use App\Controllers\OrderController;

return [
    '/store/{storeId}/orders' => [
        'controller' => OrderController::class,
        'action' => 'index',
        'method' => 'GET'
    ],
    '/store/{storeId}/create-order' => [
        'controller' => OrderController::class,
        'action' => 'createOrder',
        'method' => 'GET'
    ],
];
