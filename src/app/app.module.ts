import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './header/carousel/carousel.component';
import { StoryComponent } from './story/story.component';
import { ExpertiseComponent } from './expertise/expertise/expertise.component';
import { FooterComponent } from './footer/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CarouselComponent,
    StoryComponent,
    ExpertiseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
