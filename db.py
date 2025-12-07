from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    courseName = db.Column(db.String(50), nullable=False)
    subjectName = db.Column(db.String(50), nullable=False)
    

