import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-dresses',
  templateUrl: 'dresses.component.html',
  styleUrls: ['dresses.component.css']
})
export class DressesComponent implements OnInit {

  constructor() {
      console.log('Dress Component constructor()');
  }

  ngOnInit() {
      console.log('Dress Component ngOnInit()');
  }

}
