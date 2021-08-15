import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DailyMotionService {
  constructor(private http: HttpClient) {}

  //Returns a list of videos from the DailyMotion api based on the search query provided by the user
  getVideoFromApi = (userSearchParam: string): Observable<any> => {
    return this.http.get<any>(
      `https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=${userSearchParam}`
    );
  };
}
