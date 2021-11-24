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
      'description': 'I spend the majority of my time working on web technologies, especially with Angular. Code quality and best practices are huge priorities.',
      'icon': 'icon_web_development',
      'languages': [
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
      'description': 'I\'ve also gained experience building Android applications, both natively with Java/Kotlin, and with cross platform languages such as Flutter. ',
      'icon': 'icon_android',
      'languages': [
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
