<?php

namespace App\Controllers;

class SettingController extends HelperController
{
    private $store;
    private $stores;

    public function __construct($storeId = null)
    {
        list($this->store, $this->stores) = $this->getStore($storeId);
    }

    public function index()
    {
        $data = [
            "title" => $this->store["name"] . " | Settings",
            "store" => $this->store,
            "stores" => $this->stores,
        ];

        $this->renderPage("settings/index", $data);
    }
}
