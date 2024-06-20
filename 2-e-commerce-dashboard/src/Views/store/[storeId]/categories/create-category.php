<main class="p-4">
    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h1 class="m-0">Create Category</h1>
                    <p class="text-body-secondary">Add a new category</p>
                </div>
            </div>
            <hr class="mt-0">
        </div>
    </section>

    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="row col-sm-4">
            <form action="<?= BASE_URL ?>/store/<?= $data["store"]["id"] ?>/categories/create-category" method="post">

                <div class="mb-3">
                    <label for="billboardId" class="col-form-label">Billboard</label>
                    <select id="billboardId" class="form-select" name="billboardId" aria-label="Select Billboard">
                        <option selected disabled hidden>-- Choose billboard --</option>
                        <?php foreach ($data["billboards"] as $billboard) { ?>
                            <option value="<?= $billboard["id"] ?>"><?= $billboard["label"] ?></option>
                        <?php } ?>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="name" class="col-form-label">Name</label>
                    <input type="text" name="name" class="form-control" id="name" required>
                </div>

                <div>
                    <button type="submit" class="btn btn-dark-light">Create</button>
                </div>
            </form>
        </div>
    </section>
</main>