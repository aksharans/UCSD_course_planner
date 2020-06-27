from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
def index():
    majors_list = ["Computer Engineering", "Computer Science", "Electrical Engineering", 
    "Bioengineering", "Mechanical Engineering", "Aerospace Engineering", "Chemical Engineering",
    "Nano Engineering", "Structural Engineering"]
    return render_template('index.html', majors=majors_list)

if __name__ == "__main__":
    app.run(debug=True)