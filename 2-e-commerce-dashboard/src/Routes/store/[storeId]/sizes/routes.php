<?php

use App\Controllers\SizeController;

return [
    '/store/{storeId}/sizes' => [
        'controller' => SizeController::class,
        'action' => 'index',
        'method' => 'GET'
    ],
    '/store/{storeId}/sizes/create' => [
        'controller' => SizeController::class,
        'action' => 'createSizeForm',
        'method' => 'GET'
    ],
    '/store/{storeId}/sizes/create-size' => [
        'controller' => SizeController::class,
        'action' => 'createSize',
        'method' => 'POST'
    ],
    '/store/{storeId}/sizes/{sizeId}' => [
        'controller' => SizeController::class,
        'action' => 'editSizeForm',
        'method' => 'GET'
    ],
    '/store/{storeId}/sizes/edit-size/{sizeId}' => [
        'controller' => SizeController::class,
        'action' => 'editSize',
        'method' => 'POST'
    ],
    '/store/{storeId}/sizes/delete-size/{sizeId}' => [
        'controller' => SizeController::class,
        'action' => 'deleteSize',
        'method' => 'DELETE'
    ],
];
