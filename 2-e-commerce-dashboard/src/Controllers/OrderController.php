<?php

namespace App\Controllers;


class OrderController extends HelperController
{
    private $store;
    private $stores;

    public function __construct($storeId = "")
    {
        list($this->store, $this->stores) = $this->getStore($storeId);
    }

    public function index()
    {
        $data = [
            "title" => $this->store["name"] . " | Orders",
            "store" => $this->store,
            "stores" => $this->stores,
        ];

        $this->renderPage("orders/index", $data);
    }
}
