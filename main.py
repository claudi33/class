from flask import Flask, request, redirect, render_template, url_for
from db import db, Course

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:gwerty@localhost:5432/courseApp'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/')
def hello():
    return render_template('main_page.html')

@app.route('/save_course', methods=['POST'])
def save_course():
    courseName = request.form.get('courseName')
    subjectName = request.form.get('subjectName')

    if courseName and subjectName:
        new_course = Course(courseName=courseName, subjectName=subjectName)
        db.session.add(new_course)
        db.session.commit()
    return redirect(url_for('hello'))

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5000)