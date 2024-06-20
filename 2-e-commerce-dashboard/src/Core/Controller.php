<?php

namespace App\Core;

class Controller
{
    public function render($view, $data = [])
    {
        extract($data);

        require_once "../src/Views/$view.php";
    }

    public function model($model)
    {
        require_once "../src/Models/$model.php";
        return new $model;
    }
}
