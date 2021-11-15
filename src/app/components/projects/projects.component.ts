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
      description: "Food delivery & reservation app, inspired from Just Eat/Uber Eats. Final year project for my App Development Course.",
      img_src: "../../../assets/mealvity_demo_webp.webp",
      img_mode: "phone",
      github_link: "https://github.com/darashc6/Mealvity",
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
      img_src: "../../../assets/cosmos_demo_webp.webp",
      img_mode: "laptop",
      github_link: "https://www.cosmosofferclub.com",
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
      img_src: "../../../assets/miconjunto_demo_webp.webp",
      img_mode: "phone",
      github_link: "https://www.cosmosofferclub.com",
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
