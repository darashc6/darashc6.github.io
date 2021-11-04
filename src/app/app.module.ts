import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsetComponent } from './components/skillset/skillset.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { BtnSocialMediaComponent } from './components/btn-social-media/btn-social-media.component';
import { IconModule } from '@visurel/iconify-angular';
import { SectionIntroductionComponent } from './components/section-introduction/section-introduction.component';
import { SkillsetInfoComponent } from './components/skillset-info/skillset-info.component';
import { LanguageInfoComponent } from './components/language-info/language-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SkillsetComponent,
    ProjectsComponent,
    ContactComponent,
    BtnSocialMediaComponent,
    SectionIntroductionComponent,
    SkillsetInfoComponent,
    LanguageInfoComponent,
  ],
  imports: [BrowserModule, IconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
