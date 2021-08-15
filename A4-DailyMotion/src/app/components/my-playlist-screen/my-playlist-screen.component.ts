import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';
import { UserDataService } from 'src/app/user-data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-my-playlist-screen',
  templateUrl: './my-playlist-screen.component.html',
  styleUrls: ['./my-playlist-screen.component.css'],
})
export class MyPlaylistScreenComponent implements OnInit {
  //Keeps track of the list of videos in the playlist
  playlist: Video[] = [];

  //Keeps track of if playlist has been loaded to the page
  playlistLoaded: boolean = false;

  //New subscription used to monitor changes in the playlist
  vidSubscription = new Subscription();

  //Implementing the UserDataService service
  constructor(private userService: UserDataService) {}

  ngOnInit(): void {
    //Subscribing an observable to monitor playlist data from the userService
    this.vidSubscription = this.userService.playlistObservable.subscribe(
      (dataFromObservable) => {
        //Updating the current playlist data with any changes made in the userService playlist
        this.playlist = dataFromObservable;
      }
    );

    /*
     * Checking to see if there is one or more video in the playlist
     * loads prompt saying playlist is empty if there are no videos in the playlist
     */
    if (this.playlist.length > 0) {
      this.playlistLoaded = true;
    }
  }

  //Clears the current playlist
  clearPlaylist = () => {
    this.userService.clearPlaylist();
  };

  //Unsubscribes from watching for playlist changes
  ngOnDestroy() {
    this.vidSubscription.unsubscribe;
  }
}
