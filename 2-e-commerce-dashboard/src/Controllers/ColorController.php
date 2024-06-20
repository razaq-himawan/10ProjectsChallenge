<?php

namespace App\Controllers;

use Exception;

class ColorController extends HelperController
{
    private $store;
    private $stores;
    private $color;
    private $colors;

    public function __construct($storeId = null, $colorId = null)
    {
        list($this->store, $this->stores) = $this->getStore($storeId);
        $this->color = $this->model("ColorModel")->getColorById($colorId);
        $this->colors = $this->model("ColorModel")->getAllColors();
    }

    public function index()
    {
        $data = [
            "title" => $this->store["name"] . " | Colors",
            "store" => $this->store,
            "stores" => $this->stores,
            "colors" => $this->colors,
        ];

        $this->renderPage("colors/index", $data);
    }

    public function createColorForm()
    {
        $data = [
            "title" => $this->store["name"] . " | Colors",
            "store" => $this->store,
            "stores" => $this->stores,
        ];

        $this->renderPage("colors/create-color", $data);
    }

    public function createColor($storeId)
    {
        try {
            $this->model("ColorModel")->createColor($_POST, $storeId);

            echo "Color Created";

            header('Location: ' . BASE_URL . '/store/' . $this->store["id"] . '/colors', true, 301);
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function editColorForm($storeId, $colorId)
    {
        $data = [
            "title" => $this->store["name"] . " | Colors",
            "store" => $this->store,
            "stores" => $this->stores,
            "color" => $this->model("ColorModel")->getColorById($colorId),
        ];

        $this->renderPage("colors/edit-color", $data);
    }

    public function editColor()
    {
        try {
            $this->model("ColorModel")->editColor($_POST, $this->color["id"]);

            echo "Color Updated";

            header('Location: ' . BASE_URL . '/store/' . $this->store["id"] . '/colors', true, 301);
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function deleteColor()
    {
        try {
            $this->model("ColorModel")->deleteColor($this->color["id"]);

            echo "Color Deleted";

            header('Location: ' . BASE_URL . '/store/' . $this->store["id"] . '/colors', true, 301);
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
