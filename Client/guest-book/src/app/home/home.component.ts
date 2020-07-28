import { Component, OnInit } from '@angular/core';
//import modul dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import halaman dialog yang sudah dibuat pada tahap sebelumnya
import { TambahAlamatComponent } from '../tambah-alamat/tambah-alamat.component';
import { DetailAlamatComponent } from '../detail-alamat/detail-alamat.component';
import { ApiService } from '../api.service';
import { DialogKonfirmasiComponent } from '../dialog-konfirmasi/dialog-konfirmasi.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog, //menambahkan variabel dialog
    public api: ApiService
  ) { this.getData() }
  dataAlamat: any = [];
  getData() {
    this.api.ambil().subscribe(res => {
      this.dataAlamat = res;
    })
  }

  ngOnInit(): void {
  }

  //fungsi untuk menampilkan dialog penambahan alamat baru
  buatAlamat() {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: '450px',
      data: null
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }
  detailAlamat(item) {
    const dialogRef = this.dialog.open(DetailAlamatComponent, {
      width: '450px',
      data: item // tambahan kode
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  editAlamat(data) {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: '450px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }
  konfirmasiHapus(id) {
    const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        console.log('Menghapus data');
        this.api.hapus(id).subscribe(res => {
          this.getData();
        })
      }
    });
  }

}
