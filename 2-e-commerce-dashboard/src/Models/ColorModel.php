<?php

use App\Core\Database;

use function App\generateUUID;

class ColorModel
{
    private $tbname = "color";
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function getColorById($id)
    {
        $this->db->query("SELECT * FROM $this->tbname WHERE id = :id");

        $this->db->bind("id", $id);

        $this->db->execute();

        return $this->db->single();
    }

    public function getAllColors()
    {
        $this->db->query("SELECT * FROM $this->tbname");

        return $this->db->resultSet();
    }

    public function createColor($data, $storeId)
    {
        $query = "INSERT INTO $this->tbname (id, storeId, name, value) VALUE (:id, :storeId, :name, :value)";

        $this->db->query($query);

        $this->db->bind("id", generateUUID());
        $this->db->bind("storeId", $storeId);
        $this->db->bind("name", $data["name"]);
        $this->db->bind("value", $data["value"]);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function editColor($data, $colorId)
    {
        $query = "UPDATE $this->tbname SET name = :name, value = :value WHERE id = :colorId";

        $this->db->query($query);
        $this->db->bind("name", $data["name"]);
        $this->db->bind("value", $data["value"]);
        $this->db->bind("colorId", $colorId);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function deleteColor($id)
    {
        $query = "DELETE FROM $this->tbname WHERE id = :id";

        $this->db->query($query);
        $this->db->bind("id", $id);
        $this->db->execute();

        return $this->db->rowCount();
    }
}
