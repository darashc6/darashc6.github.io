import { Component, OnInit } from '@angular/core';
import { ProjectInfo } from 'src/app/models/ProjectInfo';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsList: ProjectInfo[] = [
    {
      name: "MealVity",
      description: "Food delivery & reservation app, inspired from Just Eat/Uber Eats. Final year project for my App Development Degree.",
      images: [
        "../../../assets/mealvity_demo1_webp.webp",
        "../../../assets/mealvity_demo2_webp.webp",
      ],
      img_mode: "phone",
      project_link: "https://github.com/darashc6/Mealvity",
      languages: [
        {
          id: 'android_studio',
          name: 'A.Studio',
          icon: 'icon_android_studio'
        },
        {
          id: 'kotlin',
          name: 'Kotlin',
          icon: 'icon_kotlin'
        },
        {
          id: 'firebase',
          name: 'Firebase',
          icon: 'icon_firebase'
        },
      ]
    },
    {
      name: "Cosmos Offer Club",
      description: "Website for obtaining coupons and promo codes Amazon has to offer. Participant in the Amazon-Services LLC Associates Program.",
      images: [
        "../../../assets/example.webp"
      ],
      img_mode: "laptop",
      project_link: "https://www.cosmosofferclub.com",
      languages: [
        {
          id: 'react',
          name: 'React',
          icon: 'icon_react'
        },
        {
          id: 'mongodb',
          name: 'MongoDB',
          icon: 'icon_mongodb'
        },
        {
          id: 'nodejs',
          name: 'NodeJS',
          icon: 'icon_nodejs'
        },
      ]
    },
    {
      name: "Mi Conjunto",
      description: "Management system for residential complexes. Two different versions, one for the resident, and the other for the security guard.",
      images: [
        "../../../assets/miconjunto_demo1_webp.webp",
        "../../../assets/miconjunto_demo2_webp.webp",
      ],
      img_mode: "phone",
      project_link: "https://github.com/darashc6/MiConjunto-public",
      languages: [
        {
          id: 'flutter',
          name: 'Flutter',
          icon: 'icon_flutter'
        },
        {
          id: 'firebase',
          name: 'Firebase',
          icon: 'icon_firebase'
        },
        {
          id: 'nodejs',
          name: 'NodeJS',
          icon: 'icon_nodejs'
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openGithubProfile(): void {
    window.open('https://github.com/darashc6', "_blank");
  }

}
