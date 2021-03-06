from bs4 import BeautifulSoup
import requests
import csv
import re

# Opening a csv file and a writer and declaring 3 columns with the code, name, and prereqs
csv_file = open("./data/BIOL_courses.csv", "w")
csv_writer = csv.writer(csv_file)
csv_writer.writerow(["Code", "Name (Units)", "Prerequisites"])


# Getting a request from the CSE catalog website and passing the html text into beautiful soup
r = requests.get("https://ucsd.edu/catalog/courses/BIOL.html")
soup = BeautifulSoup(r.text, "html.parser")

# print("Status: ", r.status_code)
# print(r.url)
# print(r.text)

# Finding all occurrences of course name and course descriptions and setting them to lists
results = soup.findAll("p", class_="course-name")
prereqs = soup.findAll("p", class_="course-descriptions")

# Iterating through both lists simultaneously
for res, pre in zip(results, prereqs):

    # Getting the course code and the course name
    cn_item_full = res.text.split(".")
    code = cn_item_full[0]

    code = cn_item_full[0].replace("\n", "").replace("\t", "")
    name = cn_item_full[1].replace("\n", "").replace("\t", "")
    name = re.sub(" +", " ", name)


    # Getting the raw course number to filter out non-undergrad courses
    course_number = code.split(" ")[1]
    course_number = int(re.sub("[^0-9]", "", course_number))

    # Only including undergrad courses
    if course_number < 200:
        # Getting the raw prerequisite description for each course
        try:
            p_item_full = pre.text.split("Prerequisites: ")
            p = p_item_full[1].replace("\n", "").replace("\t", "").replace("\r", "")
            p = re.sub(" +", " ", p)
        except:
             p = "none."

        # Writing the row with the code, name, and prereqs tot he csv file
        csv_writer.writerow([code, name, p])

csv_file.close()