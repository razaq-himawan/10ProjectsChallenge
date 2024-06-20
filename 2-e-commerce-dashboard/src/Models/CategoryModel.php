<?php

use App\Core\Database;

use function App\generateUUID;

class CategoryModel
{
    private $tbname = "category";
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function getCategoryById($id)
    {
        $query = "SELECT c.*, b.label AS billboardLabel 
                  FROM $this->tbname c
                  JOIN billboard b ON c.billboardId = b.id
                  WHERE c.id = :id";

        $this->db->query($query);
        $this->db->bind("id", $id);

        return $this->db->single();
    }

    public function getAllCategories()
    {
        $query = "SELECT c.*, b.label AS billboardLabel 
                  FROM $this->tbname c
                  JOIN billboard b ON c.billboardId = b.id";

        $this->db->query($query);

        return $this->db->resultSet();
    }

    public function createCategory($data, $storeId)
    {
        $query = "INSERT INTO $this->tbname (id, storeId, billboardId, name) 
                  VALUES (:id, :storeId, :billboardId, :name)";

        $this->db->query($query);
        $this->db->bind("id", generateUUID());
        $this->db->bind("storeId", $storeId);
        $this->db->bind("billboardId", $data["billboardId"]);
        $this->db->bind("name", $data["name"]);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function editCategory($data, $categoryId)
    {
        $query = "UPDATE $this->tbname SET billboardId = :billboardId, name = :name WHERE id = :categoryId";

        $this->db->query($query);
        $this->db->bind("billboardId", $data["billboardId"]);
        $this->db->bind("name", $data["name"]);
        $this->db->bind("categoryId", $categoryId);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function deleteCategory($id)
    {
        $query = "DELETE FROM $this->tbname WHERE id = :id";

        $this->db->query($query);
        $this->db->bind("id", $id);
        $this->db->execute();

        return $this->db->rowCount();
    }
}
