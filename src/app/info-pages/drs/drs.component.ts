import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-drs',
  templateUrl: './drs.component.html',
  styleUrls: ['./drs.component.scss']
})
export class DrsComponent implements OnInit {

  constructor(private _title: Title, private _meta: Meta){
    this._title.setTitle('DRS - Direct Registration System - gmetimeline.org');

    const description = 'DRS - Direct Registration System'
    this._meta.updateTag({ name: 'description', content: description })
  }

  ngOnInit(){

  }

}
