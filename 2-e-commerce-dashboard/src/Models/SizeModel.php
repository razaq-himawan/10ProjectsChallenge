<?php

use App\Core\Database;

use function App\generateUUID;

class SizeModel
{
    private $tbname = "size";
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function getSizeById($id)
    {
        $this->db->query("SELECT * FROM $this->tbname WHERE id = :id");

        $this->db->bind("id", $id);

        return $this->db->single();
    }

    public function getAllSizes()
    {
        $this->db->query("SELECT * FROM $this->tbname");

        return $this->db->resultSet();
    }

    public function createSize($data, $storeId)
    {
        $query = "INSERT INTO $this->tbname (id, storeId, name, value) VALUES (:id, :storeId, :name, :value)";

        $this->db->query($query);

        $this->db->bind("id", generateUUID());
        $this->db->bind("storeId", $storeId);
        $this->db->bind("name", $data["name"]);
        $this->db->bind("value", $data["value"]);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function  editSize($data, $sizeId)
    {
        $query = "UPDATE $this->tbname SET name = :name, value = :value WHERE id = :sizeId";

        $this->db->query($query);

        $this->db->bind("name", $data["name"]);
        $this->db->bind("value", $data["value"]);
        $this->db->bind("sizeId", $sizeId);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function deleteSize($id)
    {
        $query = "DELETE FROM $this->tbname WHERE id = :id";

        $this->db->query($query);
        $this->db->bind("id", $id);
        $this->db->execute();

        return $this->db->rowCount();
    }
}
