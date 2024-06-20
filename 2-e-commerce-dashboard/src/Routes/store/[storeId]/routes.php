<?php

use App\Controllers\StoreController;

return [
    '/store/{storeId}' => [
        'controller' => StoreController::class,
        'action' => 'index',
        'method' => 'GET'
    ],
    '/store/{storeId}/update-store' => [
        'controller' => StoreController::class,
        'action' => 'updateStore',
        'method' => 'PUT'
    ],
    '/store/{storeId}/delete-store' => [
        'controller' => StoreController::class,
        'action' => 'deleteStore',
        'method' => 'DELETE'
    ],
];
