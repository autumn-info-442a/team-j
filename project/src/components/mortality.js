import React, { Component } from 'react';
import '../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import 'bootstrap/dist/css/bootstrap.min.css';

am4core.useTheme(am4themes_animated);

class Mortality extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: "Age Group",
      data: [{
        "category": "85+",
        "value": 32.4
      }, {
        "category": "75-84+",
        "value": 31.4
      }, {
        "category": "65-74",
        "value": 27.6
      }, {
        "category": "55-64",
        "value": 21.1
      }, {
        "category": "45-54",
        "value": 15.4
      }, {
        "category": "35-44",
        "value": 5.3
      }, {
        "category": "25-34",
        "value": 2.2
      }, {
        "category": "15-24",
        "value": 1.2
      }, {
        "category": "5-14",
        "value": 0.2
      }, {
        "category": "0-4",
        "value": 0.00018
      }]
    }
  }

  componentDidUpdate() {
    this.componentWillUnmount();
    this.componentDidMount();
  }

  componentDidMount() {
    var chart = am4core.create("mortality", am4charts.XYChart);

    chart.data = this.state.data;

    // Chart padding
    chart.padding(50, 70, 50, 50);
    
    // Specify bar color
    chart.colors.list = [
      am4core.color("#52C8FA"), 
    ]; 

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.title.text = this.state.selection;
    categoryAxis.title.fontWeight = "bold";

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.max = 100;
    valueAxis.min = 0;
    valueAxis.renderer.minGridDistance = 10;
    valueAxis.title.text = "Percentage of Deaths";
    valueAxis.title.fontWeight = "bold";

    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = "value";
    series.dataFields.categoryY = "category";
    series.columns.template.tooltipText = "Percentage of Deaths: {value}%";
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#333333");
    series.tooltip.background.filters.clear();
    series.tooltip.background.stroke = am4core.color("#333333");

    let valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{value}%";
    valueLabel.label.horizontalCenter = "left";
    valueLabel.label.dx = 10;
    valueLabel.label.minWidth = 1000;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  setAge() {
    this.setState({
      selection: "Age Group",
      data: [{
        "category": "85+",
        "value": 32.4
      }, {
        "category": "75-84+",
        "value": 31.4
      }, {
        "category": "65-74",
        "value": 27.6
      }, {
        "category": "55-64",
        "value": 21.1
      }, {
        "category": "45-54",
        "value": 15.4
      }, {
        "category": "35-44",
        "value": 5.3
      }, {
        "category": "25-34",
        "value": 2.2
      }, {
        "category": "15-24",
        "value": 1.2
      }, {
        "category": "5-14",
        "value": 0.2
      }, {
        "category": "0-4",
        "value": 0.00018
      }]
    });
    document.getElementById("age").classList.add("active");
    document.getElementById("race").classList.remove("active");
    document.getElementById("sex").classList.remove("active");
    this.componentDidUpdate();
  }

  setSex() {
    this.setState({
      selection: "Sex",
      data: [{
        "category": "Male",
        "value": 54.1
      }, {
        "category": "Female",
        "value": 45.9
      }]
    });
    document.getElementById("sex").classList.add("active");
    document.getElementById("age").classList.remove("active");
    document.getElementById("race").classList.remove("active");
    this.componentDidUpdate();
  }

  setEthnicity() {
    this.setState({
      selection: "Race/Ethnicity",
      data: [{
      "category": "Non-Hispanic White",
      "value": 55.6
    }, {
      "category": "Non-Hispanic Black or African American",
      "value": 18.7
    }, {
      "category": "Non-Hispanic American Indian or Alaska Native",
      "value": 1.1
    }, {
      "category": "Non-Hispanic Asian",
      "value": 3.8
    }, {
      "category": "Non-Hispanic Hawaiiian or Other Pacific Islander",
      "value": 0.2
    }, {
      "category": "Hispanic or Latino",
      "value": 19.8
    }, {
      "category": "Other",
      "value": 0.9
    }]
    });
    document.getElementById("race").classList.add("active");
    document.getElementById("age").classList.remove("active");
    document.getElementById("sex").classList.remove("active");
    this.componentDidUpdate();
  }

  render() {
    return (
      <div id="mortality_bar">
        <h2 className="title">Mortality Rate by Demographic (2)</h2>
          <DropdownButton id="dropdown-item-button" title={this.state.selection} className="selection">
            <Dropdown.Item id="age" className="active" as="button" onClick={() => this.setAge()}>Age Group</Dropdown.Item>
            <Dropdown.Item id="sex" as="button" onClick={() => this.setSex()}>Sex</Dropdown.Item>
            <Dropdown.Item id="race" as="button" onClick={() => this.setEthnicity()}>Race/Ethnicity</Dropdown.Item>
          </DropdownButton>
        <div id="mortality" style={{width: "100%", height: "600px" }}></div>
      </div>
    );
  }
}

export default Mortality;