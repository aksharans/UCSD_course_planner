from flask import Flask, render_template, url_for
import pandas as pd
import os
app = Flask(__name__)

@app.route('/')
def index():
    majors_list = ["Computer Engineering", "Computer Science", "Electrical Engineering", 
    "Bioengineering", "Mechanical Engineering", "Aerospace Engineering", "Chemical Engineering",
    "Nano Engineering", "Structural Engineering", "Environmental Engineering", "Engineering Physics",
    "EE & Society"]
    return render_template('index.html', majors=majors_list)

@app.route('/<major>')
def welcome(major):

    course_list = ["CSE", "ECE", "PHYS", "MATH", "COGS", "CHEM", 
    "ECON", "BENG", "ESYS", "HUM", "MAE", "BIOL", "NANO", "CENG", "SE"]
    data = {}
    
    for course in course_list: 
        c = course
        csv_name = f"./data/{c}_courses.csv"
        data[course] = pd.read_csv(csv_name).to_html()

    major_code_dict = {"Computer Engineering": "CE", "Computer Science": "CS", 
    "Electrical Engineering": "EE", "Bioengineering": "BE", "Mechanical Engineering": "ME",
    "Aerospace Engineering": "AE", "Chemical Engineering": "CHE", "Nano Engineering": "NE", 
    "Structural Engineering": "SE", "Environmental Engineering": "EVE", "Engineering Physics": "EP",
    "EE & Society" : "EES"}
    major_code = major_code_dict.get(major)

    return render_template('page.html', major=major, courses=course_list, data=data, mcode=major_code)

@app.route('/gened')
def gened():
    return render_template('gened.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == "__main__":
    app.run(debug=True)