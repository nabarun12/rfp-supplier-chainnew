import { ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  @ViewChild('fundingRequest') fundingRequestDonut: ElementRef;
  @ViewChild('projectTracking') projectTrackingChart: ElementRef;
  @ViewChild('expenditure') expenditureChart: ElementRef;
  @ViewChild('riskIdentificationChart') riskIdentificationBarChart: ElementRef;
  @ViewChild('costBenefitAnalysisChart') costBenefitAnalysisChart: ElementRef;
  
  private isMaxMinClicked:any;
  private projectsReportDashboard:any;
  private riskIdentification:any;
  private fundingRequests:any;
  private projectTracking:any;
  private expenditure:any;
  private costBenefitAnalysis:any;
  private projectsReportSummary:any;


  constructor() { 
      this.isMaxMinClicked = false;
      this.projectsReportDashboard = 'col-md-7';
      this.riskIdentification = 'col-md-12';
      this.fundingRequests = 'col-md-4';
      this.projectTracking = 'col-md-4';
      this.expenditure = 'col-md-4';
      this.costBenefitAnalysis = 'col-md-12';
      this.projectsReportSummary = 'col-md-5';
  }

  /**
   * openDialog
   */
  public openDialog() {
      this.isMaxMinClicked = this.isMaxMinClicked ? false : true;
  }
  ngOnInit() {

      
    Chart.defaults.global.defaultFontFamily = "GE Inspira";
    //==============   this is for funding request donut chart   ========================
    let donutCtx = this.fundingRequestDonut.nativeElement.getContext('2d');

        var fundingRequestData = {
            labels: [
                "Approved",
                "Pending",
                "Reject"
            ],
            datasets: [
                {
                    "data": [9,12,3],   // Example data
                    "backgroundColor": [
                        "#84b761",
                        "orange",
                        "#cc4748"
                    ]
                }]
        };

        var fundingRequestChart = new Chart(
            donutCtx,
            {
                "type": 'doughnut',
                "data": fundingRequestData,
                radius: 0.5,
                "options": {
                    "cutoutPercentage": 70,
                    "legend": {
                        "display": false
                     },
                     "tooltips": {
                        "enabled": true
                     },
                    "ticks": {
                        "autoSkip": false
                    },
                    "animation": {
                        "animateScale": true,
                        "animateRotate": false
                    }
                }
            }
        );

        /* Chart.pluginService.register({
            beforeDraw: function(chart) {
              var width = fundingRequestChart.chart.width,
                  height = fundingRequestChart.chart.height,
                  ctx = fundingRequestChart.chart.ctx;
          
              ctx.restore();
              var fontSize = (height / 180).toFixed(2);
              ctx.font = fontSize + "em GE Sans";
              ctx.textBaseline = "middle";
          
              var text = "24 Total",
                  textX = Math.round((width - ctx.measureText(text).width) / 2),
                  textY = height / 2;
          
              ctx.fillText(text, textX, textY);
              ctx.save();
            }
          }); */

     //-------------Project Tracking---------------------------------------
     let projectTrackingCtx = this.projectTrackingChart.nativeElement.getContext('2d');
     
             var projectTrackingData = {
                labels: [
                    "On Track",
                    "Reached Limit"
                ],
                 datasets: [
                     {
                         "data": [9,2],  
                         "backgroundColor": [
                             "#84b761",
                             "#ececec",
                             
                         ]
                     }]
             };
     
             var projectTrackingPieChart = new Chart(
                projectTrackingCtx,
                 {
                     "type": 'doughnut',
                     "data": projectTrackingData,
                     "options": {
                         "cutoutPercentage": 90,
                         "legend": {
                            "display": false
                         },
                         "tooltips": {
                            "enabled": true
                         },
                         "ticks": {
                            "autoSkip": false
                        },
                         "animation": {
                             "animateScale": true,
                             "animateRotate": false
                        }
                     }
                 }
             );   

             Chart.pluginService.register({
                beforeDraw: function(chart) {
                  var width = projectTrackingPieChart.chart.width,
                      height = projectTrackingPieChart.chart.height,
                      ctx = projectTrackingPieChart.chart.ctx;
              
                  ctx.restore();
                  var fontSize = (height / 180).toFixed(2);
                  ctx.font = fontSize + "em GE Sans";
                  ctx.textBaseline = "middle";
              
                  height = "10px";
                  var text = "92% on Target",
                      textX = Math.round((width - ctx.measureText(text).width) / 2),
                      textY = height / 2;
              
                  //ctx.fillText(text, textX, textY);
                  ctx.save();
                }
              });

     //=================this is Expenditure Pie Chart        ==========================

     let expenditureCtx = this.expenditureChart.nativeElement.getContext('2d');
     
             var expenditureData = {
                 labels: [
                     "Disruptive",
                     "Differentiate",
                     "Compete",
                     "On Hold",
                     "Protect"
                 ],
                 datasets: [
                     {
                         "data": [9,12,3,6,8],   // Example data
                         "backgroundColor": [
                                '#67b7dc',
                                '#fdd400',
                                '#84b761',
                                '#cc4748',
                                '#cd82ad'
                         ]
                     }]
             };
     
             var expenditurePieChart = new Chart(
                expenditureCtx,
                 {
                     "type": 'doughnut',
                     "data": expenditureData,
                     "options": {
                         "cutoutPercentage": 70,
                         "legend": {
                            "display": false
                         },
                         "tooltips": {
                            "enabled": true
                         },
                         "animation": {
                             "animateScale": true,
                             "animateRotate": false
                         }
                     }
                 }
             );   

    //==============   this is for Risk Identification Bar chart   ========================

    let riskIdentificationBarChart = this.riskIdentificationBarChart.nativeElement.getContext('2d');

    var targetDurationData = [72, 90, 60, 65, 120, 30, 50, 200,180];
    var remainingDaysData = [18, 30, 5, 15, 2, 7, 15,10,20]
    var projectNamesData = ["GAMS", "GAS", "Employee Administration System", "Forecasting Tool", "SAS Automation", "Master Data Information", "Energy Management", "PMS", "BI Analystics"]
    
    
    var riskIdentificationChart = new Chart(riskIdentificationBarChart, {
        type: 'horizontalBar',
        data: {
            labels: projectNamesData,
            datasets: [
            {
                label: 'Target',
                data: targetDurationData,
                            backgroundColor: "#fdd400",
                            hoverBackgroundColor: "#fdd400",
                            hoverBorderWidth: 2,
                            hoverBorderColor: 'lightgrey'
            },
            {
                label: 'Overdue',
                data: remainingDaysData,
                            backgroundColor: "#cc4748",
                            hoverBackgroundColor: "#cc4748",
                            hoverBorderWidth: 2,
                            hoverBorderColor: 'lightgrey'
            },
            ]
        },
        options: {
                 animation: {
                duration: 10,
            },
            
            scales: {
              xAxes: [{ 
                  stacked: true, 
                gridLines: { display: false },
                ticks: {
                    autoSkip: false
                    }
                }],
              yAxes: [{ 
                  stacked: true,
                  ticks: {
                    autoSkip: false
                  }               
                }],
            }, // scales
            legend: {display: true}
        } // options
       }
    );

    
    //==============   this is Project Type Bar chart   ========================

    let costBenefitAnalysisChart = this.costBenefitAnalysisChart.nativeElement.getContext('2d');
     var riskIdentificationChart = new Chart(
            costBenefitAnalysisChart,
            {
              type: 'bar',
              data: {
                  labels: ["Base Sustaining", "Capacity", "EHS/Compliance", "NPI/NTI", "Sourcing","Engineering", "Cost Out/Productivity", "Advance Manufacturing", "Software ERP", "ELTO"],
                  datasets: [{
                      label: '$ CAPEX',
                      data: [2,12,5,11,7,6,3,9,14,4],
                      backgroundColor: [
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761'
                      ],
                      borderColor: [
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761',
                          '#84b761'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                          scales: {
                                      yAxes: [{
                                              ticks: {
                                                  beginAtZero:true
                                              }
                                      }],
                                      xAxes: [{
                                          ticks:{
                                              autoSkip: false
                                          }
                                      }]
                                  }
                      }
          });


  }

  
}
