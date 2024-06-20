<?php

use App\Controllers\SettingController;

return [
    '/store/{storeId}/settings' => [
        'controller' => SettingController::class,
        'action' => 'index',
        'method' => 'GET'
    ],
];
