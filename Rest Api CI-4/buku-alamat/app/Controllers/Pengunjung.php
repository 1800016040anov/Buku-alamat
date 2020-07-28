<?php

namespace App\Controllers;

use Codeigniter\Controller;
use CodeIgniter\RESTful\ResourceController;

class Pengunjung extends ResourceController
{
    protected $format = 'json';
    protected $modelName = 'App\Models\PModels';

    public function index()
    {

        return $this->respond($this->model->findAll(), 200);
    }
    public function data()
    {

        return $this->respond($this->model->findAll(), 200);
    }
    public function detail($id = null)
    {
        $get = $this->model->ambildata($id);
        return $this->respond($get, 200);
    }

    public function add()
    {
        $valid = $this->validate([
            'Nama' => [
                'label' => 'Nama',
                'rules' => 'required',
                'errors' => [
                    'required' => '(field) Wajib Diisi dan Tidak Boleh Kosyoong'
                ]
            ]
        ]);
        if (!$valid) {
            $response = [
                'status' => 500,
                'error' => true,
                'data' => \config\Services::validation()->getErrors(),
            ];
            return $this->respond($response, 200);
        } else {
            $Nama = $this->request->getPost('Nama');
            $Alamat = $this->request->getPost('Alamat');
            $Kota = $this->request->getPost('Kota');
            $Propinsi = $this->request->getPost('Propinsi');
            $KodePos = $this->request->getPost('KodePos');
            $Nomer = $this->request->getPost('Nomer');
            $Email = $this->request->getPost('Email');
            $data = [
                'Nama' => $Nama,
                'Alamat' => $Alamat,
                'Kota' =>  $Kota,
                'Propinsi' => $Propinsi,
                'KodePos' => $KodePos,
                'Nomer' => $Nomer,
                'Email' => $Email
            ];
            $simpan = $this->model->adddata($data);
            if ($simpan) {
                $msg = ['massage' => 'data berhasil di daftarkan'];
                $response = [
                    'status' => 200,
                    'error' => true,
                    'data' => $msg,

                ];
                return $this->respond($response, 200);
            }
        }
    }

    public function edit($id = null)
    {
        $valid = $this->validate([
            'Nama' => [
                'label' => 'Nama',
                'rules' => 'required',
                'errors' => [
                    'required' => '(field) Wajib Diisi dan Tidak Boleh Kosyoong'
                ]
            ]
        ]);
        if (!$valid) {
            $response = [
                'status' => 500,
                'error' => true,
                'data' => \config\Services::validation()->getErrors(),
            ];
            return $this->respond($response, 200);
        } else {
            $Nama = $this->request->getPost('Nama');
            $Alamat = $this->request->getPost('Alamat');
            $Kota = $this->request->getPost('Kota');
            $Propinsi = $this->request->getPost('Propinsi');
            $KodePos = $this->request->getPost('KodePos');
            $Nomer = $this->request->getPost('Nomer');
            $Email = $this->request->getPost('Email');
            $data = [
                'Nama' => $Nama,
                'Alamat' => $Alamat,
                'Kota' =>  $Kota,
                'Propinsi' => $Propinsi,
                'KodePos' => $KodePos,
                'Nomer' => $Nomer,
                'Email' => $Email
            ];
            $edit = $this->model->updatedata($data, $id);
            if ($edit) {
                $msg = ['massage' => 'data berhasil di editkeun'];
                $response = [
                    'status' => 200,
                    'error' => true,
                    'data' => $msg,

                ];
                return $this->respond($response, 200);
            }
        }
    }
    public function deletedata($id = null)
    {
        $this->model->deletedata($id);
        $msg = ['message' => 'data barang berhasil dihapus gan'];

        $response = [
            'data' => $msg,
        ];
        return $this->respond($response, 200);
    }
}
