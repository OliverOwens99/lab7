import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connaught',
  templateUrl: './connaught.page.html',
  styleUrls: ['./connaught.page.scss'],
})
export class ConnaughtPage implements OnInit {
  counties:string[] = ["Sligo","Mayo","Galway","Claire", "Roscommon"];
  
  constructor() { }

  ngOnInit() {
      
  }

}
