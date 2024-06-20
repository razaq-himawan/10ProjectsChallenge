<main class="p-4">

    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h1 class="m-0">Settings</h1>
                    <p class="text-body-secondary">Manage store preferences</p>
                </div>
                <div>
                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteStoreModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                    </button>
                </div>
            </div>

            <hr class="mt-0">

            <div class="modal fade" id="deleteStoreModal" tabindex="-1" aria-labelledby="deleteStoreModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="deleteStoreModalLabel">Delete Store</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure want to delete?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button id="btn-delete-store" type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="name" class="col-form-label">Store name</label>
                            <input id="input-update-store" type="text" name="name" class="form-control" id="name" data-store-name="<?= $data["store"]["name"] ?>" value="<?= $data["store"]["name"] ?>" required>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button id="btn-update-store" type="submit" class="btn btn-dark-light">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>