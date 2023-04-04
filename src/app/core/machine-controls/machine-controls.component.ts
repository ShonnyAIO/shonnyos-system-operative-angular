import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine-controls',
  templateUrl: './machine-controls.component.html',
  styleUrls: ['./machine-controls.component.scss']
})
export class MachineControlsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  shutDown() {
    window.open('', '_self', '');
    window.close();
  }

  restart() {
    this.router.navigate(['boot']);
  }

  sleep() {
    alert('Im going to Sleep :D');
  }

}
