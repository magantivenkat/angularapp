import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json";

  private TIME_REST_API_SERVER = "http://api.timezonedb.com/v2.1/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone";


  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendGetTimeRequest(zone: any){
    return this.httpClient.get(this.TIME_REST_API_SERVER + "&zone=" + zone);
  }

}
