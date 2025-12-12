from flask import Flask, redirect, url_for, render_template, request, session
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from authlib.integrations.flask_client import OAuth
from db import db, Course, User


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:gwerty@localhost:5432/courseApp'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.secret_key = "gwertygleb12"

db.init_app(app)

with app.app_context():
    db.create_all()


login_manager = LoginManager(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

oauth = OAuth(app)
google = oauth.register(
    name='google',
    client_id='68841821926-r86pf8jmh70vu9595ggv468o3ds7kdj1.apps.googleusercontent.com',
    client_secret='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',
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'}
)



@app.route('/')
def hello():
    courses = Course.query.all()
    return render_template('main_page.html', courses=courses, user=current_user)

@app.route('/login')
def login():
    redirect_uri = url_for('authorize', _external=True)
    print(redirect_uri)
    return google.authorize_redirect(redirect_uri, prompt='select_account')

@app.route('/login/callback')
def authorize():
    token = google.authorize_access_token()
    nonce = session.get('nonce')
    user_info = google.parse_id_token(token, nonce=nonce)

    user = User.query.get(user_info['sub'])
    if not user:
        user = User(id=user_info['sub'],
                    name=user_info['name'],
                    email=user_info['email'])
        db.session.add(user)
        db.session.commit()
    
    login_user(user)

    session['just_logged_in'] = True
    session['username'] = user_info['name']

    return redirect(url_for('hello'))

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('hello'))

@app.route('/save_course', methods=['POST'])
@login_required
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