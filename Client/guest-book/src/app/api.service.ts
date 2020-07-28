import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl: any = 'http://localhost:8080/Pengunjung/';
  status() {
    return this.http.get(this.apiUrl + 'data');
  }
  ambil() {
    return this.http.get(this.apiUrl + 'data');
  }
  simpan(data) {
    return this.http.post(this.apiUrl + 'add', data);
  }

  ubah(data) {
    return this.http.put(this.apiUrl + 'edit/', data);
  }
  hapus(id) {
    return this.http.delete(this.apiUrl + 'deletedata/' + id);

  }
}
