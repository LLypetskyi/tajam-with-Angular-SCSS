import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParentComponent } from './binding/parent/parent.component';
import { Child1Component } from './binding/child1/child1.component';
import { Child2Component } from './binding/child2/child2.component';
import { NavBarComponent } from './navNew/nav-bar/nav-bar.component';
import { NavBarItemComponent } from './navNew/nav-bar/nav-bar-item/nav-bar-item.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './header/carousel/carousel.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    NavBarComponent,
    NavBarItemComponent,
    HeaderComponent,
    CarouselComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
