import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  // @ViewChild("chart") chart: ChartComponent | undefined;
  // @ViewChild('chart') chart: ChartComponent = {} as ChartComponent

  constructor() { }


  ngOnInit(): void {
  }

}
