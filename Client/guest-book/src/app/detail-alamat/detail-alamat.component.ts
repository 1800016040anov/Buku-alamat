import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-detail-alamat',
  templateUrl: './detail-alamat.component.html',
  styleUrls: ['./detail-alamat.component.css'],
})
export class DetailAlamatComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DetailAlamatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit() {
  }
}