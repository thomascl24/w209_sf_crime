import os
from flask import Flask, render_template, jsonify

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key")

# Routes
@app.route("/")
def index():
    """Render homepage"""
    return render_template("index.html", )

@app.route("/dashboard")
def dashboard():
    """Render dashboard page"""
    return render_template("dashboard.html")

@app.route("/about")
def about():
    """Render about page"""
    return render_template("about.html")

@app.route("/improvements")
def improvements():
    return render_template("improvements.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
