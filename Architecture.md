## Description of components: 
### Data Storage
- There are 6 separated files in json or csv(depending on what kind of format the associated data visualization needs to render) formats stored data that each data visualization needs separately.
- The precondition is that all data files are well-formatted manually depending on the data formats requested from the associated data visualization functions.
- The postcondition is that all data is automatically and correctly inputted to data visualization render functions when functions are called.
- The data files are on the client side but users cannot access them directly.

### Navigation
- The component is a router taking care of the navigation bar and the switch between two html pages.
- There will be two buttons on the navigation bar. The precondition is users’ onlicks on the two buttons. They only can click on either of the buttons at one time. When the site is opened with a standard URL (having no subdomain/endpoint), the site defaults to displaying the Health Insights page and the “Health Insights” button is onclick. There is no input for this component.
- The postcondition is navigation to the page associated with the chosen button.(“Health Insights” button associated with the health related data visualization page; “Economic Insights” button associated with the economic related data visualization page)
- The component would be on the client side.

### View
- The component is a holder that contains all of the visualizations to be displayed at any given time
- The precondition is that there are only three components, and that there are 3 completed visualization components sent to this controller. It also relies on the correct page (between health and economics) being selected in the navigation bar.
- The postcondition is displaying the three visualizations on the page without any overlap, and in a way such that the three visualizations are all fully readable at the same time. No one visualization will be obscured, instead all should be visible.
- This component lives on the client, and is part of the front end code.

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