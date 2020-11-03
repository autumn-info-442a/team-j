## Description of components: 

### Job Loss Word Cloud 

- The component is a view that takes job loss data (including industry names and associated number of jobs lost for that given industry) and generates a word cloud highlighting the industries with the greatest number of layoffs. 
- The component resides on the client side. 

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

### Bar graph of spending on covid relief across different countries
- This component is a view that accepts a dataset, and returns a horizontal bar graph visualized based on the input data. 
- The input data is an array of objects, which each object includes two sets of key-values. The first set has a key of “Country” with a value of string specifying a country name. The second set has a key of “Spending as % of GDP” with a value of number (decimals) indicating the spending as percentage of GDP.
- The view resides only on the client side.


### US Covid-Relief Spending Bar Chart
- This component is a view that accepts a data set and returns a single-bar bar graph based on the array that is passed in.
- The array contains objects that contain information about the division of spending for the US Covid-relief, with two elements making up one object. One element represents the type of spending (outlays, obligations, unobligated) and the other element represents the actual monetary value itself. The type of spending is a string value, while the currency value is a double. 
- The view only resides on the client side.

### Mortality Rates Bar Chart
- Uses a dropdown menu controller. This dropdown menu communicates with the function described below to render the selected chart. 
- The input is one of the options as selected by the user
- The output is a call to the function that should create the specified chart
- The view for this component is displayed based on the function below, selected via the dropdown menu controller as described above. 

### Existing Health Conditions Waffle Chart
- Uses a dropdown menu controller. It communicates with the function described below to render the selected waffle chart.
- The input is one of the options as selected by the user
- The output is a call to the function that should create the specified chart
- The view for this component is a waffle chart, displayed with the function below using the selected preexisting condition.


