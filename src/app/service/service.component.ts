import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../mock-services';
import { Service } from '../service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  services = SERVICES;

  constructor() { }

  ngOnInit() {
  }

}
