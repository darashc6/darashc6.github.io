import { Component, OnInit, Input } from '@angular/core';
import { LanguageInfo } from 'src/app/models/LanguageInfo';

@Component({
  selector: 'app-language-info',
  templateUrl: './language-info.component.html',
  styleUrls: ['./language-info.component.css']
})
export class LanguageInfoComponent implements OnInit {
  @Input() languageInfo?: LanguageInfo;

  constructor() { }

  ngOnInit(): void {
  }

  applyCustomStyles() {
    return {
      'icon-android-studio': this.languageInfo?.id === 'android_studio'
    }
  }

}
