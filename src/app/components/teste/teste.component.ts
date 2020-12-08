import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  showInformation: boolean = false;
  clicksArray = [];
  clicksCounter = 1;

  constructor() { }

  ngOnInit(): void {
  }


  displayInfo(){
    this.showInformation = true;
    this.clicksArray.push(this.clicksCounter);
    this.clicksCounter++;
  }

}
