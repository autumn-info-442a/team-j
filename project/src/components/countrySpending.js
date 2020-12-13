import React, { Component } from 'react';
import '../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class countrySpending extends Component {
   componentDidMount() {
    let chart = am4core.create("spending", am4charts.XYChart);
    //chart.numberFormatter.numberFormat = "#.0a";
    chart.padding(50, 70, 50, 50);

    // Add data
    chart.data = [{
      "country": "Gambia",
      "value": 0.6,
    },
    {
      "country": "Colombia",
      "value": 1.5,
    },
    {
      "country": "UK",
      "value": 5,
    },
    {
      "country": "Canada",
      "value": 8.4,
    },
    {
      "country": "Australia",
      "value": 11,
    },
    {
      "country": "USA",
      "value": 14,
    },
    {
      "country": "Japan",
      "value": 20,
    }];


    // Spcify bar color
    chart.colors.list = [
      am4core.color("#FBD5C5"), 
      am4core.color("#FF767C"),
      am4core.color("#FF9C00"),
      am4core.color("#F7E55D"),
      am4core.color("#3AAC99"),
      am4core.color("#96AFFC"),
      am4core.color("#52C8FA"),
    ]; 

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.max = 100;


    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = "value";
    series.dataFields.categoryY = "country";
    series.columns.template.tooltipText = "Spending as % of GDP in {country}: {value}%"
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#333333");
    series.tooltip.background.filters.clear();
    series.tooltip.background.stroke = am4core.color("#333333");
    series.columns.template.adapter.add("fill", function(fill, target){
      chart.strokeOpacity = 0;
      return chart.colors.getIndex(target.dataItem.index);
    });
    series.strokeWidth = 0;

    //let valueLabel = series.bullets.push(new am4charts.LabelBullet());
    //valueLabel.locationX = 0.5;
    //valueLabel.label.text = "{value}%";
    //valueLabel.label.fontSize = 15;
    //valueLabel.label.fontWeight = "800"
    //valueLabel.label.fill = am4core.color("#fff");

    let subtitle = chart.titles.create();
    let title = chart.titles.create();
    title.text = "Spending on COVID-19 relief across countries";
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
      <div id="spending" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default countrySpending;