import React, { Component } from 'react';
import '../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class countrySpending extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    var chart = am4core.create("spending", am4charts.XYChart);

    // Add data
    chart.data = [{
      "country": "Gambia",
      "value": 0.6
    },
    {
      "country": "Colombia",
      "value": 1.5
    },
    {
      "country": "UK",
      "value": 5
    },
    {
      "country": "Canada",
      "value": 8.4
    },
    {
      "country": "Australia",
      "value": 11
    },
    {
      "country": "USA",
      "value": 14
    },
    {
      "country": "Japan",
      "value": 20
    }];

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = "value";
    series.dataFields.categoryY = "country";
    series.columns.template.tooltipText = "Spending as % of GDP in {country}: {value}%"

    let valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{value}%";
    valueLabel.label.horizontalCenter = "left";
    valueLabel.label.dx = 10;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="spending" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default countrySpending;