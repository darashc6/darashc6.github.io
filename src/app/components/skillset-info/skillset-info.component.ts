import { Component, Input, OnInit } from '@angular/core';
import { SkillSetInfo } from 'src/app/models/SkillSetInfo';

@Component({
  selector: 'app-skillset-info',
  templateUrl: './skillset-info.component.html',
  styleUrls: ['./skillset-info.component.css']
})
export class SkillsetInfoComponent implements OnInit {
  @Input() skillsetInfo?: SkillSetInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
