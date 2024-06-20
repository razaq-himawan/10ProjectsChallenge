<?php

namespace App\Controllers;

use Exception;

class ProductController extends HelperController
{
    private $store;
    private $stores;
    private $product;
    private $products;

    public function __construct($storeId = null, $productId = null)
    {
        list($this->store, $this->stores) = $this->getStore($storeId);
        $this->products = $this->model("ProductModel")->getAllProducts();
        $this->product = $this->model("ProductModel")->getProductById($productId);
    }

    public function index()
    {
        $data = [
            "title" => $this->store["name"] . " | Products",
            "store" => $this->store,
            "stores" => $this->stores,
            "products" => $this->products,
        ];

        $this->renderPage("products/index", $data);
    }

    public function createProductForm()
    {
        $data = [
            "title" => $this->store["name"] . " | Products",
            "store" => $this->store,
            "stores" => $this->stores,
            "categories" => $this->model("CategoryModel")->getAllCategories(),
            "sizes" => $this->model("SizeModel")->getAllSizes(),
            "colors" => $this->model("ColorModel")->getAllColors(),
        ];

        $this->renderPage("products/create-product", $data);
    }

    public function createProduct()
    {
        try {
            $this->model("ProductModel")->createProduct($_POST, $this->store["id"]);

            echo "Product Created";

            header('Location: ' . BASE_URL . '/store/' . $this->store["id"] . '/products', true, 301);
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function editProductForm()
    {
        $data = [
            "title" => $this->store["name"] . " | Products",
            "store" => $this->store,
            "stores" => $this->stores,
            "categories" => $this->model("CategoryModel")->getAllCategories(),
            "sizes" => $this->model("SizeModel")->getAllSizes(),
            "colors" => $this->model("ColorModel")->getAllColors(),
            "product" => $this->product,
        ];

        $this->renderPage("products/edit-product", $data);
    }

    public function editProduct($storeId, $productId)
    {
        try {
            $this->model("ProductModel")->editProduct($_POST, $this->product["id"]);

            echo "Product Updated";

            header('Location: ' . BASE_URL . '/store/' . $this->store["id"] . '/products', true, 301);
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function deleteProduct($storeId, $productId)
    {
        try {
            $this->model("ProductModel")->deleteProduct($productId);

            echo "Product Deleted";

            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
