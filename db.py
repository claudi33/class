from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

course_members = db.Table(
    'course_members',
    db.Column('user_id', db.String(200), db.ForeignKey('user.id'), primary_key=True),
    db.Column('course_id', db.String(20), db.ForeignKey('course.id'), primary_key=True)
)

class Course(db.Model):
    id = db.Column(db.String, primary_key=True)
    courseName = db.Column(db.String(50), nullable=False)
    subjectName = db.Column(db.String(50), nullable=False)

    owner_id = db.Column(db.String(200), db.ForeignKey('user.id'), nullable=False)
    owner = db.relationship('User', backref='owned_courses')

    members = db.relationship('User',
                              secondary=course_members,
                              back_populates='courses')

class User(UserMixin, db.Model):
    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(150))

    courses = db.relationship('Course',
                              secondary=course_members,
                              back_populates='members')
    