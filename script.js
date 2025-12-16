// Sample course data
const courses = [
    {
        id: 1,
        title: "Introduction to HTML",
        description: "Learn the basics of HTML and how to structure web pages.",
        completed: false
    },
    {
        id: 2,
        title: "CSS Fundamentals",
        description: "Understand CSS styling and make your pages look great.",
        completed: false
    },
    {
        id: 3,
        title: "JavaScript Basics",
        description: "Learn JavaScript to make your website interactive.",
        completed: false
    }
];

// Elements
const courseList = document.getElementById("course-list");
const courseDetails = document.getElementById("course-details");
const courseTitle = document.getElementById("course-title");
const courseDescription = document.getElementById("course-description");
const backBtn = document.getElementById("back-btn");
const completeBtn = document.getElementById("complete-btn");

// Render course list
function renderCourseList() {
    courseList.innerHTML = "";
    courses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
        card.addEventListener("click", () => showCourseDetails(course.id));
        if(course.completed) {
            card.style.opacity = "0.6";
            card.innerHTML += `<p><strong>Completed ✅</strong></p>`;
        }
        courseList.appendChild(card);
    });
}

// Show course details
function showCourseDetails(id) {
    const course = courses.find(c => c.id === id);
    courseTitle.textContent = course.title;
    courseDescription.textContent = course.description;
    completeBtn.onclick = () => markCompleted(course.id);
    courseList.classList.add("hidden");
    courseDetails.classList.remove("hidden");
}

// Mark course as completed
function markCompleted(id) {
    const course = courses.find(c => c.id === id);
    course.completed = true;
    alert(`${course.title} marked as completed!`);
    showCourseDetails(id);
}

// Back to course list
backBtn.addEventListener("click", () => {
    courseDetails.classList.add("hidden");
    courseList.classList.remove("hidden");
});

// Initial render
renderCourseList();
