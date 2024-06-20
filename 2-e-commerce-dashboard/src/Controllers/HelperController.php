<?php

namespace App\Controllers;

use App\Core\Controller;

class HelperController extends Controller
{

    protected function getStore($storeId)
    {
        $store = $this->model("StoreModel")->getStoreById($storeId);

        if (!$store) {
            $this->redirect();
        }

        $stores = $this->model("StoreModel")->getAllStores();

        return [$store, $stores];
    }

    protected function redirect($responseCode = '301')
    {
        $store = $this->model("StoreModel")->findFirst();

        if ($store) {
            header("Location: " . BASE_URL . "/store/" . $store["id"], true, $responseCode);
        } else {
            header("Location: " . BASE_URL, true, $responseCode);
        }
    }

    protected function renderPage($endpoint, $data)
    {
        $this->render("partials/header", $data);
        $this->render("partials/components/modal", $data);
        $this->render("partials/components/navbar", $data);
        $this->render("store/[storeId]/$endpoint", $data);
        $this->render("partials/footer");
    }
}
