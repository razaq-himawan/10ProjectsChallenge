<?php

use App\Core\Database;

use function App\generateUUID;

class BillboardModel
{
    private $tbname = "billboard";
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function getBillboardById($id)
    {
        $this->db->query("SELECT * FROM $this->tbname WHERE id = :id");

        $this->db->bind("id", $id);

        return $this->db->single();
    }

    public function getAllBillboards()
    {
        $this->db->query("SELECT * FROM $this->tbname");

        return $this->db->resultSet();
    }

    public function createBillboard($data, $storeId)
    {
        $query = "INSERT INTO $this->tbname (id, storeId, imagePath, label) VALUES (:id, :storeId, :imagePath, :label)";

        $imagePath = $this->uploadImage();

        if (!$imagePath) {
            echo "Image cannot be empty";
            exit;
        }

        $this->db->query($query);

        $this->db->bind("id", generateUUID());
        $this->db->bind("storeId", $storeId);
        $this->db->bind("imagePath", $imagePath);
        $this->db->bind("label", $data["label"]);

        $this->db->execute();

        return $this->db->rowCount();
    }

    public function editBillboard($data, $billboardId)
    {
        $oldImagePath = $this->getOldImagePath($billboardId);

        $query = "UPDATE $this->tbname SET label = :label";

        $imagePath = $this->uploadImage($oldImagePath);
        if ($imagePath !== null) {
            $query .= ", imagePath = :imagePath";
        }

        $query .= " WHERE id = :billboardId";

        $this->db->query($query);
        $this->db->bind("billboardId", $billboardId);
        $this->db->bind("label", $data["label"]);

        if ($imagePath !== null) {
            $this->db->bind("imagePath", $imagePath);
        }

        $this->db->execute();

        return $this->db->rowCount();
    }


    public function deleteBillboard($billboardId, $imageToDelete)
    {
        $targetDir = '../public/img/uploads/';
        $imageToDelete = $targetDir . $imageToDelete;

        if (file_exists($imageToDelete)) {
            if (unlink($imageToDelete)) {
                $query = "DELETE FROM $this->tbname WHERE id = :id";

                $this->db->query($query);
                $this->db->bind("id", $billboardId);

                $this->db->execute();

                return $this->db->rowCount();
            }
        }
    }

    public function getOldImagePath($billboardId)
    {
        $query = "SELECT imagePath FROM $this->tbname WHERE id = :billboardId";
        $this->db->query($query);
        $this->db->bind("billboardId", $billboardId);
        $result = $this->db->single();

        return $result ? $result["imagePath"] : null;
    }

    public function uploadImage($oldImagePath = null)
    {
        $targetDir = '../public/img/uploads/';

        if (!empty($_FILES["image"]["name"])) {
            if (!empty($oldImagePath)) {
                unlink($targetDir . $oldImagePath);
            }

            $fileName = basename($_FILES["image"]["name"]);
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

            $allowTypes = ["jpg", "png", "jpeg"];

            if (in_array($fileType, $allowTypes)) {
                if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFilePath)) {
                    return $fileName;
                }
            }
        }

        return null;
    }
}
