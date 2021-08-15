import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MyPlaylistScreenComponent } from './components/my-playlist-screen/my-playlist-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ListingComponent } from './components/listing/listing.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MyPlaylistScreenComponent,
    HomeScreenComponent,
    ListingComponent,
    VideoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
