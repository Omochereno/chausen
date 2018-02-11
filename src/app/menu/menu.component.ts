import { Component, OnInit } from '@angular/core';
import { isComponentView } from '@angular/core/src/view/util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  logo = './assets/Warlock_Bird.png';
  isDropdown = false;
  menuClass = this.isDropdown ? 'menu Responsive' : 'menu';
  constructor() { }

  ngOnInit() {
  }

  toggleClass() {
    if (this.menuClass === 'menu Responsive') {
      this.menuClass = 'menu';
    } else {
      this.menuClass = 'menu Responsive';
    }
  }

  getMenuClass() {
    return this.menuClass;
  }
}


