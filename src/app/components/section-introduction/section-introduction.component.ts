import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-introduction',
  templateUrl: './section-introduction.component.html',
  styleUrls: ['./section-introduction.component.css']
})
export class SectionIntroductionComponent implements OnInit {
  @Input() sectionTitle: string = '';
  @Input() sectionDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
