import { Component, OnInit } from '@angular/core';
import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {

  data: any;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  /* ---------- Load data function  ---------- */
  loadData(){
    this.appService.getPeople().subscribe((response) => {
      this.data = response;
      console.log(response)
    })
  }

}
