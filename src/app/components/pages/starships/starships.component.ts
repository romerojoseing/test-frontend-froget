import { Component, OnInit } from '@angular/core';
import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  data: any;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  /* ---------- Load data function  ---------- */
  loadData(){
    this.appService.getStarships().subscribe((response) => {
      this.data = response;
      console.log(response)
    })
  }

}
