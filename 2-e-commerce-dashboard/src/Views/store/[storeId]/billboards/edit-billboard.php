<main class="p-4">
    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h1 class="m-0">Edit Billboard</h1>
                    <p class="text-body-secondary">Edit a billboard</p>
                </div>
                <div>
                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#<?= $data["billboard"]["id"] ?>">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                    </button>
                </div>
            </div>

            <hr class="mt-0">
        </div>
    </section>

    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="row col-sm-4">
            <div id="image-preview-container" class="mb-3">
                <label for="image-preview" class="form-label">Background image</label>
                <div>
                    <img id="image-preview" src="<?= BASE_URL ?>/img/uploads/<?= $data["billboard"]["imagePath"] ?>" class="img-thumbnail" alt="">
                </div>
            </div>

            <form action="<?= BASE_URL ?>/store/<?= $data["store"]["id"] ?>/billboards/edit-billboard/<?= $data["billboard"]["id"] ?>" method="post" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="input-image-file" class="form-label">Upload an image</label>
                    <input class="form-control" type="file" id="input-image-file" name="image">
                </div>

                <div class="mb-3">
                    <label for="label" class="col-form-label">label</label>
                    <input type="text" name="label" class="form-control" id="label" value="<?= $data["billboard"]["label"] ?>" required>
                </div>

                <div>
                    <button type="submit" class="btn btn-dark-light">Update</button>
                </div>
            </form>
        </div>
    </section>
</main>


<div class="modal fade" id="<?= $billboard["id"] ?>" tabindex="-1" aria-labelledby="<?= $billboard["id"] ?>Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="<?= $billboard["id"] ?>Label">Delete Billboard</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure want to delete <b><?= $billboard["label"] ?></b>?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button id="btn-delete-billboard" type="button" data-image-path="<?= $billboard["imagePath"] ?>" data-billboard-id="<?= $billboard["id"] ?>" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</div>