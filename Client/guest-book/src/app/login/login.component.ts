import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }
  data: any = {};
  masuk(data) {
    if ((data.username == 'admin') && (data.password == 'admin')) {
      this.router.navigate(['/home']);
    }
  }
}