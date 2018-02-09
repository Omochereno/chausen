import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear = new Date().getFullYear();
  footerText = 'Copyright © ' + this.currentYear;
  email = 'name@mail.com';
  phone = '0698765432';
  constructor() { }

  ngOnInit() {
  }

}
