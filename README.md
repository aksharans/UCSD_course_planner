# UCSD Course Planner
A web app designed to help prospective and current Jacobs School of 
Engineering students to plan their schedule and be able to see the 
list of courses for relevant subjects, their pre-requisites, and 
college general education requirements all in one site.
(UC San Diego)

### Scraping Data
Data was scraped from UCSD websites using the Python scripts
located in the *scraper* folder. This was done using the 
BeautifulSoup4 library. The data containing each course's code,
name, and pre-requsites was then loaded into csv files within
the *data* folder.

### Flask
This web app was built using the Flask framework, and the 
implementation is in the *app.py* file.

### Templates/Static
The HTML files for the web app pages are found in the *templates*
folder. The *static* folder contains the CSS, JS, as well as
the images that were used in the site.

### Heroku
This web app is hosted on Heroku, using the Heroku CLI.
The *Procfile* specifies the commands on startup.
The dependencies are found in the *requirements.txt* file. 


## WebApp Link
https://ucsdcourseplanner.herokuapp.com/

