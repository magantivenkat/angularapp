import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'testapp';
  timezones: any = null;
  selectedTimeZone = null;
  times: any = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.timezones = data["zones"];
    })  
  };

  changeTimeZone(event: any){
    this.selectedTimeZone = event.target.value;
    console.log(this.selectedTimeZone);

    this.dataService.sendGetTimeRequest(this.selectedTimeZone).subscribe((data: any)=>{
      console.log(data);
      this.times = data["formatted"];
    })
  }

}

