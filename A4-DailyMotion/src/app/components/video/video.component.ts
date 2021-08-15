import { Component, Input, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  //Takes in a single video object from the parent listing component
  @Input() videoInfo: Video = {} as Video;

  //Optional input property to hide the "Add to Playlist" button on the video component
  @Input() hideAddtoPlaylistBTN: boolean = true;

  //Property to keep track of if the selected video is in the current playlist
  isInPlaylist: boolean = false;

  //Implementing the UserDataService
  constructor(private userService: UserDataService) {}

  ngOnInit(): void {
    //Subscribing to an observable that watches the playlist to check its size in order to see if its empty
    this.userService.playlistObservable.subscribe((updatedPlaylist) => {
      //Setting the isInPlaylist property to false if there are no videos in the playlist
      if (updatedPlaylist.length === 0) {
        this.isInPlaylist = false;
      }
    });
  }

  addToPlaylist = () => {
    //Using the UserDataService to add individual videos to the UserDataService playlist storage
    this.userService.addVideo(this.videoInfo);

    //Updating the isInPlaylist property to true once a video is added to the playlist
    this.isInPlaylist = true;
  };
}
