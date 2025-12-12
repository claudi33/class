from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    courseName = db.Column(db.String(50), nullable=False)
    subjectName = db.Column(db.String(50), nullable=False)
    

class User(UserMixin, db.Model):
    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(150))

    