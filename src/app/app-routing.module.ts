import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StoryComponent } from './story/story.component';
import { ExpertiseComponent } from './expertise/expertise/expertise.component';

const appRoutes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: StoryComponent },
  { path: 'expertise', component: ExpertiseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
