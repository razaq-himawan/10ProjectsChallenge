<?php

namespace App\Controllers;

use Exception;

class SizeController extends HelperController
{
    private $store;
    private $stores;
    private $size;
    private $sizes;

    public function __construct($storeId = null, $sizeId = null)
    {
        list($this->store, $this->stores) = $this->getStore($storeId);
        $this->sizes = $this->model("SizeModel")->getAllSizes();
        $this->size = $this->model("SizeModel")->getSizeById($sizeId);
    }

    public function index()
    {
        $data = [
            "title" => $this->store["name"] . " | Sizes",
            "store" => $this->store,
            "stores" => $this->stores,
            "sizes" => $this->sizes,
        ];

        $this->renderPage("sizes/index", $data);
    }

    public function createSizeForm()
    {

        $data = [
            "title" => $this->store["name"] . " | Create Sizes",
            "store" => $this->store,
            "stores" => $this->stores,
            "sizes" => $this->sizes,
        ];


        $this->renderPage("sizes/create-size", $data);
    }

    public function createSize()
    {
        try {
            $this->model("SizeModel")->createSize($_POST, $this->store["id"]);

            echo "Size Created";

            header('Location: ' . BASE_URL . '/store/' . $this->store["id"] . '/sizes', true, 301);
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function editSizeForm()
    {
        $data = [
            "title" => $this->store["name"] . " | Edit Sizes",
            "store" => $this->store,
            "stores" => $this->stores,
            "size" => $this->size,
        ];


        $this->renderPage("sizes/edit-size", $data);
    }


    public function editSize()
    {
        try {
            $this->model("SizeModel")->editSize($_POST, $this->size["id"]);

            echo "Size Updated";

            header('Location: ' . BASE_URL . '/store/' . $this->store["id"] . '/sizes', true, 301);
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function deleteSize($storeId, $sizeId)
    {
        try {
            $this->model("SizeModel")->deleteSize($sizeId);

            echo "Size Deleted";

            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
