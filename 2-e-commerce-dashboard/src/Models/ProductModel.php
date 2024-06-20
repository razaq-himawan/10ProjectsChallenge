<?php

use App\Core\Database;

use function App\generateUUID;

class ProductModel
{
    private $tbname = "product";
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function getProductById($id)
    {
        $query = "
        SELECT p.*, c.name AS categoryName, c.id AS categoryId, z.name AS sizeName, z.id AS sizeId, k.value AS colorValue, k.id AS colorId
        FROM $this->tbname p
        JOIN category c ON p.categoryId = c.id
        JOIN size z ON p.sizeId = z.id
        JOIN color k ON p.colorId = k.id
        WHERE p.id = :id
        ";

        $this->db->query($query);
        $this->db->bind("id", $id);

        return $this->db->single();
    }

    public function getAllProducts()
    {
        $query = "
        SELECT p.*, c.name AS categoryName, c.id AS categoryId, z.name AS sizeName, z.id AS sizeId, k.value AS colorValue, k.id AS colorId
        FROM $this->tbname p
        JOIN category c ON p.categoryId = c.id
        JOIN size z ON p.sizeId = z.id
        JOIN color k ON p.colorId = k.id
        ";

        $this->db->query($query);

        return $this->db->resultSet();
    }

    public function createProduct($data, $storeId)
    {
        $query = "INSERT INTO $this->tbname (id, storeId, categoryId, name, price, isFeatured, isArchived, sizeId, colorId) VALUES (:id, :storeId, :categoryId, :name, :price, :isFeatured, :isArchived, :sizeId, :colorId)";

        $isFeatured = !$data["isFeatured"] ? 0 : 1;
        $isArchived = !$data["isArchived"] ? 0 : 1;

        $this->db->query($query);
        $this->db->bind("id", generateUUID());
        $this->db->bind("storeId", $storeId);
        $this->db->bind("categoryId", $data["categoryId"]);
        $this->db->bind("name", $data["name"]);
        $this->db->bind("price", $data["price"]);
        $this->db->bind("isFeatured", $isFeatured);
        $this->db->bind("isArchived", $isArchived);
        $this->db->bind("sizeId", $data["sizeId"]);
        $this->db->bind("colorId", $data["colorId"]);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function editProduct($data, $productId)
    {
        $query = "UPDATE $this->tbname SET categoryId = :categoryId, name = :name, price = :price, isFeatured = :isFeatured, isArchived = :isArchived, sizeId = :sizeId, colorId = :colorId WHERE id = :id";

        $isFeatured = !$data["isFeatured"] ? 0 : 1;
        $isArchived = !$data["isArchived"] ? 0 : 1;

        $this->db->query($query);
        $this->db->bind("id", $productId);
        $this->db->bind("categoryId", $data["categoryId"]);
        $this->db->bind("name", $data["name"]);
        $this->db->bind("price", $data["price"]);
        $this->db->bind("isFeatured", $isFeatured);
        $this->db->bind("isArchived", $isArchived);
        $this->db->bind("sizeId", $data["sizeId"]);
        $this->db->bind("colorId", $data["colorId"]);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function deleteProduct($id)
    {
        $query = "DELETE FROM `$this->tbname` WHERE id = :id";

        $this->db->query($query);
        $this->db->bind("id", $id);
        $this->db->execute();

        return $this->db->rowCount();
    }
}
