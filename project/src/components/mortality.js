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

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;

    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = "value";
    series.dataFields.categoryY = "category";
    series.columns.template.tooltipText = "Percentage of Deaths: {value}%";

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
    this.componentDidUpdate();
  }

  render() {
    return (
      <div>
        <h2>Mortality Rate by {this.state.selection}</h2>
        <DropdownButton id="dropdown-item-button" className="selection" title={this.state.selection}>
          <Dropdown.Item as="button" onClick={() => this.setAge()}>Age Group</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => this.setSex()}>Sex</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => this.setEthnicity()}>Race/Ethnicity</Dropdown.Item>
        </DropdownButton>
        <div id="mortality" style={{height: "500px" }}></div>
      </div>
    );
  }
}

export default Mortality;