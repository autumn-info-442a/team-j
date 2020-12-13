import React, { Component } from 'react';
import '../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import 'bootstrap/dist/css/bootstrap.min.css';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

class Condition extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        selection: "Hypertension",
        data: [{
          "status": "Normally recovered",
          "value": 54
        }, {
          "status": "Did not normally recover",
          "value": 46
        }]
      }
    }
  
    componentDidUpdate() {
      this.componentWillUnmount();
      this.componentDidMount();
    }
  
    componentDidMount() {
        var chart = am4core.create("condition", am4charts.PieChart);

        chart.data = this.state.data;

        // Chart padding
        chart.padding(50, 70, 50, 50);
        

        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "status";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;

        // Specify bar color
        pieSeries.colors.list = [
          am4core.color("#63AD48"),
          am4core.color("#FF9C00")
        ]; 
        // Tooltip styling
        pieSeries.tooltip.getFillFromObject = false;
        pieSeries.tooltip.background.fill = am4core.color("#333333");
        pieSeries.tooltip.background.filters.clear();
        pieSeries.tooltip.background.stroke = am4core.color("#333333");

        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        // Title 
        let subtitle = chart.titles.create();
        let title = chart.titles.create();
        title.text = "Lasting effects based on pre-exisiting health conditions";
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

    setHypertension() {
      this.setState({
        selection: "Hypertension",
        data: [{
          "status": "Normally recovered",
          "value": 54
        }, {
          "status": "Did not normally recover",
          "value": 46
        }]
      });
      this.componentDidUpdate();
    }
  
    setObesity() {
      this.setState({
        selection: "Obesity",
        data: [{
          "status": "Normally recovered",
          "value": 58
        }, {
          "status": "Did not normally recover",
          "value": 42
        }]
      });
      this.componentDidUpdate();
    }
  
    setPsychiatric() {
      this.setState({
        selection: "Psychiatric Condition",
        data: [{
          "status": "Normally recovered",
          "value": 48
        }, {
          "status": "Did not normally recover",
          "value": 52
        }]
      });
      this.componentDidUpdate();
    }
  
    setImmuno() {
      this.setState({
        selection: "Immunosuppressive Condition",
        data: [{
          "status": "Normally recovered",
          "value": 42
        }, {
          "status": "Did not normally recover",
          "value": 58
        }]
      });
      this.componentDidUpdate();
    }
  
    render() {
      return (
        <div className="condition">
          <DropdownButton id="dropdown-item-button" title={this.state.selection}>
            <Dropdown.Item as="button" onClick={() => this.setHypertension()}>Hypertension</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => this.setObesity()}>Obesity</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => this.setPsychiatric()}>Psychiatric Condition</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => this.setImmuno()}>Immunosuppressive Condition</Dropdown.Item>
          </DropdownButton>
          <div id="condition" style={{ width: "100%", height: "500px" }}></div>
        </div>
      );
    }
  }
  
  export default Condition;