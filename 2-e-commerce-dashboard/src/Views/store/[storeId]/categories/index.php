<main class="d-flex flex-column p-4">

    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h1 class="m-0">Categories (<?= count($data["categories"]) ?>)</h1>
                    <p class="text-body-secondary">Manage categories for your store</p>
                </div>
                <div>
                    <a href="categories/create" class="btn btn-dark-light">
                        + Add New
                    </a>
                </div>
            </div>

            <hr class="mt-0">
        </div>
    </section>

    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="border">
            <table class="table m-0">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Billboard</th>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($data["categories"] as $category) { ?>
                        <tr class="align-middle">
                            <td class="col"><?= $category["name"] ?></td>
                            <td class="col"><?= $category["billboardLabel"] ?></td>
                            <td><?= date('Y-m-d', strtotime($category["updatedAt"])) ?></td>
                            <td>
                                <div class="dropdown">
                                    <button class="btn rounded-circle d-flex justify-content-center align-items-center btn-ellipsis" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="<?= BASE_URL ?>/store/<?= $data["store"]["id"] ?>/categories/<?= $category["id"] ?>" class="dropdown-item d-flex gap-2" type="button">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                    </svg>
                                                </span>
                                                Edit
                                            </a>
                                        </li>
                                        <li>
                                            <button class="dropdown-item d-flex gap-2" type="button" data-bs-toggle="modal" data-bs-target="#<?= $category["id"] ?>">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                    </svg>
                                                </span>
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <div class="modal fade" id="<?= $category["id"] ?>" tabindex="-1" aria-labelledby="<?= $category["id"] ?>Label" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="<?= $category["id"] ?>Label">Delete categories</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure want to delete <b><?= $category["name"] ?></b>?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button id="btn-delete-category" type="button" data-category-id="<?= $category["id"] ?>" class="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>

    </section>



</main>