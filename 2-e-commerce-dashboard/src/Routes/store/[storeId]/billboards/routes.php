<?php

use App\Controllers\BillboardController;

return [
    '/store/{storeId}/billboards' => [
        'controller' => BillboardController::class,
        'action' => 'index',
        'method' => 'GET'
    ],
    '/store/{storeId}/billboards/create' => [
        'controller' => BillboardController::class,
        'action' => 'createBillboardForm',
        'method' => 'GET'
    ],
    '/store/{storeId}/billboards/create-billboard' => [
        'controller' => BillboardController::class,
        'action' => 'createBillboard',
        'method' => 'POST'
    ],
    '/store/{storeId}/billboards/{billboardId}' => [
        'controller' => BillboardController::class,
        'action' => 'editBillboardForm',
        'method' => 'GET'
    ],
    '/store/{storeId}/billboards/edit-billboard/{billboardId}' => [
        'controller' => BillboardController::class,
        'action' => 'editBillboard',
        'method' => 'POST'
    ],
    '/store/{storeId}/billboards/delete-billboard/{billboardId}' => [
        'controller' => BillboardController::class,
        'action' => 'deleteBillboard',
        'method' => 'DELETE'
    ],
];
