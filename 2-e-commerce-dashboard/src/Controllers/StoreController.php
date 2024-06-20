<?php

namespace App\Controllers;

use Exception;

class StoreController extends HelperController
{
    private $store;
    private $stores;

    public function __construct($id = null)
    {
        list($this->store, $this->stores) = $this->getStore($id);
    }

    public function index()
    {
        $data = [
            "title" => $this->store["name"],
            "store" => $this->store,
            "stores" => $this->stores,
        ];


        $this->renderPage("index", $data);
    }

    public function createStore()
    {
        try {
            $this->model("StoreModel")->createStore($_POST);

            echo "New Store Created";

            $this->redirect();
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function updateStore($id)
    {
        try {
            $putData = file_get_contents("php://input");
            $putData = explode("=", $putData)[1];

            $data["name"] = urldecode($putData);
            $this->model('StoreModel')->updateStore($data, $id);

            echo "Store Updated";
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function deleteStore($id)
    {
        try {
            $this->model('StoreModel')->deleteStore($id);

            echo "Store Deleted";
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
