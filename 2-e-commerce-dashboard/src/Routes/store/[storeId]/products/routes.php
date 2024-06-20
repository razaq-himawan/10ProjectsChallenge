<?php

use App\Controllers\ProductController;

return [
    '/store/{storeId}/products' => [
        'controller' => ProductController::class,
        'action' => 'index',
        'method' => 'GET'
    ],
    '/store/{storeId}/products/create' => [
        'controller' => ProductController::class,
        'action' => 'createProductForm',
        'method' => 'GET'
    ],
    '/store/{storeId}/products/create-product' => [
        'controller' => ProductController::class,
        'action' => 'createProduct',
        'method' => 'POST'
    ],
    '/store/{storeId}/products/{productId}' => [
        'controller' => ProductController::class,
        'action' => 'editProductForm',
        'method' => 'GET'
    ],
    '/store/{storeId}/products/edit-product/{productId}' => [
        'controller' => ProductController::class,
        'action' => 'editProduct',
        'method' => 'POST'
    ],
    '/store/{storeId}/products/delete-product/{productId}' => [
        'controller' => ProductController::class,
        'action' => 'deleteProduct',
        'method' => 'DELETE'
    ],
];
