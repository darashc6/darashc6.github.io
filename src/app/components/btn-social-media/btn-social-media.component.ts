import { Component, Input, OnInit } from '@angular/core';
import { SocialMediaDetails } from '../../models/SocialMediaDetails';

@Component({
  selector: 'app-btn-social-media',
  templateUrl: './btn-social-media.component.html',
  styleUrls: ['./btn-social-media.component.css']
})
export class BtnSocialMediaComponent implements OnInit {
  @Input() socialMediaLink?: SocialMediaDetails

  constructor() { }

  ngOnInit(): void {
  }

  openSocialMediaLink(): void {
    window.open(this.socialMediaLink?.urlLink, "_blank");
  }

  applyCustomStyles() {
    return {
      'icon-github': this.socialMediaLink?.id === 'github',
    }
  }

}
