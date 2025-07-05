window.onload = async function () {
    const response = await fetch('/api/schedule');
    const data = await response.json();

    const student = data.student || {
        name: "Liam",
        preferences: { notify: "email" },
        attendance: [1, 0, 1, 1, 0, 0, 1]
    };

    const attendanceScore = (student.attendance.reduce((a, b) => a + b) / student.attendance.length) * 100;

    // Populate profile
    document.getElementById("studentName").innerText = student.name;
    document.getElementById("notifyType").innerText = student.preferences.notify;

    // Progress Bar
    const progressBar = document.getElementById("attendanceProgress");
    progressBar.style.width = attendanceScore.toFixed(0) + "%";
    progressBar.innerText = attendanceScore.toFixed(0) + "%";

    // Schedule
    const scheduleList = document.getElementById("scheduleList");
    for (const [day, time] of Object.entries(data.schedule)) {
        const li = document.createElement("li");
        li.innerText = `${day}: ${time}`;
        scheduleList.appendChild(li);
    }

    // Engagement Feedback
    const feedbackBox = document.getElementById("engagementFeedback");
    feedbackBox.classList.add(
        data.engagement.score > 0.6 ? "feedback-positive" : "feedback-negative"
    );
    feedbackBox.innerHTML = `
        <p><strong>Engagement Score:</strong> ${data.engagement.score}</p>
        <p>${data.engagement.advice}</p>
    `;
};
