import { Component, OnInit } from '@angular/core';
import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  data: any;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  /* ---------- Load data function  ---------- */
  loadData(){
    this.appService.getPlanets().subscribe((response) => {
      this.data = response;
      console.log(response)
    })
  }

}
