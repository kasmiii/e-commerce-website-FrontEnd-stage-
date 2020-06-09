import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  config:Config;
  constructor() { }

  ngOnInit() {
  }

  


}
