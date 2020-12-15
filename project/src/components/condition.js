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
        text: "46% of patients did not return to usual state of health after 14-21 days tested positive for COVID-19",
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
        subtitle.text = this.state.data[1].value + "% of patients did not return to a usual state of health 14-21 \n days after testing positive for COVID-19";
        subtitle.align = "center";
        subtitle.fill = am4core.color("#FF9C00");
        
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
        text: "48% of patients did not return to usual state of health after 14-21 days tested positive for COVID-19",
        data: [{
          "status": "Normally recovered",
          "value": 52
        }, {
          "status": "Did not normally recover",
          "value": 48
        }]
      });
      document.getElementById("hypertension").classList.add("active");
      document.getElementById("obesity").classList.remove("active");
      document.getElementById("immuno").classList.remove("active");
      document.getElementById("psychiatric").classList.remove("active");
      this.componentDidUpdate();
    }
  
    setObesity() {
      this.setState({
        selection: "Obesity",
        text: "45% of patients did not return to usual state of health after 14-21 days tested positive for COVID-19",
        data: [{
          "status": "Normally recovered",
          "value": 45
        }, {
          "status": "Did not normally recover",
          "value": 55
        }]
      });
      document.getElementById("obesity").classList.add("active");
      document.getElementById("psychiatric").classList.remove("active");
      document.getElementById("immuno").classList.remove("active");
      document.getElementById("hypertension").classList.remove("active");
      this.componentDidUpdate();
    }
  
    setPsychiatric() {
      this.setState({
        selection: "Psychiatric Condition",
        text: "47% of patients did not return to usual state of health after 14-21 days tested positive for COVID-19",
        data: [{
          "status": "Normally recovered",
          "value": 47
        }, {
          "status": "Did not normally recover",
          "value": 53
        }]
      });
      document.getElementById("psychiatric").classList.add("active");
      document.getElementById("obesity").classList.remove("active");
      document.getElementById("immuno").classList.remove("active");
      document.getElementById("hypertension").classList.remove("active");
      this.componentDidUpdate();
    }
  
    setImmuno() {
      this.setState({
        selection: "Immunosuppressive Condition",
        text: "42% of patients did not return to usual state of health after 14-21 days tested positive for COVID-19",
        data: [{
          "status": "Normally recovered",
          "value": 40
        }, {
          "status": "Did not normally recover",
          "value": 60
        }]
      });
      document.getElementById("immuno").classList.add("active");
      document.getElementById("obesity").classList.remove("active");
      document.getElementById("psychiatric").classList.remove("active");
      document.getElementById("hypertension").classList.remove("active");
      this.componentDidUpdate();
    }
  
    render() {
      return (
        <div className="condition">
          <h2 className="title">Lasting Effects based on Pre-Existing Health Conditions</h2>
          <DropdownButton id="dropdown-item-button" title={this.state.selection} className="selection">
            <Dropdown.Item id="hypertension" className="active" as="button" onClick={() => this.setHypertension()}>Hypertension</Dropdown.Item>
            <Dropdown.Item id="obesity" as="button" onClick={() => this.setObesity()}>Obesity</Dropdown.Item>
            <Dropdown.Item id="psychiatric" as="button" onClick={() => this.setPsychiatric()}>Psychiatric Condition</Dropdown.Item>
            <Dropdown.Item id="immuno" as="button" onClick={() => this.setImmuno()}>Immunosuppressive Condition</Dropdown.Item>
          </DropdownButton>
          <div id="condition" style={{ width: "100%", height: "500px" }}></div>
          <h3 className="condName">{this.state.selection}</h3>
        </div>
      );
    }
  }
  
  export default Condition;