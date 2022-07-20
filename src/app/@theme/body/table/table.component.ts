import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit,ViewChild } from '@angular/core';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent | undefined
  public chartOptions: Partial<ChartOptions>;


  coinData:any;
  constructor(private service:FetchdataService) {
    // data from api
    this.service.users().subscribe(param=>{
      this.coinData=param;
    });


    // chart
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35]
        }
      ],
      chart: {
        height: 100,
        width:100,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      // title: {
      //   text: "Product Trends by Month",
      //   align: "left"
      // },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [

          "May",
          "Jun",
          "Jul"
        ]
      }
    };
   }


  ngOnInit(): void {

  }

}
