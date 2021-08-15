import { Injectable } from '@angular/core';
import Video from './models/Video';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private playlist: Video[] = [];

  /*
   * Observable used to keep track of the videos in a users
   * playlist and pass any changes to components requiring this service
   */
  playlistObservable = new BehaviorSubject<Video[]>([]);

  constructor() {}

  /*
   * Adds a video to the playlist and streams the playlist
   * update to any components using this service for playlist data
   */
  addVideo = (video: Video) => {
    //Adding a single video into the current playlist
    this.playlist.push(video);

    //Updating the playlist observable so that it can stream the playlist data to other components
    this.playlistObservable.next(this.playlist);
  };

  //Returns all the videos in the current playlist
  getVideos = () => {
    return this.playlist;
  };

  //Clears videos from the users playlist
  clearPlaylist = () => {
    //Clearing the current playlist stored in the UserDataService
    this.playlist = [];
    //Updating the playlist observable so that it can stream the playlist data to other components
    this.playlistObservable.next(this.playlist);
  };
}
