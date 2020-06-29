from bs4 import BeautifulSoup
import requests
import csv
import re

# dictionary for mapping subject code to url
list_course_info = {}


# loading the dictionary mapping subject codes to urls
def load_urls(code, url):
    list_course_info[code] = url


# print
def print_info():
    for item in list_course_info.items():
        print(item[0], ": ", item[1])


# function that scrapes the course code, name, and prerequisites
def scraper():

    # iterating through all the code-url mappings
    for item in list_course_info.items():

        # Opening a csv file and a writer and declaring 3 columns with the code, name, and prereqs
        csv_name = "./data/" + item[0] + "_courses.csv"
        csv_file = open(csv_name, "w")
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow(["Code", "Name", "Prerequisites"])

        # Getting a request from the course catalog website and passing the html text into beautiful soup
        r = requests.get(item[1])
        soup = BeautifulSoup(r.text, "html.parser")

        # Finding all occurrences of course name and course descriptions and setting them to lists
        results = soup.findAll("p", class_="course-name")
        prereqs = soup.findAll("p", class_="course-descriptions")

        # Iterating through both course name and course description lists simultaneously
        for res, pre in zip(results, prereqs):

            # splitting the course code and course name and accounting for any spacing issues
            cn_item_full = res.text.split(".")
            code = cn_item_full[0]
            name = cn_item_full[1].replace("\n", "").replace("\t", "")
            name = re.sub(" +", " ", name)

            # Getting the raw course number to filter out non-undergrad courses
           
            course_number = code.split(" ")[1]
            course_number = int(re.sub("[^0-9]", "", course_number))

            # Only including undergrad courses
            if course_number < 200:

                # Getting the prerequisite description for each course and accounting for spacing issues
                try:
                    p_item_full = pre.text.split("Prerequisites: ")
                    p = p_item_full[1].replace("\n", "").replace("\t", "").replace("\r", "")
                    p = re.sub(" +", " ", p)
                except:
                    p = "none."

                # Writing the row with the code, name, and prereqs to the csv file
                csv_writer.writerow([code, name, p])

        csv_file.close()