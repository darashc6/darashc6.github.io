import { Component, OnInit } from '@angular/core';
import { SkillSetInfo } from 'src/app/models/SkillSetInfo';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  skillset: SkillSetInfo[] = [
    {
      'id': 'web_development',
      'title': 'Web Development',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna',
      'icon': 'icon_web_development',
      'languages': [
        {
          'id': 'html',
          'name': 'HTML5',
          'icon': 'icon_html5'
        },
        {
          'id': 'css',
          'name': 'CSS3',
          'icon': 'icon_css3'
        },
        {
          'id': 'react',
          'name': 'React',
          'icon': 'icon_react'
        },
        {
          'id': 'angular',
          'name': 'Angular',
          'icon': 'icon_angular'
        },
        {
          'id': 'nodejs',
          'name': 'NodeJS',
          'icon': 'icon_nodejs'
        },
      ]
    },
    {
      'id': 'android_development',
      'title': 'Android',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna',
      'icon': 'icon_android',
      'languages': [
        {
          'id': 'android_studio',
          'name': 'A.Studio',
          'icon': 'icon_android_studio'
        },
        {
          'id': 'java',
          'name': 'Java',
          'icon': 'icon_java'
        },
        {
          'id': 'kotlin',
          'name': 'Koltin',
          'icon': 'icon_kotlin'
        },
        {
          'id': 'flutter',
          'name': 'Flutter',
          'icon': 'icon_flutter'
        },
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
