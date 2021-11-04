import { Component } from '@angular/core';
import { appIcons } from 'src/assets/icons';
import { IconService } from '@visurel/iconify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(iconService: IconService) {
    iconService.registerAll(appIcons);
  }
}
