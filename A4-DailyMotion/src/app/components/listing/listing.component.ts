import { Component, Input, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  //Used to store video components to display for viewing
  @Input() videoList: Video[] = [];

  //Optional parameter to hide or display the Add to Playlist button (false to display)
  @Input() hideAddtoPlaylistBTN: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
