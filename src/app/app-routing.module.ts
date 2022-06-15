import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StoryComponent } from './story/story.component';
import { ExpertiseComponent } from './expertise/expertise/expertise.component';
import { TeamComponent } from './team/team.component';
import { WorksComponent } from './works/works.component';
import { PeopleSayComponent } from './people-say/people-say.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: StoryComponent },
  { path: 'expertise', component: ExpertiseComponent },
  { path: 'teams', component: TeamComponent },
  { path: 'works', component: WorksComponent },
  { path: 'people say', component: PeopleSayComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
