import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-drs',
  templateUrl: './drs.component.html',
  styleUrls: ['./drs.component.scss']
})
export class DrsComponent implements OnInit {

  constructor(private _title: Title){
    this._title.setTitle('DRS - Direct Registration System - gmetimeline.org');
  }

  ngOnInit(){

  }

}
