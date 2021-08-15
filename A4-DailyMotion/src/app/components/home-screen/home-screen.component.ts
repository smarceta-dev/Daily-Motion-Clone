import { Component, OnInit } from '@angular/core';
import { DailyMotionService } from 'src/app/daily-motion.service';
import Video from 'src/app/models/Video';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent implements OnInit {
  //Stores videos fetched from API based on user search query
  videosFromApi: Video[] = [];

  //Initial search query the user made
  searchQuery: string = '';

  //Modified search query to fit api search convention
  modifiedSearchParam: string = '';

  //Used as a conditional to ensure there is playlist data fetched before displaying
  displayVideoList: boolean = false;

  //Using the DailyMotionService to fetch videos using the dailymotion api
  constructor(private data: DailyMotionService) {}

  ngOnInit(): void {}

  searchButtonPressed = (userInp: string) => {
    console.log(userInp);

    //Modifying the user query to add "+" signs rather than spaces to fit search convention
    this.modifiedSearchParam = userInp.replace(/\s/g, '+');

    /*
     * Fetching data from the dailymotion api based on the modified user supplied
     * query and storing it into the videosFromApi container
     */
    this.data
      .getVideoFromApi(this.modifiedSearchParam)
      .subscribe((dataFromApi: any) => {
        this.videosFromApi = dataFromApi['list'];
      });

    //Displays the video list once the search button is pressed
    this.displayVideoList = true;
  };
}
