import React, { Component } from 'react';
// import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";

am4core.useTheme(am4themes_animated);

class Chart extends Component {
  componentDidMount() {
    let chart = am4core.create("wordCloud", am4plugins_wordCloud.WordCloud);
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    chart.padding(50, 70, 50, 50);
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;
    series.excludeWords = ["the", "an", "to"];
    series.data = [ {
        "job": "Agriculture, Forestry, Fishing, and Hunting",
        "count": "865"
      }, {
        "job": "Mining, Quarrying, and Oil and Gas Extractions",
        "count": "118045"
      }, {
        "job": "Utilities",
        "count": "7906"
      }, {
        "job": "Construction",
        "count": "371355"
      }, {
        "job": "Manufacturing",
        "count": "688873"
      },  {
        "job": "Wholesale Trade",
        "count": "321820"
      },  {
        "job": "Retail Trade",
        "count": "559241"
      },  {
        "job": "Transportation and Warehousing",
        "count": "355473"
      },  {
        "job": "Information",
        "count": "278876"
      },  {
        "job": "Finance and Insurance",
        "count": "30531"
      },  {
        "job": "Real Estate and Rental and Leasing",
        "count": "113971"
      },  {
        "job": "Professional, Scientific, and Technical Services",
        "count": "335271"
      },  {
        "job": "Management of Companies and Enterprises",
        "count": "124490"
      },  {
        "job": "Administrative and Support and Waste Management and Remediation Services",
        "count": "604653"
      },  {
        "job": "Educational Services",
        "count": "1006041"
      },  {
        "job": "Health Care and Social Assistance",
        "count": "1042505"
      },  {
        "job": "Arts, Entertainment, and Recreation",
        "count": "810743"
      },  {
        "job": "Accomodation and Food Services",
        "count": "2885761"
      },  {
        "job": "Other Services",
        "count": "548929"
      },  {
        "job": "Public Administration",
        "count": "266840"
      }];

    series.dataFields.word = "job";
    series.dataFields.value = "count";

    series.heatRules.push({
        "target": series.labels.template,
        "property": "fill",
        "min": am4core.color("#3AAC99"),
        "max": am4core.color("#3AAC99"),
        "dataField": "value"
       });
    
    // series.labels.template.url = "https://stackoverflow.com/questions/tagged/{word}";
    series.labels.template.urlTarget = "_blank";
    series.labels.template.tooltipText = "Total {word} Jobs Lost in USA due to COVID-19:\n[bold]{value}[/]";
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#333333");
    series.tooltip.background.filters.clear();
    series.tooltip.background.stroke = am4core.color("#333333");
    series.labels.template.fill = am4core.color("#9F6BA0");

    // Title 
    let subtitle = chart.titles.create();
    let title = chart.titles.create();
    title.text = "Types and Numbers of Jobs Lost";
    title.align = "left";
    title.fontSize = 20;
    title.fontWeight = "800";    
    
    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="wordCloud" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default Chart;