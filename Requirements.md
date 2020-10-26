## Requirements
### 1. General Requirements:
- This product should be a website that is open to anyone with internet access
- Users must be able to accomplish all the interactions on this website by accessing the website through a desktop or a laptop that has a mouse and/or touch screen
- The overall website should have 2 pages: one for health insights and another for economic insights
- When the site is opened with a standard URL (having no subdomain/endpoint), the site defaults to displaying the Health Insights page
- When the site is opened using a specific endpoint in the URL, the site should display the specified page. “/health” should lead to the Health Insights page, while “/economics” should lead to the Economic Insights page
- The Health Insight page with the URL endpoint of “/health”, should contain the Mortality Rate by Demographic bar graph, the Infection Timeline slider visualization, and the Lasting Effects by Pre-Existing Health Conditions waffle chart.
- The Economics Insight page with the URL endpoint of “/economics”, should contain the Spending on Covid Relief Across Different Countries bar graph, the Job Loss word cloud, and the US Budget Breakdown single bar chart.
- At the bottom of the Health Insights and Economic Insights pages, there should be a numbered reference list. The list refers to the different sources of data we used to create each chart. Each number should link directly to the page where we obtained the data from.
- Each chart should include the number corresponding to the data source used from the numbered reference list.  
- All colors used for the graphs must use colorblind safe themes.
![Health](/img/health.png "Health")
![Economics](/img/economic.png "Economics")

### 2. Navigation Bar:
![Navigation Bar](/img/health_nav.png "Navigation Bar")
- Users must be able to access the health insights page with a single click/touch on the ‘health insights’ button in the navigation bar
- Users must be able to access the economic insights page with a single click/touch on the ‘economic insights’ button in the navigation bar
- When the user is currently on the health insights page, the ‘health insights’ link in the navigation bar should be highlighted and should not respond to click or touch inputs
- When the user is currently on the economic insights page, the ‘economic insights’ link in the navigation bar should be highlighted and should not respond to click or touch inputs
- The logo should be a static image
- The navigation bar should be positioned at the top of both pages (health insights and economic insights)

### 3. Bar graph of spending on covid relief across different countries:
![Bar graph of spending on covid relief across different countries](/img/spending_countries.png "Bar graph of spending on covid relief across different countries")
- The title should be at the top on its own line in bolded text
- The y-axis should be 7 country names, including Japan, USA, Australia, Canada, UK, Columbia, Gambia, sorted in descending order based on the percentage of spending (x value)
- The x-axis should be the COVID-19 relief spending as a percentage of each country’s GDP, incremented by 10% from 0% to 100%
- A tooltip corresponded to the bar must pop up nearby when the user hovers over each bar, and it should persist until the cursor is no longer over the bar
- The tooltip must show the specific percentage of spending as a percentage of the country’s GDP with text
- Each bar needs to be filled with a color specified as follows: Japan (Hex: #52C8FA), USA (Hex: #96AFFC), Australia (Hex: #3AAC99), Canada (Hex: #F7E55D), UK (Hex: #FF9C00), Columbia (Hex: #FF767C), Gambia (Hex: #FBD5C5)


### 4. Job Loss Word Cloud
![Job Loss Word Cloud](/img/job_loss.png "Job Loss Word Cloud")
- Industry names are in different sizes associated with the number of layoffs in the industry compared with others. A larger size means a higher number of layoffs (Users are able to find the industry with most layoffs based on the word size).
- The industry names are all in green (Hex: #3AAC99) without hovering over.
- The industry names with largest size are in the middle of the page. The names with smaller size are around randomly.
- Users are able to hover over the word to elicit a tooltip that gives a precise number of jobs lost for the hovered industry. 
- When users hover over, the word would change to orange (Hex: #FF9C00).
- When the mouse is no longer placed over the word, the statistical pop-up label will fade.


### 5. Infection Timeline Slider
![Infection Timeline Slider](/img/infection_timeline.png "Infection Timeline Slider")
- The bolded title of the chart is at the top left corner.
- There should be two sliders: one titled mild and one titled severe. Labels are horizontally aligned with the slider timeline themselves and exist to the left of the slider.
- The slider representing a mild case of Covid-19 infection is shorter than the severe slider, and should be exactly one third the length of the severe case of Covid-19 infection slider.
- Below the point on the timeline that represents full recovery on the mild slider, there should be a static label of “2 weeks”. 
- The color scheme of lines would imply the severity of the infection process. Green (Hex: #63AD48) implies healthy, orange (Hex: #FF9C00) implies mild, red (Hex: #FF0000) implies severe.
- There will be two grey labels on the top each slider providing explanations for the color change. The positions and content of two labels would change once users drag the sliders across the timeline. The “exposure” points to the green (Hex: #63AD48) at the beginning; the “symptoms onset” points to the orange (Hex: #FF9C00); the “recovery” points to green (Hex: #63AD48) at the end of sliders.
- Users can drag the slider across the ‘infection timeline’ for both the mild and severe instances, which will elicit a label above the slider that they drag. Content inside the label should change once the user drags the slider to different places on the lines.
- Users can drag the sliders back and forth, but the two sliders cannot be dragged at the same time and they are independent of each other. 


### 6. Mortality Rate by Demographics
![Mortality Rate by Demographics](/img/mortality_rate.png "Mortality Rate by Demographics")
- The specific number of deaths should be shown in a pop-up when any individual bar is hovered
- The pop up should fade out when the bar is no longer hovered
- The title of the graph should be on its own line at the top
- The x-axis of the graph should be the percentage of deaths, incremented by 10 from 0 to 100
- The y-axis should be the age group in years, going from 0-4, 5-14, then incrementing in groups of 9 by default
- The user should be able to change the y-axis with only 2 clicks or taps (one click/tap to open a menu, and another to select an option)
- When the user clicks or taps the menu, three options should be presented as a drop down menu, ordered as follows: Age Group, Sex, Race/Ethnicity
- When the menu is opened, the currently selected option should be bolded
- No data should be covered whenever the dropdown menu is opened


### 7. Lasting effects based on pre-existing health conditions
![Lasting effects based on pre-existing health conditions](/img/lasting_effects.png "Lasting effects based on pre-existing health conditions")
- The title should be at the top on its own line in a bolded text
- The waffle chart should only have two colors per chart
- There should be a sentence of text that details what the chart’s data represents
- The specific line of “(percentage of patients) of patients did not return to a usual state of health…” should be the same color as that portion of the waffle chart.
- The user should be able to change the chart category within two clicks via a dropdown menu.
- When the dropdown menu is opened, there should be 4 categories listed in order as follows: Hypertension, Obesity, Psychiatric condition, Immunosuppressive condition
- When any option is selected, the menu should close
- When any option is selected, the displayed chart should transition into the selected one
- When the menu is opened, the currently selected category should be bolded
- The menu should be positioned in a way such that opening it does not obstruct any of the information on the page. 
- The user should be able to see how the percentage was found (the sample size and number of patients in the recover/did not recover category) when that section of the waffle chart is hovered
- The popup should fade out when the section of the waffle chart is no longer hovered


### 8. Spending on COVID-19 relief budget breakdown in the USA
![Spending on COVID-19 relief budget breakdown in the USA](/img/spending_us.png "Spending on COVID-19 relief budget breakdown in the USA")
- Title should be in bold above the single horizontal bar graphs.
- There should be 2 bar horizontal bar graphs that are divided into sections that represent how much has been spent by the United States in response to Covid-19
- When the user hovers over a section, a label will appear 
- The label will be always below the horizontal bar graph itself
- The hover label will disappear as the user’s mouse stops hovering over that section of the bar graph
- The bar graph’s numbers will not be dynamic; these numbers will not change because they are not connected to an API
