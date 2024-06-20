<?php

namespace App\Controllers;

use Exception;

class CategoryController extends HelperController
{
    private $store;
    private $stores;
    private $billboards;
    private $category;
    private $categories;

    public function __construct($storeId = null, $categoryId = null)
    {
        list($this->store, $this->stores) = $this->getStore($storeId);
        $this->category = $this->model("CategoryModel")->getCategoryById($categoryId);
        $this->categories = $this->model("CategoryModel")->getAllCategories();
        $this->billboards = $this->model("BillboardModel")->getAllBillboards();
    }

    public function index()
    {
        $data = [
            "title" => $this->store["name"] . " | Categories",
            "store" => $this->store,
            "stores" => $this->stores,
            "categories" => $this->categories,
        ];

        $this->renderPage("categories/index", $data);
    }

    public function createCategoryForm()
    {
        $data = [
            "title" => $this->store["name"] . " | Edit Categories",
            "store" => $this->store,
            "stores" => $this->stores,
            "billboards" => $this->billboards,
        ];

        $this->renderPage("categories/create-category", $data);
    }

    public function createCategory()
    {
        try {
            $storeId = $this->store["id"];

            $this->model("CategoryModel")->createCategory($_POST, $storeId);

            echo "Category Created";

            header('Location: ' . BASE_URL . '/store/' . $this->store["id"] . '/categories', true, 301);
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }


    public function editCategoryForm($storeId, $categoryId)
    {
        $data = [
            "title" => $this->store["name"] . " | Edit Categories",
            "store" => $this->store,
            "stores" => $this->stores,
            "category" => $this->category,
            "billboards" => $this->billboards,
        ];

        $this->renderPage("categories/edit-category", $data);
    }

    public function editCategory()
    {
        try {
            $this->model("CategoryModel")->editCategory($_POST, $this->category["id"]);

            echo "Category Updated";

            header('Location: ' . BASE_URL . '/store/' . $this->store["id"] . '/categories', true, 301);
            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function deleteCategory($storeId, $categoryId)
    {
        try {
            $this->model("CategoryModel")->deleteCategory($categoryId);

            echo "Category Deleted";

            exit();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
