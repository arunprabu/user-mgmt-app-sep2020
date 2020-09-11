import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../shared/services/common-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  accountName: string;

  constructor( private commonDataService: CommonDataService ) { }

  ngOnInit(): void {
    // work on unsubscribing later -- it is must
    this.commonDataService.latestAccountName.subscribe( (data: any) => {
      console.log(data);
      this.accountName = data;
    });
  }

  updateAccountBtnHandler(){
    console.log(this.accountName);
    this.commonDataService.updateAccountName(this.accountName);
  }
}
