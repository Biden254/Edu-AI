def predict_engagement(student):
    attendance = student["attendance"]
    preferred_times = student["preferences"]["study_times"]
    conflicts = student["conflicts"]

    # Simulate engagement score logic
    attendance_score = sum(attendance) / len(attendance)
    conflict_penalty = len(conflicts) * 0.1
    engagement_score = round(attendance_score - conflict_penalty, 2)

    return {
        "score": engagement_score,
        "advice": "Great job!" if engagement_score > 0.6 else "Try attending more sessions."
    }
# This function predicts the engagement of a student based on their attendance, preferences, and conflicts.
# It calculates an engagement score and provides advice based on the score.