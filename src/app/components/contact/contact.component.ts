import { Component, OnInit } from '@angular/core';
import { SocialMediaDetails } from '../../models/SocialMediaDetails';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  socialMediaLinks: SocialMediaDetails[] = [
    {
      'id': 'twitter',
      'urlLink': 'https://twitter.com/darashc6',
      'icon': 'icon_twitter',
    },
    {
      'id': 'github',
      'urlLink': 'https://github.com/darashc6/',
      'icon': 'icon_github',
    },
    {
      'id': 'linkedin',
      'urlLink': 'https://www.linkedin.com/in/darash-chablani-desarrollador-multiplataforma/',
      'icon': 'icon_linkedin',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
