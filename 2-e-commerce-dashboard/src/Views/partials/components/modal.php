<div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="formStoreModal" tabindex="-1" aria-labelledby="formStoreLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="formStoreLabel">Create New Store</h1>
                <button id="modal-close-x" type="button" class="btn-close" hidden="true" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="<?= BASE_URL ?>/store/create-store" method="post">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="name" class="col-form-label">Store name</label>
                        <input type="text" name="name" class="form-control" id="name" autocomplete="off" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="modal-close-btn" type="button" class="btn btn-secondary" hidden="true" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>