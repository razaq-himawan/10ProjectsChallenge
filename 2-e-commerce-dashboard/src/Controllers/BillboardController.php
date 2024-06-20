<?php

namespace App\Controllers;

use Exception;

class BillboardController extends HelperController
{
    private $store;
    private $stores;
    private $billboard;
    private $billboards;

    public function __construct($storeId = null, $billboardId = null)
    {
        list($this->store, $this->stores) = $this->getStore($storeId);
        $this->billboard = $this->model("BillboardModel")->getBillboardById($billboardId);
        $this->billboards = $this->model("BillboardModel")->getAllBillboards();
    }

    public function index()
    {
        $data = [
            "title" => $this->store["name"] . " | Billboard",
            "store" => $this->store,
            "stores" => $this->stores,
            "billboards" => $this->billboards,
        ];

        $this->renderPage("billboards/index", $data);
    }



    public function createBillboardForm()
    {
        $data = [
            "title" => $this->store["name"] . " | Create Billboard",
            "store" => $this->store,
            "stores" => $this->stores,
        ];

        $this->renderPage("billboards/create-billboard", $data);
    }

    public function createBillboard()
    {
        try {
            $this->model("BillboardModel")->createBillboard($_POST, $this->store["id"]);

            echo "New Billboard Created";

            header('Location: ' . BASE_URL . '/store/' . $this->store["id"] . '/billboards', true, 301);
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function editBillboardForm()
    {
        $data = [
            "title" => $this->store["name"] . " | Edit Billboard",
            "store" => $this->store,
            "stores" => $this->stores,
            "billboard" => $this->billboard,
        ];

        $this->renderPage("billboards/edit-billboard", $data);
    }

    public function editBillboard()
    {
        try {
            $this->model("BillboardModel")->editBillboard($_POST, $this->billboard["id"]);

            echo "Billboard Updated";

            header('Location: ' . BASE_URL . '/store/' . $this->store["id"] . '/billboards', true, 301);
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function deleteBillboard($storeId, $billboardId)
    {
        try {
            $deleteData = file_get_contents("php://input");
            $imagePath = explode("=", $deleteData)[1];
            $imagePath = urldecode($imagePath);

            $this->model("BillboardModel")->deleteBillboard($billboardId, $imagePath);

            echo "Billboard Deleted";
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
