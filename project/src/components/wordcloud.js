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
    series.labels.template.fill = am4core.color("#9F6BA0");

    let subtitle = chart.titles.create();
    subtitle.text = "hover over to see details";
    let title = chart.titles.create();
    title.text = "Job Loss word cloud";
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