import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Test extends Component {
    componentDidMount() {
      let test = am4core.create("chartdiv", am4charts.XYChart);
      test.numberFormatter.numberFormat = "#.0a";

        // Add data
        test.data = [{
        "category": "COVID-19 Aid, Relief, and Economic Security Act (Cares Act)",
        "Outlays": 1180000000000,
        "Obligations": 1280000000000,
        "Unobligated": 802000000000
        }];

        // Spcify bar color
        test.colors.list = [
          am4core.color("#F7E55D"),
          am4core.color("#96AFFC"),
          am4core.color("#00DCDC")
        ];

        // Add legend
        test.legend = new am4charts.Legend();
        // test.legend.position = "right";
        test.legend.maxHeight = 300;

        // Create axes
        let categoryAxis = test.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.opacity = 0;
        categoryAxis.renderer.labels.template.disabled = true;

        let valueAxis = test.xAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.renderer.grid.template.opacity = 0;
        valueAxis.renderer.ticks.template.strokeOpacity = 0;
        valueAxis.renderer.ticks.template.stroke = am4core.color("#ffffff");
        valueAxis.renderer.ticks.template.length = 0;
        valueAxis.renderer.line.strokeOpacity = 0;
        valueAxis.renderer.baseGrid.disabled = true;
        valueAxis.renderer.minGridDistance = 40;
        valueAxis.renderer.labels.template.disabled = true;

        // Create series
        function createSeries(field, name, text, cornerTopLeft, cornerBottomLeft, cornerTopRight, cornerBottomRight) {
        let series = test.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "category";
        series.stacked = true;
        series.name = name;
        series.columns.template.tooltipText = text;
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("#333333");
        series.tooltip.background.filters.clear();
        series.tooltip.background.stroke = am4core.color("#333333");
        series.tooltip.pointerOrientation = "up";
        series.columns.template.column.cornerRadiusTopLeft = cornerTopLeft;
        series.columns.template.column.cornerRadiusBottomLeft = cornerBottomLeft;
        series.columns.template.column.cornerRadiusTopRight = cornerTopRight;
        series.columns.template.column.cornerRadiusBottomRight = cornerBottomRight;
        
        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.locationX = 0.5;
        labelBullet.label.text = "{valueX}";
        labelBullet.label.fontSize = 15;
        labelBullet.label.fontWeight = "800"
        labelBullet.label.fill = am4core.color("#fff");
        }

        createSeries("Outlays", "Outlays", "Outlays: \nThe amount an agency paid toward an obligation. Outlays are also counted as obligations.", 30, 30, 0, 0);
        createSeries("Obligations", "Obligations", "Obligations: \nThe amount an agency promised to pay for a particular purchase. Obligations include outlays.", 0, 0, 0, 0);
        createSeries("Unobligated", "Unobligated", "Unobligated: \nThe amount funded to an agency but not yet obligated.", 0, 0, 30, 30);
  
        let subtitle = test.titles.create();
        subtitle.text = "COVID-19 Aid, Relief, and Economic Security Act (Cares Act)";
        subtitle.align = "left";
        let title = test.titles.create();
        title.text = "Spending on COVID-19 relief budget breakdown in the USA";
        title.align = "left";
        title.fontSize = 20;
        title.fontWeight = "800";
        title.marginBottom = 10;
        this.test = test;
      
    }
  
    componentWillUnmount() {
      if (this.test) {
        this.test.dispose();
      }
    }
  
    render() {
      return (
        <div id="chartdiv"></div>
      );
    }
  }



export default Test;