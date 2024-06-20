<main class="p-4">
    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h1 class="m-0">Create Billboard</h1>
                    <p class="text-body-secondary">Add a new billboard</p>
                </div>
            </div>
            <hr class="mt-0">
        </div>
    </section>

    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="row col-sm-4">
            <div id="image-preview-container" class="mb-3" hidden>
                <div>
                    <img id="image-preview" src="" class="img-thumbnail" alt="">
                </div>
            </div>

            <form action="<?= BASE_URL ?>/store/<?= $data["store"]["id"] ?>/billboards/create-billboard" method="post" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="input-image-file" class="form-label">Upload an image</label>
                    <input class="form-control" type="file" id="input-image-file" name="image">
                </div>

                <div class="mb-3">
                    <label for="label" class="col-form-label">Label</label>
                    <input type="text" name="label" class="form-control" id="label" required>
                </div>

                <div>
                    <button type="submit" class="btn btn-dark-light">Create</button>
                </div>
            </form>
        </div>
    </section>
</main>