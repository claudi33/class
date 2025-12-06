from flask import Flask, redirect, render_template


app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('main_page.html')


if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5000)