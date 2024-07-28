import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart} from 'chart.js';
@Component({
  selector: 'app-appointments-charts',
  templateUrl: './appointments-charts.component.html',
  styleUrls: ['./appointments-charts.component.css']
})
export class AppointmentsChartsComponent implements AfterViewInit {
  @ViewChild('lineChart', { static: false }) lineChart!: ElementRef;
  chart: any;
  chartData:any
appointmentsPerMonth = [200, 200, 400, 400, 50, 606, 150, 300, 900, 100, 300, 500];

  ngAfterViewInit() {
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Appointments 2022',
        data: this.appointmentsPerMonth,
        borderColor: '#42A5F5',
        fill: false
      },
      {
        label: 'Appointments 2023',
        data: [288, 480, 400, 900, 869],
        borderColor: '#FFA726',
        fill: false
      }]
    };
   

    this.chart = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: this.chartData,
      options: {
        // chart options and configurations
      }
    });
  }

}
