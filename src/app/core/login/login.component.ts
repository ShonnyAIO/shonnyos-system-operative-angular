import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  password!: number;
  error: string = '';

  ngOnInit(): void {
  }

  openDesktop() {
    if (this.password == 12345678) {
      this.router.navigate(['desktop']);
    } else {
      this.error = 'Sorry, the password is wrong';
    }

  }

}
