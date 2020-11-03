## Stubs: 

### Job Loss Word Cloud 

- The component is a view that takes job loss data (including industry names and associated number of jobs lost for that given industry) and generates a word cloud highlighting the industries with the greatest number of layoffs. 
- The component resides on the client side. 
 
/* input data example */
var unemployment = [{"industryName": "Manufacturing", "jobLoss": 688835}, {"industryName": "Construction", "jobLoss": 12352}]; 
 
/* Pre condition: accepts an array of objects. There are 2 elements in each object, which are a string (industryName) and an int (jobLoss). The array does not need to be sorted.
Post condition: returns a component with an appended word cloud to the client. The resulting word cloud should be clickable/hoverable to view the exact number of jobs loss. Larger sized words represent a higher number of layoffs and smaller sized words conversely represent a lower number of layoffs. 
*/ 
 
function wordCloud(array[] unemployment) {
/* TODO read the input array data structure, rank the objects inside the array based on the “jobLoss” value, render a word cloud data visualization based on the ranking created */
       return jobLossWordCloud;
}

### Infection Timeline Slider 
**Mild Covid Infection Timeline Slider**
- The component is a view that takes an array of objects to render a slider that gives a label description associated with the location of the slider point on the slider line.
- The slider view communicates with the mildInfectionSlider.
- The mildInfectionSlider can elicit a content change inside the dynamic label above the slider when users are currently dragging the slider.
- The component only resides on the client side.

**Severe Covid Infection Timeline Slider**
- The component is a view that takes an array of objects to render a slider that gives a label description associated with the location of the slider point on the slider line
- The slider communicates with the severeInfectionSlider.
- The severeInfectionSlider can elicit a content change inside the dynamic label above the slider when users are currently dragging the slider.
- The component only resides on the client side.

**Mild Infection Controller**
- The controller communicates with the mild infection timeline slider. It traces the user’s interaction with the slider. 
- The input is the amount of units that the user drags away from the origin point, which represents the amount of time that has elapsed since a mild infection of Covid-19 has occurred. 
- The output is an associated description of the symptoms that an infected person would experience during the time period that correlates to the slider’s distance from the origin.
- The Mild Infection Controller can update the Mild Infection View based on its generated input value.

**Severe Infection Controller**
- The controller communicates with the severe infection timeline slider. It traces the user’s interaction with the slider. 
- The input is the amount of units that the user drags away from the origin point, which represents the amount of time that has elapsed since a severe infection of Covid-19 has occurred. 
- The output is an associated description of the symptoms that an infected person would experience during the time period that correlates to the slider’s distance from the origin.
- The Severe Infection Controller can update the Severe Infection View based on its generated input value.

/* 
Pre condition: accepts an array of objects. There are two elements in each object: time(int) and condition(string).
Post condition: a component with a slider is returned back to the client. // The resulting slider should display corresponding information with a dynamic label based on the user's input. 
*/
  function mildInfectionSlider(array mildData){
       slider.each(function(){
           // Todo: initialize the slider
       });
       value.each(function(){
           // Todo: assign values based on the data(array) to the slider, create the mildConditionController, handle the change of view
      });
       range.on('input', function(){
           // Todo: set the range and scale of the slider
      });
	// Todo: read in the array and create a slider 
	// ensure the dynamic label on the slider displays based on the input
	return conditionSlider;
  };

/* 
Pre condition: an array of objects. Two elements in an object: time(int) and condition(string)
Post condition: a component with a slider is returned back to the client. The resulting slider should display corresponding information with a dynamic label based on the user's input. 
*/
  function severeInfectionSlider(array severeData){
       slider.each(function(){
           // TODO: initialize the slider
       });
       value.each(function(){
           // Todo: assign values based on the data(array) to the slider, create the severeConditionController, handle the change of view
      });
       range.on('input', function(){
           // Todo: set the range and scale of the slider
      });
	// Todo: read in the array and create a slider 
	// ensure the dynamic label on the slider displays based on the input
	return conditionSlider;
  };

**Bar graph of spending on covid relief across different countries:**
- This component is a view that accepts a dataset, and returns a horizontal bar graph visualized based on the input data. 
- The input data is an array of objects, which each object includes two sets of key-values. The first set has a key of “Country” with a value of string specifying a country name. The second set has a key of “Spending as % of GDP” with a value of number (decimals) indicating the spending as percentage of GDP.
- The view resides only on the client side.
 
/*
Pre condition: accepts an array of objects.
Two key-value pairs in each object: countryName (string) and spendingAsGDP (int)
Post condition: a component with an appended horizontal bar chart is returned back to the client. The resulting bar chart should have its bars be clickable/hoverable for the exact percentage of spending.
*/
function spendingChart (array dataset) {
 /* Todo: create axes and overall chart format, including axes labels and a title
	   reads in the input data and creates the bars to append to the chart */
return horizontalBarChart
}

**US Covid-Relief Spending Bar Chart:**
- This component is a view that accepts a data set and returns a single-bar bar graph based on the array that is passed in.
- The array contains objects that contain information about the division of spending for the US Covid-relief, with two elements making up one object. One element represents the type of spending (outlays, obligations, unobligated) and the other element represents the actual monetary value itself. The type of spending is a string value, while the currency value is a double. 
- The view only resides on the client side.

/* 
Pre condition: accepts an array of objects that has the key value of type of spending (string) and a paired value of the actual amount of spending (double)
Post condition: a component with an appended stacked bar chart is returned back to the client. The resulting bar chart should have its bars be clickable/hoverable for the detailed information of the spending. 
*/

function renderSpendingChart(array[ ] usCovidRelief) {
/* takes the input and renders different bar heights based on the input; the greater the double value, the longer the bar */
	return usReliefChart;
}

**Mortality Rates Bar Chart**
- Uses a dropdown menu controller. This dropdown menu communicates with the function described below to render the selected chart. 
- The input is one of the options as selected by the user
- The output is a call to the function that should create the specified chart
- The view for this component is displayed based on the function below, selected via the dropdown menu controller as described above. 


/*  
Pre condition: accepts an array of objects formatted as such: {range: ___, percentage: ___}

The range should be a string containing the range of ages for that percentage, and the percentage should be a float of the actual percentage. This set of data is only for one category at a time, when changing categories the function must be called again with a new set of data. The array should be sorted by its range values, starting with the youngest age range and progressing up to the highest. This must be stored on the client beforehand in this sorted manner, most likely as an import from a hosted data file on our repository. 

Post condition: a component with an appended horizontal bar chart is returned back to the client. The resulting bar chart should have its bars be clickable/hoverable for the exact percentage for that demographic. 
*/

function displayMortalityRateGraph(Object[ ] rates) {
	// create axes and overall chart format, including axes labels and a title
	// using a framework, read in the rates array and create the bars to append to the chart
	// ensure that the bars can be hovered or clicked for specific information
	return horizontalBarChart;
}

**Existing Health Conditions Waffle Chart**
- Uses a dropdown menu controller. It communicates with the function described below to render the selected waffle chart.
- The input is one of the options as selected by the user
- The output is a call to the function that should create the specified chart
- The view for this component is a waffle chart, displayed with the function below using the selected preexisting condition.

/* 
Pre condition: the object array info is an array of objects formatted as such: {condition: ___, percentage: ___, total: ___, sample: ___}

The condition is a string for the name of the condition, and the percentage is a float for the percentage of individuals who did NOT return to standard health. The total is an int which is the number of people sampled total, and the sample is an int which is the number of people who did not return to standard health. The condition string is the condition that the function is meant to create a chart for (for example: “Obesity”).

For this function, only one dataset is used and changing the category requires calling the function again with a different condition string.

The info array is unsorted. This array of information must be stored on the client already before being accessed by the function, most likely as an import from our repository.

Post condition: a component with the appended waffle chart is returned back to the client. It’s two main sections should be hoverable/clickable to see the raw numbers (sample out of total) of how many people did not return to standard health. 
*/

function displayExistingConditionsChart(Object[] info, String condition) {
	/* create the foundation element for the waffle chart to be appended to, including a title
use the data stored in info and the chosen condition to access the percentage and construct the waffle chart and the text blurb ensure it has the hoverable/clickable functionality */
	return waffleChart;
}


