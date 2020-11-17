## Requirements
### 1. General Requirements:
- This product should be a website that is open to anyone with internet access.
- Users must be able to accomplish all the interactions on this website by accessing the website through a desktop or a laptop that has a mouse and/or touch screen.
- The overall website should have 2 pages: one for health insights and another for economic insights.
- When the site is opened with a standard URL (having no subdomain/endpoint), the site defaults to displaying the Health Insights page.
- When the site is opened using a specific endpoint in the URL, the site should display the specified page. “/health” should lead to the Health Insights page, while “/economics” should lead to the Economic Insights page.
- The Health Insight page with the URL endpoint of “/health”, should contain the Mortality Rate by Demographic bar graph, the Infection Timeline slider visualization, and the Lasting Effects by Pre-Existing Health Conditions waffle chart.
- The Economics Insight page with the URL endpoint of “/economics”, should contain the Spending on Covid Relief Across Different Countries bar graph, the Job Loss word cloud, and the US Budget Breakdown single bar chart.
- At the bottom of the Health Insights and Economic Insights pages, there should be a numbered reference list. The list refers to the different sources of data we used to create each chart. Each number should link directly to the page where we obtained the data from.
- Each chart should include the number corresponding to the data source used from the numbered reference list.  
- All colors used for the graphs must use colorblind safe themes.

![Health](/img/health.png "Health")
![Economics](/img/economic.png "Economics")

### 2. Navigation Bar:
![Navigation Bar](/img/health_nav.png "Navigation Bar")
- Users must be able to access the health insights page with a single click/touch on the ‘health insights’ button in the navigation bar.
- Users must be able to access the economic insights page with a single click/touch on the ‘economic insights’ button in the navigation bar.
- When the user is currently on the health insights page, the ‘health insights’ link in the navigation bar should be highlighted and should not respond to click or touch inputs.
- When the user is currently on the economic insights page, the ‘economic insights’ link in the navigation bar should be highlighted and should not respond to click or touch inputs.
- The logo should be a static image.
- The navigation bar should be positioned at the top of both pages (health insights and economic insights).


### 3. Bar graph of spending on covid relief across different countries:
![Bar graph of spending on covid relief across different countries](/img/spending_countries.png "Bar graph of spending on covid relief across different countries")
- The title should be at the top on its own line in bolded text.
- The y-axis should be 7 country names, including Japan, USA, Australia, Canada, UK, Columbia, Gambia, sorted in descending order based on the percentage of spending (x value).
- The x-axis should be the COVID-19 relief spending as a percentage of each country’s GDP, incremented by 10% from 0% to 100%.
- A tooltip corresponding to the bar must pop up nearby when the user hovers over each bar, and it should persist until the cursor is no longer over the bar.
- The tooltip must show the specific percentage of spending as a percentage of the country’s GDP with text.
- Each bar needs to be filled with a color specified as follows: Japan (Hex: #52C8FA), USA (Hex: #96AFFC), Australia (Hex: #3AAC99), Canada (Hex: #F7E55D), UK (Hex: #FF9C00), Columbia (Hex: #FF767C), Gambia (Hex: #FBD5C5).



### 4. Job Loss Word Cloud
![Job Loss Word Cloud](/img/job_loss.png "Job Loss Word Cloud")
- The title should be at the top on its own line in a bolded text.
- Industry names should be in different sizes and the sizes should be correlated with the number of layoffs in that particular industry. Larger sized words should represent a higher number of layoffs and smaller sized words would conversely represent a lower number of layoffs. 
- The industry names are all in Hex color #3AAC9 when in a non-hovered state.
- When users hover over, the word should be in Hex color #FF9C00. 
- Larger words should be centered in the middle of the word cloud visualization. 
- When users hover over an industry name, a dynamic tooltip label should appear above the hovered word and disappear when the user moves their mouse away from the industry name.



### 5. Infection Timeline Slider
![Infection Timeline Slider](/img/infection_timeline.png "Infection Timeline Slider")
- The title should be at the top on its own line in a bolded text.
- There should be two sliders: one titled mild and one titled severe. Labels are horizontally aligned with the slider timeline themselves and exist to the left of the slider.
- The slider representing a mild case of Covid-19 infection is shorter than the severe slider, and should be exactly one third the length of the severe case of Covid-19 infection slider.
- The green areas of the slider timeline should be in Hex color code #63AD48 and applied to the beginning and the end of the slider. The “symptoms onset” points of the timeline slider should be in Hex color code #FF9C00. Hex color #FF0000 will be used to represent the most severe onset of symptoms for the severe timeline slider. 
- Underneath the point on the timeline that represents full recovery on the mild slider, there should be a static label of “2 weeks”. 
- Underneath the point on the timeline that represents full recovery on the severe slider, there should be a static label of “6 weeks”. 
- Underneath the symptom onset point on the severe infection slider, there should be a static label of “5-6 days”.
- There should be a total of 3 static labels on top of the mild infection timeline slider, representing the point in which an infected person is exposed, experiences an onset of symptoms and recovers. 
- There should be 1 static label above the furthest right point of the severe infection timeline slider that says ‘recovery’. 
- When users drag the slider across either mild or severe infection timeline instances, which should elicit a dynamic label above the slider that the user is currently dragging. 
- Simultaneous interactions with the two sliders is not supported; users cannot be dragged two sliders at the same time and the content displayed by the sliders should be independent of each other. 



### 6. Mortality Rate by Demographics
![Mortality Rate by Demographics](/img/mortality_rate.png "Mortality Rate by Demographics")
- The title should be at the top on its own line in a bolded text.
- The specific number of deaths should be shown in a pop-up when any individual bar is hovered.
- The pop-up should fade out when the bar is no longer hovered.
- The X-axis of the graph should be the percentage of deaths, starting from 0% and going up to 100% by increments of 10%.
- The y-axis should be the age group in years, going from 0-4, 5-14, then incrementing in groups of 9 by default.
- The user should be able to change the y-axis with only 2 clicks or taps (one click/tap to open a menu, and another to select an option).
- When the user clicks or taps the menu, three options should be presented as a drop down menu, ordered as follows: Age Group, Sex, Race/Ethnicity.
- When the menu is opened, the currently selected option should be bolded.
- No data should be covered whenever the dropdown menu is opened.



### 7. Lasting effects based on pre-existing health conditions
![Lasting effects based on pre-existing health conditions](/img/lasting_effects.png "Lasting effects based on pre-existing health conditions")
- The title should be at the top on its own line in a bolded text.
- The waffle chart should only have two colors per chart.
- There should be a sentence of text that details what the chart’s data represents above the waffle chart itself.
- The descriptive line to contextualize the waffle chart, “(percentage) of patients did not return to a usual state of health…”, should be the same color as that portion of the waffle chart.
- The user should be able to change the chart category within two clicks or taps via a dropdown menu.
- When the dropdown menu is opened, there should be 4 categories listed in order as follows: Hypertension, Obesity, Psychiatric condition, Immunosuppressive condition.
- When any option is selected, the drop down menu should close.
- When any option is selected, the displayed chart should transition into the selected one based on the dropdown menu input.
- When the dropdown menu is opened, the currently selected category should be bolded.
- The dropdown menu should be positioned in a way such that opening it does not obstruct any part of the waffle chart or other information on the page. 
- When users hover over a section of the waffle chart, users should be able to see how the percentage was calculated (the sample size and number of patients in the recover/did not recover category).
- When users move their mouse away from a hovered section of the waffle chart, the popup should fade out.


### 8. Spending on COVID-19 relief budget breakdown in the USA
![Spending on COVID-19 relief budget breakdown in the USA](/img/spending_us.png "Spending on COVID-19 relief budget breakdown in the USA")
- The title should be at the top on its own line in a bolded text.
- There should be 2 bar horizontal bar graphs that are divided into sections that represent how much has been spent by the United States in response to Covid-19.
- When the user hovers over a section, a popup label should appear below in the hovered section. 
- When users move their mouse away from a hovered section of the horizontal bar chart, the popup should fade out.
- The bar graph’s statistics will not be dynamic; these numbers will not change because they are not connected to an API.
- For the upper bar “COVID-19 Aid, Relief, and Economic Security Act (Cares Act)”, the yellow area which “Outlays” points to should be in Hex color code #F7E55D; the blue area which “Obligations” points to should be in Hex color code #96AFFC; the cyan area which “Unobligated” points to should be in Hex color code #00DCDC.
- For the lower bar “Total Estimated Lending”, the yellow area which “Utilized Lending” points to should be in Hex color code #F7E55D, and the cyan area (the rest of the bar graph) should be in Hex color code #00DCDC.

