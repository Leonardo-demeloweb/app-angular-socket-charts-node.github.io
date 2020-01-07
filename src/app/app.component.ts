import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { SocketService } from "./socket.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "livechart";
  chart;

  constructor(private srv: SocketService) {}

  ngOnInit() {
    this.srv.listen("dataupdate").subscribe((res: any) => {
      console.log(res);
      this.chart.data.datasets[0].data = res;
      this.chart.update();
    });
    this.chart = new Chart("canvas", {
      type: "line",
      options: {
        responsive: true,
        title: {
          display: true,
          tesxt: "realtime charts"
        }
      },
      data: {
        labels: ["jan", "fev", "march", "april", "may", "june", "july", "aug"],
        datasets: [
          {
            type: "line",
            label: "data test",
            //data: [10, 3, 6, 4, 9, 1, 3, 0],
            backgroundColor: "#3F3FBF",
            fill: false
          }
        ]
      }
    });
  }
}
