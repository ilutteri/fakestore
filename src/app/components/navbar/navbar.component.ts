import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from 'src/app/class/nav-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() label = '';
  @Input() items: NavItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
