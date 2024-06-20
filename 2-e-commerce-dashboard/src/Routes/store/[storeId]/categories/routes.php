<?php

use App\Controllers\CategoryController;

return [
    '/store/{storeId}/categories' => [
        'controller' => CategoryController::class,
        'action' => 'index',
        'method' => 'GET'
    ],
    '/store/{storeId}/categories/create' => [
        'controller' => CategoryController::class,
        'action' => 'createCategoryForm',
        'method' => 'GET'
    ],
    '/store/{storeId}/categories/create-category' => [
        'controller' => CategoryController::class,
        'action' => 'createCategory',
        'method' => 'POST'
    ],
    '/store/{storeId}/categories/{categoryId}' => [
        'controller' => CategoryController::class,
        'action' => 'editCategoryForm',
        'method' => 'GET'
    ],
    '/store/{storeId}/categories/edit-category/{categoryId}' => [
        'controller' => CategoryController::class,
        'action' => 'editCategory',
        'method' => 'POST'
    ],
    '/store/{storeId}/categories/delete-category/{categoryId}' => [
        'controller' => CategoryController::class,
        'action' => 'deleteCategory',
        'method' => 'DELETE'
    ],
];
