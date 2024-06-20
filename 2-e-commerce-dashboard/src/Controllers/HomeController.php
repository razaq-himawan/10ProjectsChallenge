<?php

namespace App\Controllers;

use App\Core\Controller;

class HomeController extends Controller
{
    public function index()
    {
        $this->redirect();
        $data['title'] = 'E Commerce Store';

        $this->render('partials/header', $data);
        $this->render('partials/components/modal', $data);
        $this->render('partials/footer');
    }

    public function redirect()
    {
        $store = $this->model("StoreModel")->findFirst();

        if ($store) {
            header("Location: " . BASE_URL . "/store/" . $store["id"]);
        }
    }
}
