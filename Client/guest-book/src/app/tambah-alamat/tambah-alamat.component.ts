import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-tambah-alamat',
  templateUrl: './tambah-alamat.component.html',
  styleUrls: ['./tambah-alamat.component.css']
})
export class TambahAlamatComponent implements OnInit {
  data: any = {};
  constructor(
    public api: ApiService,
    public dialogRef: MatDialogRef<TambahAlamatComponent>,
    @Inject(MAT_DIALOG_DATA) public itemData: any
  ) {
    if (itemData != null) {
      this.data = itemData;
    }
  }
  ngOnInit() { }
  simpan(data) {
    if (data.id == undefined) {
      this.api.simpan(data).subscribe(res => {
        this.dialogRef.close(true);
      });
    } else {
      this.api.ubah(data).subscribe(res => {
        this.dialogRef.close(true);
      })
    }
  }
}