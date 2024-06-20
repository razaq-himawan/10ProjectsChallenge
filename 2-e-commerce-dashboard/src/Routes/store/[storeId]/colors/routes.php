<?php

use App\Controllers\ColorController;

return [
    '/store/{storeId}/colors' => [
        'controller' => ColorController::class,
        'action' => 'index',
        'method' => 'GET'
    ],
    '/store/{storeId}/colors/create' => [
        'controller' => ColorController::class,
        'action' => 'createColorForm',
        'method' => 'GET'
    ],
    '/store/{storeId}/colors/create-color' => [
        'controller' => ColorController::class,
        'action' => 'createColor',
        'method' => 'POST'
    ],
    '/store/{storeId}/colors/{colorId}' => [
        'controller' => ColorController::class,
        'action' => 'editColorForm',
        'method' => 'GET'
    ],
    '/store/{storeId}/colors/edit-color/{colorId}' => [
        'controller' => ColorController::class,
        'action' => 'editColor',
        'method' => 'POST'
    ],
    '/store/{storeId}/colors/delete-color/{colorId}' => [
        'controller' => ColorController::class,
        'action' => 'deleteColor',
        'method' => 'DELETE'
    ],
];
