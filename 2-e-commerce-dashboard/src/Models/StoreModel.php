<?php

use App\Core\Database;

use function App\generateUUID;

class StoreModel
{
    private $tbname = "store";
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function getStorebyId($id)
    {
        $this->db->query("SELECT * FROM $this->tbname WHERE id = :id");

        $this->db->bind("id", $id);

        return $this->db->single();
    }

    public function getAllStores()
    {
        $this->db->query("SELECT * FROM $this->tbname");

        return $this->db->resultSet();
    }

    public function createStore($data)
    {
        $query = "INSERT INTO $this->tbname (id, name) VALUES (:id, :name)";

        $this->db->query($query);
        $this->db->bind("id", generateUUID());
        $this->db->bind("name", $data["name"]);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function updateStore($data, $id)
    {
        $query = "UPDATE $this->tbname SET name = :name WHERE id = :id";

        $this->db->query($query);
        $this->db->bind("name", $data['name']);
        $this->db->bind("id", $id);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function deleteStore($id)
    {
        $query = "DELETE FROM $this->tbname WHERE id = :id";

        $this->db->query($query);
        $this->db->bind("id", $id);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function findFirst()
    {
        $query = "SELECT * FROM $this->tbname ORDER BY createdAt DESC LIMIT 1";

        $this->db->query($query);

        $this->db->execute();

        return $this->db->single();
    }
}
