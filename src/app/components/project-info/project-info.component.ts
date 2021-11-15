import { Component, Input, OnInit } from '@angular/core';
import { ProjectInfo } from 'src/app/models/ProjectInfo';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  @Input() project?: ProjectInfo;

  constructor() { }

  ngOnInit(): void {
  }

  visitLink(): void {
    window.open(this.project?.website_link || this.project?.github_link);
  }

  setWidth() {
    return this.project?.img_mode == "laptop" ? 300 : 100
  }

}
