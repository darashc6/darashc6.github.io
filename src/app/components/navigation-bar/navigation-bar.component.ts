import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToSection(section_name: string) {
    document.querySelector('.navbar-items')?.classList.toggle('open');
    document.querySelector('.navbar-background')?.classList.toggle('navbar-open');
    document.getElementById(section_name)?.scrollIntoView({
      behavior: "smooth"
    });
  }

  toggleNavigationBar() {
    document.querySelector('.navbar-items')?.classList.toggle('open');
    document.querySelector('.navbar-background')?.classList.toggle('navbar-open');
  }
}
