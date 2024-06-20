<main class="p-4">
    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h1 class="m-0">Create Size</h1>
                    <p class="text-body-secondary">Add a new size</p>
                </div>
            </div>
            <hr class="mt-0">
        </div>
    </section>

    <section class="d-flex flex-column gap-4 container-fluid">
        <div class="row col-sm-6">
            <form action="<?= BASE_URL ?>/store/<?= $data["store"]["id"] ?>/sizes/create-size" method="post">
                <div class="d-md-flex gap-4">
                    <div class="mb-3">
                        <label for="name" class="col-form-label">Name</label>
                        <input type="text" name="name" class="form-control" id="label" required>
                    </div>
                    <div class="mb-3">
                        <label for="value" class="col-form-label">Value</label>
                        <input type="text" name="value" class="form-control" id="value" required>
                    </div>
                </div>

                <div>
                    <button type="submit" class="btn btn-dark-light">Create</button>
                </div>
            </form>
        </div>
    </section>
</main>