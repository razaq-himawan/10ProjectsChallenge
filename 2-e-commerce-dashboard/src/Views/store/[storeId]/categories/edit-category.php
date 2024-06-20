<main class="p-4">
    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h1 class="m-0">Edit Category</h1>
                    <p class="text-body-secondary">Edit a category</p>
                </div>
            </div>
            <hr class="mt-0">
        </div>
    </section>

    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="row col-sm-4">
            <form action="<?= BASE_URL ?>/store/<?= $data["store"]["id"] ?>/categories/edit-category/<?= $data["category"]["id"] ?>" method="post">
                <div class="mb-3">
                    <label for="billboardId" class="col-form-label">Billboard</label>
                    <select id="billboardId" class="form-select" name="billboardId" aria-label="Select Billboard">
                        <option selected value="<?= $data["category"]["billboardId"] ?>"><?= $data["category"]["billboardLabel"] ?></option>
                        <?php foreach ($data["billboards"] as $billboard) { ?>
                            <?php if ($billboard["id"] !== $data["category"]["billboardId"]) { ?>
                                <option value="<?= $billboard["id"] ?>"><?= $billboard["label"] ?></option>
                            <?php } ?>
                        <?php } ?>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="name" class="col-form-label">Name</label>
                    <input type="text" name="name" class="form-control" id="name" value="<?= $data["category"]["name"] ?>" required>
                </div>

                <div>
                    <button type="submit" class="btn btn-dark-light">Update</button>
                </div>
            </form>
        </div>
    </section>
</main>