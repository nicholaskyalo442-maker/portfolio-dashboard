// =============================
// PORTFOLIO DASHBOARD LOGIC
// =============================

// Data source (easy to update later)
const portfolioData = {
  projects: [
    "Insurance Risk Model",
    "Financial Data Analysis",
    "Monte Carlo Simulation"
  ],
  skills: [
    "Excel",
    "Python",
    "R Programming",
    "Risk Modeling"
  ]
};

// =============================
// UPDATE STATS DYNAMICALLY
// =============================
document.getElementById("projectsCount").innerText = portfolioData.projects.length;
document.getElementById("skillsCount").innerText = portfolioData.skills.length;

// =============================
// OPTIONAL: RENDER LISTS DYNAMICALLY
// =============================
const projectList = document.querySelector(".card ul");

portfolioData.projects.forEach(project => {
  const li = document.createElement("li");
  li.textContent = project;
  projectList.appendChild(li);
});

// =============================
// SIMPLE INTERACTION FEEDBACK
// =============================
const links = document.querySelectorAll(".links a");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.05)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
  });
});
