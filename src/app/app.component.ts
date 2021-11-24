import { Component } from '@angular/core';
import { appIcons } from 'src/assets/icons';
import { IconService } from '@visurel/iconify-angular';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(iconService: IconService, private scroller: ViewportScroller) {
    iconService.registerAll(appIcons);
  }

  goDown() {
    // console.log(document.getElementById("example"));
  }
}
