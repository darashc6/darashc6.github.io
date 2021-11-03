import { Component, OnInit } from '@angular/core';
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { SocialMediaDetails } from '../models/SocialMediaDetails';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  socialMediaLinks: SocialMediaDetails[] = [
    {
      'id': 'twitter',
      'urlLink': 'https://twitter.com/darashc6',
      'icon': faTwitter,
    },
    {
      'id': 'github',
      'urlLink': 'https://github.com/darashc6/',
      'icon': faGithub,
    },
    {
      'id': 'twitter',
      'urlLink': 'https://www.linkedin.com/in/darash-chablani-desarrollador-multiplataforma/',
      'icon': faLinkedin,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
