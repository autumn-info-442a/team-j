## Plan
### How will you coordinate your work?
The PM (Josephine) uses GitHub to track issues and review what needs to be done for the next meeting before we all log off. Tasks and issues will be managed through the GitHub issues tracker. 
We have general check-in meetings on Sundays at 8pm PST. The PM plans our agenda, which is generally based on a group consensus of what our bandwidth can take for the week and how we want to approach the tasks themselves. 

### What tools will you use to communicate?
In terms of casual chat for updates, we use Facebook Messenger. An alternative includes using normal text messaging, but we don’t all have iMessage and overseas numbers could potentially be an issue for cost. Discord chat is another alternative, but some members aren’t usually logged on outside of class hours. In terms of other common chatting applications, not everyone may have an account and would be consistently online. 
As for calling, we have decided to stick with the Discord group channel. The obvious alternative would be Zoom, but the voice quality isn’t as clear and we would have to set up another link outside of our classroom medium. Facebook calling could also work, since we already use Facebook Messenger as our main mode for chatting, but similar to Zoom, the voice calling quality isn’t that great and doesn’t allow screen sharing. 
 
### Who will own components in your architecture?
Components:
- Overall app structure (Hedy)
- Navigation bar (somewhat relies on app structure)
- Bar graph of spending on covid relief across different countries (Jennifer)
- Job loss word cloud (Hedy)
- Infection timeline slider (Hedy)
- Mortality rate by demographics horizontal bar graph (Andrew)
- Lasting effects based on pre-existing health conditions waffle chart (Andrew)
- US spending on covid-19 relief budget breakdown single horizontal bar chart (Josephine)

### What is your timeline?
- Revise software architecture (11/7)
- Format data into a readable format for our functions (11/14)
- Create source files for software architecture (11/14)
- Implement the overall layout of the website (11/21)
- Write the individual components & debug as needed (11/28)
- Create the CSS (12/5)
- Debug as needed (12/9)

### When will you conduct inspections and who will be involved?
Everyone on the team will conduct inspections and will be done on a per needs basis. Every requirement will be verified as it becomes applicable. For instance, we won’t verify our data visualizations before we make our data visualizations. 

### Verification
**General Requirements:**
- This product should be a website that is open to anyone with internet access.
    - Enter the URL while connected to the internet and check to see if any errors occur. If a connection is established, this requirement is met.
- Users must be able to accomplish all the interactions on this website by accessing the website through a desktop or a laptop that has a mouse and/or touch screen.
    - Manual inspection: make sure that users are using a desktop computer or a laptop computer that is validly connected to a mouse and/or touch screen.
- The overall website should have 2 pages: one for health insights and another for economic insights.
    - Manual inspection: click on the different pages using the navigation bar and count the number of pages that are present on the website. 
- When the site is opened with a standard URL (having no subdomain/endpoint), the site defaults to displaying the Health Insights page.
    - Attach a console log and check the exact path="/" is matched to the Health Insights page.
- When the site is opened using a specific endpoint in the URL, the site should display the specified page. “/health” should lead to the Health Insights page, while “/economics” should lead to the Economic Insights page.
    - Attach a console log and check that the path for “/health” leads to the Health Insights page and that the path for “/economics” leads to the Economics Insights page. 
- The Health Insight page with the URL endpoint of “/health”, should contain the Mortality Rate by Demographic bar graph, the Infection Timeline slider visualization, and the Lasting Effects by Pre-Existing Health Conditions waffle chart.
    - Manual Inspection: Make sure that all three of the mentioned charts are visible on the page when going to the designated “/health” endpoint
- The Economics Insight page with the URL endpoint of “/economics”, should contain the Spending on Covid Relief Across Different Countries bar graph, the Job Loss word cloud, and the US Budget Breakdown single bar chart.
    - Manual Inspection: Make sure that all three of the mentioned charts are visible on the page when going to the designated “/economics” endpoint
- At the bottom of the Health Insights and Economic Insights pages, there should be a numbered reference list. The list refers to the different sources of data we used to create each chart. Each number should link directly to the page where we obtained the data from.
    - Manual Inspection: check that there is a numbered reference list at the bottom of the pages and click each one to make sure they go to a valid source
- Each chart should include the number corresponding to the data source used from the numbered reference list.  
    - Manual Inspection: make sure that each chart has a reference number for its data and that the number exists on the reference list
- All colors used for the graphs must use colorblind safe themes.
    - Check the hex codes of colors used and make sure that they fall within the spectrum of colorblind safe themes as dictated by the Adobe Color guidelines

**Navigation Bar:**
![Navigation Bar](/img/health_nav.png "Navigation Bar")
- Users must be able to access the health insights page with a single click/touch on the ‘health insights’ button in the navigation bar.
    - When the button is pressed, log the name of the page to ensure that the button’s functionality has occurred
- Users must be able to access the economic insights page with a single click/touch on the ‘economic insights’ button in the navigation bar.
    - When the button is pressed, log the name of the page to ensure that the button’s functionality has occurred
- When the user is currently on the health insights page, the ‘health insights’ link in the navigation bar should be highlighted and should not respond to click or touch inputs.
    - When the button is clicked in this state, have a different log than normal to indicate that the functionality (or lack thereof) has changed
- When the user is currently on the economic insights page, the ‘economic insights’ link in the navigation bar should be highlighted and should not respond to click or touch inputs.
    - When the button is clicked in this state, have a different log than normal to indicate that the functionality (or lack thereof) has changed 
- The logo should be a static image.
    - When the logo is hovered/clicked, it will not respond to any inputs.
- The navigation bar should be positioned at the top of both pages (health insights and economic insights).
    - Manual inspection: click on all pages to verify that the navigation bar is positioned at the top.

**Bar graph of spending on covid relief across different countries:**
![Bar graph of spending on covid relief across different countries](/img/spending_countries.png "Bar graph of spending on covid relief across different countries")
- The title should be at the top on its own line in bolded text.
    - Manually check: the title is on top of the graph and bolded.
- The y-axis should be 7 country names, including Japan, USA, Australia, Canada, UK, Columbia, Gambia, sorted in descending order based on the percentage of spending (x value).
    - Attach a console log to check if the country names are correctly displayed and ordered.
- The x-axis should be the COVID-19 relief spending as a percentage of each country’s GDP, incremented by 10% from 0% to 100%.
    - Manually inspect: the displayed chart has a x-axis with number labels, incremented by 10 from 0 to 100.
- A tooltip corresponding to the bar must pop up nearby when the user hovers over each bar, and it should persist until the cursor is no longer over the bar.
    - Attach a console log to this action to confirm if the function is being called correctly. The message should confirm that the tooltip display function is being called correctly
- The tooltip must show the specific percentage of spending as a percentage of the country’s GDP with text.
    - Attach a console log with the spending number to compare to the displayed tooltip. Check to confirm they are the same.
- Each bar needs to be filled with a color specified as follows: Japan (Hex: #52C8FA), USA (Hex: #96AFFC), Australia (Hex: #3AAC99), Canada (Hex: #F7E55D), UK (Hex: #FF9C00), Columbia (Hex: #FF767C), Gambia (Hex: #FBD5C5).
    - Manual inspection: use a color inspector/eyedropper tool to verify the hex value matches.

**Job Loss Word Cloud:**
![Job Loss Word Cloud](/img/job_loss.png "Job Loss Word Cloud")
- The title should be at the top on its own line in a bolded text.
    - Manually check: The title is at the top on its own line in a bolded text.
- The size of Industry names should be correlated with the number of layoffs in that particular industry. Larger sized words should represent a higher number of layoffs and smaller sized words would conversely represent a lower number of layoffs. Larger words should be centered in the middle of the word cloud visualization. 
    - Pull out the industry layoff data and order them with the layoff numbers to check if the size of Industry names are correlated with the number of layoffs in that particular industry or not.
- Use the color eyedropper tool to verify the hex value matches: the industry names are all in Hex color #3AAC9 when in a non-hovered state. When users hover over, the word should be in Hex color #FF9C00. 
    - Console log the color code being used to verify they are the same
- When users hover over an industry name, a dynamic tooltip label should appear above the hovered word and disappear when the user moves their mouse away from the industry name.
    - Attach a console log to this action to confirm the tooltip label is being called correctly.

**Infection Timeline Slider:**
![Infection Timeline Slider](/img/infection_timeline.png "Infection Timeline Slider")
- The title is at the top on its own line in a bolded text; if two sliders: one titled mild and one titled severe; labels are horizontally aligned with the slider timeline themselves and exist to the left of the slider.
    - Manually check: if the title is at the top on its own line in a bolded text; if two sliders: one titled mild and one titled severe; if labels are horizontally aligned with the slider timeline themselves and exist to the left of the slider.
- The slider representing a mild case of Covid-19 infection is shorter than the severe slider, and should be exactly one third the length of the severe case of Covid-19 infection slider.
    - Manually check: if the slider representing a mild case of Covid-19 infection is shorter than the severe slider, and should be exactly one third the length of the severe case of Covid-19 infection slider.
- The green areas of the slider timeline should be in Hex color code #63AD48 and applied to the beginning and the end of the slider. The “symptoms onset” points of the timeline slider should be in Hex color code #FF9C00. Hex color #FF0000 will be used to represent the most severe onset of symptoms for the severe timeline slider. 
    - Use the eyedropper tool to verify the hex value matches.
- Underneath the point on the timeline that represents full recovery on the mild slider, there should be a static label of “2 weeks”; Underneath the point on the timeline that represents full recovery on the severe slider, there should be a static label of “6 weeks”; Underneath the symptom onset point on the severe infection slider, there should be a static label of “5-6 days”; a total of 3 static labels on top of the mild infection timeline slider, representing the point in which an infected person is exposed, experiences an onset of symptoms and recovers; 1 static label above the furthest right point of the severe infection timeline slider that says ‘recovery’. 
    - Manually check the positions of each static label and the correctness of numbers.
- When users drag the slider across either mild or severe infection timeline instances, which should elicit a dynamic label above the slider that the user is currently dragging. 
    - Attach a console log to a function which receives the user's input and generates the corresponding content displaying onto the label, and check if the user’s input is correctly received and matches to the correct content.
- Simultaneous interactions with the two sliders is not supported; users cannot be dragged two sliders at the same time and the content displayed by the sliders should be independent of each other. 
    - Drag the two sliders manually to check if simultaneous interactions with the two sliders is supported or not as users cannot drag two sliders at the same time and the content displayed by the sliders should be independent of each other. 

**Mortality Rate by Demographics:**
![Mortality Rate by Demographics](/img/mortality_rate.png "Mortality Rate by Demographics")
- The title should be at the top on its own line in a bolded text.
    - Manually inspect from the browser to confirm that the text is bolded, and visually check to make sure it is more bold than other text
- The specific number of deaths should be shown in a pop-up when any individual bar is hovered.
    - Attach a console log to this action to confirm if the function is being called correctly.The log should contain the statistic being displayed and can be used to confirm if the display is correctly showing the information
- The pop-up should fade out when the bar is no longer hovered.
    - Manual Inspection: make sure that the pop-up fades away when hovering stops
- The X-axis of the graph should be the percentage of deaths, starting from 0% and going up to 100% by increments of 10%.
    - Manual Inspection: make sure that the values are all correct, going from 0-100
- The y-axis should be the age group in years, going from 0-4, 5-14, then incrementing in groups of 9 by default.
    - Manual Inspection: make sure that the values are correct and that the groupings are as specified in the requirement
- The user should be able to change the y-axis with only 2 clicks or taps (one click/tap to open a menu, and another to select an option).
    - Manual Inspection: make sure that it only takes two inputs to open the dropdown menu and select and option, and that the graph changes once this is done
- When the user clicks or taps the menu, three options should be presented as a drop down menu, ordered as follows: Age Group, Sex, Race/Ethnicity.
    - When the dropdown is clicked for the first time, log a statement that lists the options available to confirm that it is being displayed correctly. 
- When the menu is opened, the currently selected option should be bolded.
    - Manual Inspection: use a browser inspect element to confirm that the text is bolded, and also confirm visually that it is darker than the other options
- No data should be covered whenever the dropdown menu is opened.
    - Manual Inspection: make sure that nothing is covered when opening and closing the menu

**Lasting effects based on pre-existing health conditions:**
![Lasting effects based on pre-existing health conditions](/img/lasting_effects.png "Lasting effects based on pre-existing health conditions")
- The title should be at the top on its own line in a bolded text.
    - Manual Inspection: make sure that it is darker than other text, and in the browser inspect element that it is bolded
- The waffle chart should only have two colors per chart.
    - Manual Inspection: make sure that there are only two, then confirm via inspect element that there are only two colors
- There should be a sentence of text that details what the chart’s data represents above the waffle chart itself.
    - Manual Inspection: make sure that there is a line of text that describes the data being presented
- The descriptive line to contextualize the waffle chart, “(percentage) of patients did not return to a usual state of health…”, should be the same color as that portion of the waffle chart.
    - Manual Inspection: make sure that the colors are the same, then in inspect element check the hex codes and make sure they match
- The user should be able to change the chart category within two clicks or taps via a dropdown menu.
    - Manual Inspection: make sure that it only takes two inputs to open the dropdown menu and select and option, and that the graph changes once this is done
- When the dropdown menu is opened, there should be 4 categories listed in order as follows: Hypertension, Obesity, Psychiatric condition, Immunosuppressive condition.
    - Manual Inspection: confirm both visually and via inspect element that the options are correct
- When any option is selected, the drop down menu should close.
    - Manual Inspection: make sure selecting an option closes the menu
- When any option is selected, the displayed chart should transition into the selected one based on the dropdown menu input.
    - Manual Inspection: make sure that after selecting an option, the chart changes and the data/category matches the selected option
- When the dropdown menu is opened, the currently selected category should be bolded.
    - Manual Inspection: check visually and via inspect element that the current option is darker/bold
- The dropdown menu should be positioned in a way such that opening it does not obstruct any part of the waffle chart or other information on the page. 
    - Manual Inspection: make sure that opening and closing the menu doesn’t obstruct any content
- When users hover over a section of the waffle chart, users should be able to see how the percentage was calculated (the sample size and number of patients in the recover/did not recover category).
    - Attach a console log to this action to confirm if the function is being called correctly
- When users move their mouse away from a hovered section of the waffle chart, the popup should fade out.
    - Manual Inspection: make sure that moving the mouse off of the waffle chart causes the pop up to fade out and disappear.

**Spending on COVID-19 relief budget breakdown in the USA:**
![Spending on COVID-19 relief budget breakdown in the USA](/img/spending_us.png "Spending on COVID-19 relief budget breakdown in the USA")
- The title should be at the top on its own line in a bolded text.
    - Manual inspection: look at the section to see if there is a title at the top of the US Spending on Covid-19 Relief Budget Breakdown bar chart. 
- There should be 2 bar horizontal bar graphs that are divided into sections that represent how much has been spent by the United States in response to Covid-19.
    - Manual inspection: look to see if there are two bars in the US Spending on Covid-19 Relief Budget Breakdown section of the ‘Economic Effects’ page.
- When the user hovers over a section, a popup label should appear near the hovered section. 
    - Attach a console log to this action to confirm if the function is being called correctly.
- When users move their mouse away from a hovered section of the horizontal bar chart, the popup should fade out.
    - Manual inspection: move the mouse pointer away from the bars of the graph.
- The bar graph’s statistics will not be dynamic; these numbers will not change because they are not connected to an API.
    - Manual inspection: open the graph across multiple days to verify that there are no changes to the values shown on the graph. From a less realistic standpoint, one could check a year later to verify that numbers have not changed. 
- For the upper bar “COVID-19 Aid, Relief, and Economic Security Act (Cares Act)”, the yellow area which “Outlays” points to should be in Hex color code #F7E55D; the blue area which “Obligations” points to should be in Hex color code #96AFFC; the cyan area which “Unobligated” points to should be in Hex color code #00DCDC.
    - Manual inspection: use a color inspector/eyedropper tool to verify the hex value matches.
- For the lower bar “Total Estimated Lending”, the yellow area which “Utilized Lending” points to should be in Hex color code #F7E55D, and the cyan area (the rest of the bar graph) should be in Hex color code #00DCDC.
    - Manual inspection: use a color inspector/eyedropper tool to verify the hex value matches.

