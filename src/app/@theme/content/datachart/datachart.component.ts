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
import { ContentComponent } from '../content.component';
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
  selector: 'app-datachart',
  templateUrl: './datachart.component.html',
  styleUrls: ['./datachart.component.scss']
})
export class DatachartComponent implements OnInit {

  sparklinedata:any;

  @ViewChild("chart") chart: ChartComponent | undefined
  public chartOptions: Partial<ChartOptions>;


  constructor(private contentdata:ContentComponent) {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: this.sparklinedata,
        }
      ],
      chart: {
        height: 250,
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
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };

  }

  ngOnInit(): void {
    this.sparklinedata=this.contentdata.userdata[0].sparkline;
    console.log(this.sparklinedata);

  }

}
