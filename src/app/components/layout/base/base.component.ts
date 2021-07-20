import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public toggle: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeClass(): void{
    this.toggle = !this.toggle
  }

}
