import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerItemsComponent } from './components/banner-items/banner-items.component';
import { NoticeComponent } from './components/notice/notice.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NewsComponent } from './components/news/news.component';
import { CarouselNewsComponent } from './structures/carousel-news/carousel-news.component';
import { GalleryComponent } from './structures/gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ThemeModule, lightTheme, darkTheme } from './components/theme';
import { NewsPageComponent } from './news-page/news-page.component';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { NewsMainComponent } from './components/news-main/news-main.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { PopularStoriesComponent } from './components/popular-stories/popular-stories.component';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';
import { TitleDetailedComponent } from './components/title-detailed/title-detailed.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BannerItemsComponent,
    NoticeComponent,
    CarouselComponent,
    NewsComponent,
    CarouselNewsComponent,
    GalleryComponent,
    HomeComponent,
    NewsPageComponent,
    TitlePageComponent,
    NewsMainComponent,
    NewsListComponent,
    PopularStoriesComponent,
    DarkmodeComponent,
    TitleDetailedComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
