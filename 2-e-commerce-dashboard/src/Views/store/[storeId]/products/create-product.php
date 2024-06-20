<main class="p-4">
    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h1 class="m-0">Create Product</h1>
                    <p class="text-body-secondary">Add a new product</p>
                </div>
            </div>
            <hr class="mt-0">
        </div>
    </section>

    <section class="d-flex flex-column gap-4 container-fluid">
        <form action="<?= BASE_URL ?>/store/<?= $data["store"]["id"] ?>/products/create-product" method="post">
            <div class="row col-sm-4">
                <div id="image-preview-container" class="mb-3" hidden>
                    <label for="image-preview" class="form-label">Background image</label>
                    <div>
                        <img id="image-preview" src="" class="img-thumbnail" alt="">
                    </div>
                </div>

                <div class="mb-3">
                    <label for="input-image-file" class="form-label">Upload an image</label>
                    <input class="form-control" type="file" id="input-image-file" name="image">
                </div>
            </div>

            <div class="row">
                <div class="mb-3 col-sm-4">
                    <label for="name" class="col-form-label">Name</label>
                    <input type="text" name="name" class="form-control" id="name" required>
                </div>
                <div class="mb-3 col-sm-4">
                    <label for="price" class="col-form-label">Price</label>
                    <input type="text" name="price" class="form-control" id="price" required>
                </div>
                <div class="mb-3 col-sm-4">
                    <label for="categoryId" class="col-form-label">Category</label>
                    <select id="categoryId" class="form-select" name="categoryId" aria-label="Select Categories">
                        <option selected disabled hidden>-- Choose category --</option>
                        <?php foreach ($data["categories"] as $category) { ?>
                            <option value="<?= $category["id"] ?>"><?= $category["name"] ?></option>
                        <?php } ?>
                    </select>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="mb-3 col-sm-4">
                    <label for="sizeId" class="col-form-label">Size</label>
                    <select id="sizeId" class="form-select" name="sizeId" aria-label="Select Sizes">
                        <option selected disabled hidden>-- Choose size --</option>
                        <?php foreach ($data["sizes"] as $size) { ?>
                            <option value="<?= $size["id"] ?>"><?= $size["name"] ?></option>
                        <?php } ?>
                    </select>
                </div>
                <div class="mb-3 col-sm-4">
                    <label for="colorId" class="col-form-label">Color</label>
                    <select id="colorId" class="form-select" name="colorId" aria-label="Select Color">
                        <option selected disabled hidden>-- Choose color --</option>
                        <?php foreach ($data["colors"] as $color) { ?>
                            <option value="<?= $color["id"] ?>"><?= $color["name"] ?></option>
                        <?php } ?>
                    </select>
                </div>
                <div class="mb-3 col-sm-4 card">
                    <div class="">
                        <input type="checkbox" name="isFeatured" id="isFeatured" class="form-checkbox">
                        <label for="isFeatured" class="col-form-label">Featured</label>
                    </div>
                    <p class="text-body-secondary">
                        This product will appear on the home page
                    </p>
                </div>
            </div>

            <div class="row align-items-center p-2">
                <div class="mb-3 col-sm-4 card">
                    <div class="">
                        <input type="checkbox" name="isArchived" id="isArchived" class="form-checkbox">
                        <label for="isArchived" class="col-form-label">Archived</label>
                    </div>
                    <p class="text-body-secondary">
                        This product will not appear anywhere on the page
                    </p>
                </div>
            </div>


            <div>
                <button type="submit" class="btn btn-dark-light">Create</button>
            </div>
        </form>
    </section>
</main>