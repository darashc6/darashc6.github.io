import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetInfoComponent } from './skillset-info.component';

describe('SkillsetInfoComponent', () => {
  let component: SkillsetInfoComponent;
  let fixture: ComponentFixture<SkillsetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsetInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
