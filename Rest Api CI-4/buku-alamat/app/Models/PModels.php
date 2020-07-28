<?php

namespace App\Models;

use CodeIgniter\Model;

class PModels extends Model
{
    protected $table = 'pengunjung';
    public function ambildata($id = null)
    {
        if ($id == false) {
            return $this->findAll();
        } else {
            return $this->getWhere(['id', $id])->getRowArray();
        }
    }
    public function adddata($data)
    {
        return $this->db->table($this->table)->insert($data);
    }
    public function updatedata($data, $id)
    {
        return $this->db->table($this->table)->update($data, ['id' => $id]);
    }
    public function deletedata($id = null)
    {
        return $this->db->table($this->table)->delete(['id' => $id]);
    }
}
