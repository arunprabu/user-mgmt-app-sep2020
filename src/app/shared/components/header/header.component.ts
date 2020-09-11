import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../services/common-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  accountName: string;

  constructor( private commonDataService: CommonDataService) { }

  ngOnInit(): void {
    this.commonDataService.latestAccountName.subscribe( (data: any) => {
      console.log(data);
      this.accountName = data;
    });
  }

}
