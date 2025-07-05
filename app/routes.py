from flask import Blueprint, render_template, jsonify
from .schedule import manage_schedule
from .mock_data import student_data

main = Blueprint('main', __name__)

@main.route("/")
def dashboard():
    return render_template("dashboard.html")

@main.route("/api/schedule", methods=["GET"])
def get_schedule():
    schedule_data = manage_schedule(student_data)
    return jsonify({
        "student": student_data,
        "schedule": schedule_data["schedule"],
        "engagement": schedule_data["engagement"]
    })

