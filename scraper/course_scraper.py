from bs4 import BeautifulSoup
import requests
from scraper_function import load_urls
from scraper_function import print_info
from scraper_function import scraper


r = requests.get("https://blink.ucsd.edu/instructors/courses/schedule-of-classes/subject-codes.html")
soup = BeautifulSoup(r.text, "html.parser")

# print("Status: ", r.status_code)
# print(r.url)
# print(r.text)
# print()

results = soup.findAll("tr")

list_wc = []

wanted_courses_list = ["CSE", "ECE", "PHYS", "MATH", "COGS", "CHEM", 
 "ECON", "BENG", "ESYS", "HUM"]

for item in results:
    code = item.next_element.next_element.text

    if code in wanted_courses_list:
        list_wc.append(code)

for code in list_wc:
    base_catalog_url = f"https://ucsd.edu/catalog/courses/{code}.html"
    load_urls(code, base_catalog_url)

print_info()
scraper()