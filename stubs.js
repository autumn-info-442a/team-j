//  Job Loss Word Cloud 
/* input data example */
var unemployment = [{"industryName": "Manufacturing", "jobLoss": 688835}, {"industryName": "Construction", "jobLoss": 12352}]; 

/* 
Pre condition: accepts an array of objects. There are 2 elements in each object, which are a string (industryName) and an int (jobLoss). 
The array does not need to be sorted.
Post condition: returns a component with an appended word cloud to the client. 
The resulting word cloud should be clickable/hoverable to view the exact number of jobs loss. 
Larger sized words represent a higher number of layoffs and smaller sized words conversely represent a lower number of layoffs. 
*/ 
function wordCloud(array[] unemployment) {
    /* TODO read the input array data structure, rank the objects inside the array based on the “jobLoss” value, 
    render a word cloud data visualization based on the ranking created */
    return jobLossWordCloud;
}


// Infection Timeline Slider 
/* 
Pre condition: accepts an array of objects. There are two elements in each object: time(int) and condition(string).
Post condition: a component with a slider is returned back to the client. 
The resulting slider should display corresponding information with a dynamic label based on the user's input. 
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
Post condition: a component with a slider is returned back to the client. 
The resulting slider should display corresponding information with a dynamic label based on the user's input. 
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


// Bar graph of spending on covid relief across different countries
/*
Pre condition: accepts an array of objects.
Two key-value pairs in each object: countryName (string) and spendingAsGDP (int)
Post condition: a component with an appended horizontal bar chart is returned back to the client. The resulting bar chart should have its bars be clickable/hoverable for the exact percentage of spending.
*/
function spendingChart (array[] dataset) {
    /* Todo: create axes and overall chart format, including axes labels and a title
    reads in the input data and creates the bars to append to the chart */
    return horizontalBarChart
}
 
// US Covid-Relief Spending Bar Chart
/* 
Pre condition: accepts an array of objects that has the key value of type of spending (string) and a paired value of the actual amount of spending (double)
Post condition: a component with an appended stacked bar chart is returned back to the client. 
The resulting bar chart should have its bars be clickable/hoverable for the detailed information of the spending. 
*/
function renderSpendingChart(array[] usCovidRelief) {
  /* takes the input and renders different bar heights based on the input; the greater the double value, the longer the bar */
    return usReliefChart;
}

// Mortality Rates Bar Chart
/*  
Pre condition: accepts an array of objects formatted as such: {range: ___, percentage: ___}
The range should be a string containing the range of ages for that percentage, and the percentage should be a float of the actual percentage. 
This set of data is only for one category at a time, when changing categories the function must be called again with a new set of data. 
The array should be sorted by its range values, starting with the youngest age range and progressing up to the highest. 
This must be stored on the client beforehand in this sorted manner, most likely as an import from a hosted data file on our repository. 

Post condition: a component with an appended horizontal bar chart is returned back to the client. 
The resulting bar chart should have its bars be clickable/hoverable for the exact percentage for that demographic. 
*/

function displayMortalityRateGraph(Object[] rates) {
	// create axes and overall chart format, including axes labels and a title
	// using a framework, read in the rates array and create the bars to append to the chart
	// ensure that the bars can be hovered or clicked for specific information
	return horizontalBarChart;
}

// Existing Health Conditions Waffle Chart
/* 
Pre condition: the object array info is an array of objects formatted as such: {condition: ___, percentage: ___, total: ___, sample: ___}
The condition is a string for the name of the condition, and the percentage is a float for the percentage of individuals who did NOT return to standard health. 
The total is an int which is the number of people sampled total, and the sample is an int which is the number of people who did not return to standard health. 
The condition string is the condition that the function is meant to create a chart for (for example: “Obesity”).
For this function, only one dataset is used and changing the category requires calling the function again with a different condition string.
The info array is unsorted. This array of information must be stored on the client already before being accessed by the function, most likely as an import from our repository.

Post condition: a component with the appended waffle chart is returned back to the client. It’s two main sections should be hoverable/clickable to see the raw numbers (sample out of total) of how many people did not return to standard health. 
*/

function displayExistingConditionsChart(Object[] info, String condition) {
	/* create the foundation element for the waffle chart to be appended to, including a title
  use the data stored in info and the chosen condition to access the percentage and construct the waffle chart 
  and the text blurb ensure it has the hoverable/clickable functionality */
	return waffleChart;
}

