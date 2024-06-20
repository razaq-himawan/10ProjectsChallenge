<?php

$storeId = $data["store"]["id"];

define('STORE_PATH', '/e-commerce-dashboard/public/store/' . $storeId);

function active($endpoint)
{
    $path = explode("/", $_SERVER["REQUEST_URI"]);
    $lastIndex = array_key_last($path);

    return $path[$lastIndex] === $endpoint ? "active" : "";
}

?>

<header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom px-2">
        <div class="container-fluid d-flex gap-3">
            <div class="dropdown">
                <button class="btn btn-tertiary btn-sm border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="d-flex justify-content-between" style="min-width: 10rem;">
                        <?= ucfirst($data["store"]["name"]) ?>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </div>
                </button>
                <ul class="dropdown-menu">
                    <?php foreach ($data["stores"] as $store) { ?>
                        <li>
                            <a class="dropdown-item" href="<?= BASE_URL ?>/store/<?= $store["id"] ?>"><?= ucfirst($store["name"]) ?></a>
                        </li>
                    <?php } ?>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><button id="modal-open-btn" class="dropdown-item">Create new store</button></li>
                </ul>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                <ul class="navbar-nav align-items-md-center align-items-start gap-2">
                    <li class="nav-item">
                        <a class="nav-link <?= active($storeId) ?>" href="<?= BASE_URL ?>/store/<?= $storeId ?>">Overview</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= active('billboards') ?>" href="<?= BASE_URL ?>/store/<?= $storeId ?>/billboards">Billboards</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= active('categories') ?>" href="<?= BASE_URL ?>/store/<?= $storeId ?>/categories">Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= active('sizes') ?>" href="<?= BASE_URL ?>/store/<?= $storeId ?>/sizes">Sizes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= active('colors') ?>" href="<?= BASE_URL ?>/store/<?= $storeId ?>/colors">Colors</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= active('products') ?>" href="<?= BASE_URL ?>/store/<?= $storeId ?>/products">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= active('orders') ?>" href="<?= BASE_URL ?>/store/<?= $storeId ?>/orders">Orders</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= active('settings') ?>" href="<?= BASE_URL ?>/store/<?= $storeId ?>/settings">Settings</a>
                    </li>
                </ul>
                <div class="d-flex gap-4 justify-content-between align-items-center">
                    <div>
                        <button id="mode-toggle-btn" type="button" class="btn border"></button>
                    </div>
                </div>
            </div>
        </div>

        <div>
        </div>
    </nav>
</header>