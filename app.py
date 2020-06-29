from flask import Flask, render_template, url_for
import pandas as pd
import os
app = Flask(__name__)

@app.route('/')
def index():
    majors_list = ["Computer Engineering", "Computer Science", "Electrical Engineering", 
    "Bioengineering", "Mechanical Engineering", "Aerospace Engineering", "Chemical Engineering",
    "Nano Engineering", "Structural Engineering"]
    return render_template('index.html', majors=majors_list)

@app.route('/<major>')
def welcome(major):

    course_list = ["CSE", "ECE", "MATH", "PHYS"]
    data = {}
    
    for course in course_list: 
        c = course
        csv_name = f"./data/{c}_courses.csv"
        data[course] = pd.read_csv(csv_name).to_html()
    return render_template('page.html', major=major, courses=course_list, data=data)

if __name__ == "__main__":
    app.run(debug=True)