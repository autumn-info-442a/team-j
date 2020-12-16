# Requirements

&nbsp;

## General Requirements:
- **COMPLETE** This product should be a website that is open to anyone with internet access.
- **COMPLETE** Users must be able to accomplish all the interactions on this website by accessing the website through a desktop or a laptop that has a mouse and/or touch screen.
- **COMPLETE** The overall website should have 2 pages: one for health insights and another for economic insights.
- **IMPOSSIBLE** ~~When the site is opened using a specific endpoint in the URL, the site should display the specified page. “/health” should lead to the Health Insights page, while “/economics” should lead to the Economic Insights page.~~
    * Can’t route to that page due to GitHub hosting properties (or at least this seems to be the issue). Hosting the site locally using npm scripts allows for this functionality, but deploying to GitHub causes it to fail. Our best guess is that hosting on GitHub requires for the site to be accessed from its root endpoint first. 
- **COMPLETE** When the site is opened using a specific endpoint in the URL, the site should display the specified page. “/health” should lead to the Health Insights page, while “/economics” should lead to the Economic Insights page.
- **COMPLETE** The Health Insight page with the URL endpoint of “/health”, should contain the Mortality Rate by Demographic bar graph, the Infection Timeline slider visualization, and the Lasting Effects by Pre-Existing Health Conditions waffle chart.
- **COMPLETE** The Economics Insight page with the URL endpoint of “/economics”, should contain the Spending on Covid Relief Across Different Countries bar graph, the Job Loss word cloud, and the US Budget Breakdown single bar chart.
- **COMPLETE** At the bottom of the Health Insights and Economic Insights pages, there should be a numbered reference list. The list refers to the different sources of data we used to create each chart. Each number should link directly to the page where we obtained the data from.
- **COMPLETE** Each chart should include the number corresponding to the data source used from the numbered reference list.  
- **COMPLETE** All colors used for the graphs must use colorblind safe themes.

&nbsp;

## 2. Navigation Bar:
- **COMPLETE** Users must be able to access the health insights page with a single click/touch on the ‘health insights’ button in the navigation bar.
- **COMPLETE** Users must be able to access the economic insights page with a single click/touch on the ‘economic insights’ button in the navigation bar.
- **COMPLETE** When the user is currently on the health insights page, the ‘health insights’ link in the navigation bar should be highlighted and should not respond to click or touch inputs.
- **COMPLETE** When the user is currently on the economic insights page, the ‘economic insights’ link in the navigation bar should be highlighted and should not respond to click or touch inputs.
- **COMPLETE** The logo should be a static image.
- **COMPLETE** The navigation bar should be positioned at the top of both pages (health insights and economic insights).

&nbsp;

## 3. Bar graph of spending on covid relief across different countries:
- **COMPLETE** The title should be at the top on its own line in bolded text.
- **COMPLETE** The y-axis should be 7 country names, including Japan, USA, Australia, Canada, UK, Columbia, Gambia, sorted in descending order based on the percentage of spending (x value).
- **COMPLETE** The x-axis should be the COVID-19 relief spending as a percentage of each country’s GDP, incremented by 10% from 0% to 100%.
- **COMPLETE** A tooltip corresponding to the bar must pop up nearby when the user hovers over each bar, and it should persist until the cursor is no longer over the bar.
- **COMPLETE** The tooltip must show the specific percentage of spending as a percentage of the country’s GDP with text.
- **COMPLETE** Each bar needs to be filled with a color specified as follows: Japan (Hex: #52C8FA), USA (Hex: #96AFFC), Australia (Hex: #3AAC99), Canada (Hex: #F7E55D), UK (Hex: #FF9C00), Columbia (Hex: #FF767C), Gambia (Hex: #FBD5C5).

&nbsp;

## 4. Job Loss Word Cloud
- **COMPLETE** The title should be at the top on its own line in a bolded text.
- **COMPLETE** Industry names should be in different sizes and the sizes should be correlated with the number of layoffs in that particular industry. Larger sized words should represent a higher number of layoffs and smaller sized words would conversely represent a lower number of layoffs. 
- **COMPLETE** The industry names are all in Hex color #3AAC9 when in a non-hovered state.
- **IMPOSSIBLE** ~~When users hover over, the word should be in Hex color #FF9C00.~~ 
    * Limitation of the amChart library, there is no way to change the color of a word in a word cloud when it is hovered. To our knowledge, there is no way to change the color of a hovered word without re-rendering the entire visualization every time a new word is hovered, which is both infeasible and detrimental to the usability of the visualization.
- **COMPLETE** Larger words should be centered in the middle of the word cloud visualization. 
- **COMPLETE** When users hover over an industry name, a dynamic tooltip label should appear above the hovered word and disappear when the user moves their mouse away from the industry name.

&nbsp;

## 5. Infection Timeline Slider
- **COMPLETE** The title should be at the top on its own line in a bolded text.
- **COMPLETE** There should be two sliders: one titled mild and one titled severe. Labels are horizontally aligned with the slider timeline themselves and exist to the left of the slider.
- **COMPLETE** The slider representing a mild case of Covid-19 infection is shorter than the severe slider, and should be exactly one third the length of the severe case of Covid-19 infection slider.
- **COMPLETE** The green areas of the slider timeline should be in Hex color code #63AD48 and applied to the beginning and the end of the slider. The “symptoms onset” points of the timeline slider should be in Hex color code #FF9C00. Hex color #FF0000 will be used to represent the most severe onset of symptoms for the severe timeline slider. 
- **COMPLETE** Underneath the point on the timeline that represents full recovery on the mild slider, there should be a static label of “2 weeks”. 
- **COMPLETE** Underneath the point on the timeline that represents full recovery on the severe slider, there should be a static label of “6 weeks”. 
- **COMPLETE** Underneath the symptom onset point on the severe infection slider, there should be a static label of “5-6 days”.
- **COMPLETE** There should be a total of 3 static labels on top of the mild infection timeline slider, representing the point in which an infected person is exposed, experiences an onset of symptoms and recovers. 
- **COMPLETE** There should be 1 static label above the furthest right point of the severe infection timeline slider that says ‘recovery’. 
- **COMPLETE** When users drag the slider across either mild or severe infection timeline instances, which should elicit a dynamic label above the slider that the user is currently dragging. 
- **COMPLETE** Simultaneous interactions with the two sliders is not supported; users cannot be dragged two sliders at the same time and the content displayed by the sliders should be independent of each other. 

&nbsp;

## 6. Mortality Rate by Demographics
- **COMPLETE** The title should be at the top on its own line in a bolded text.
- **COMPLETE** The specific number of deaths should be shown in a pop-up when any individual bar is hovered.
- **COMPLETE** The pop-up should fade out when the bar is no longer hovered.
- **COMPLETE** The X-axis of the graph should be the percentage of deaths, starting from 0% and going up to 100% by increments of 10%.
- **COMPLETE** The y-axis should be the age group in years, going from 0-4, 5-14, then incrementing in groups of 9 by default.
- **COMPLETE** The user should be able to change the y-axis with only 2 clicks or taps (one click/tap to open a menu, and another to select an option).
- **COMPLETE** When the user clicks or taps the menu, three options should be presented as a drop down menu, ordered as follows: Age Group, Sex, Race/Ethnicity.
- **REVISED** *When the menu is opened, the currently selected option should be bolded*
    * *Due to the nature of the bootstrap dropdown button, the text option becomes highlighted instead of bolded. We think this isn’t a very significant change to functionality and so are willing to use the library as it is instead of rewriting a dropdown component from scratch.*
    * **New Requirement: When the menu is opened, the currently selected option should be highlighted.**
- **COMPLETE** No data should be covered whenever the dropdown menu is opened.

&nbsp;

## 7. Lasting effects based on pre-existing health conditions
**Justification for switching from a waffle chart to a pie chart**:
After searching the amchart library for a waffle chart visualization type, we came to the conclusion that switching to a pie chart would work better than a waffle chart for a few reasons. First, there is no native support for a waffle chart in the library, meaning the only way to make one is effectively make a grid of rectangles and manually fill each piece with the desired color. Not only would this be extremely tedious and inefficient to code, it would also mean that our data would be unusable in its current state. The most important reason, however, is that the aforementioned implementation of the waffle chart does not support decimal percentages, instead having to round to the nearest whole percent. This does not accurately reflect the data in the way that we are trying to, and so we came to the conclusion that utilizing a pie chart would be the better alternative as it is natively supported by amcharts and is also capable of utilizing more precise, decimal percentages. As such, all mentions of a waffle chart from the original requirements have been changed to pie chart.


- **COMPLETE** The title should be at the top on its own line in a bolded text.
- **REVISED** The ~~waffle chart~~ **pie chart** should only have two colors per chart.
- **COMPLETE** There should be a sentence of text that details what the chart’s data represents above the waffle chart itself.
- **COMPLETE** The descriptive line to contextualize the waffle chart, “(percentage) of patients did not return to a usual state of health…”, should be the same color as that portion of the waffle chart.
- **COMPLETE** The user should be able to change the chart category within two clicks or taps via a dropdown menu.
- **COMPLETE** When the dropdown menu is opened, there should be 4 categories listed in order as follows: Hypertension, Obesity, Psychiatric condition, Immunosuppressive condition.
- **COMPLETE** When any option is selected, the drop down menu should close.
- **COMPLETE** When any option is selected, the displayed chart should transition into the selected one based on the dropdown menu input.
- **REVISED** *When the menu is opened, the currently selected option should be bolded*
    * *Due to the nature of the bootstrap dropdown button, the text option becomes highlighted instead of bolded. We think this isn’t a very significant change to functionality and so are willing to use the library as it is instead of rewriting a dropdown component from scratch.*
    * **New Requirement: When the menu is opened, the currently selected option should be highlighted.**
- **REVISED** The dropdown menu should be positioned in a way such that opening it does not obstruct any part of the ~~waffle chart~~ **pie chart** or other information on the page. 
- **REVISED** When users hover over a section of the ~~waffle chart~~ **pie chart**, users should be able to see how the percentage was calculated (the sample size and number of patients in the recover/did not recover category).
- **REVISED** When users move their mouse away from a hovered section of the ~~waffle chart~~ **pie chart**, the popup should fade out.

&nbsp;

## 8. Spending on COVID-19 relief budget breakdown in the USA
- **COMPLETE** The title should be at the top on its own line in a bolded text.
- **COMPLETE** There should be 2 bar horizontal bar graphs that are divided into sections that represent how much has been spent by the United States in response to Covid-19.
- **COMPLETE** When the user hovers over a section, a popup label should appear below in the hovered section. 
- **COMPLETE** When users move their mouse away from a hovered section of the horizontal bar chart, the popup should fade out.
- **COMPLETE** The bar graph’s statistics will not be dynamic; these numbers will not change because they are not connected to an API.
- **COMPLETE** For the upper bar “COVID-19 Aid, Relief, and Economic Security Act (Cares Act)”, the yellow area which “Outlays” points to should be in Hex color code #F7E55D; the blue area which “Obligations” points to should be in Hex color code #96AFFC; the cyan area which “Unobligated” points to should be in Hex color code #00DCDC.
- **COMPLETE** For the lower bar “Total Estimated Lending”, the yellow area which “Utilized Lending” points to should be in Hex color code #F7E55D, and the cyan area (the rest of the bar graph) should be in Hex color code #00DCDC.

