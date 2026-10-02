// Data Objects and Arrays
const portfolioData = {
    projects: [
        {
            title: "Software Engineering Portfolio",
            description: "A personal portfolio web app showcasing development projects, technical skills, and background information.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Broke Guys Store",
            description: "A responsive e-commerce landing page featuring clean product layouts and modern CSS grid styling.",
            technologies: ["HTML", "CSS", "Git"]
        }
    ], 
    testimonials: [
        {
            quote: "Mike shows exceptional dedication to learning software engineering concepts and applies clean coding practices.",
            author: "— Eddie, Software Engineer"
        },
        {
            quote: "A remarkably creative developer who balances technical execution with a great eye for design and responsiveness.",
            author: "— Abbie, Project Collaborator"
        }
    ]
};


// Function to render Projects
function renderProjects() {
    const projectsContainer = document.getElementById("projects-container");
     
    // Loop through the projects array using a for...of loop
    for (const project of portfolioData.projects) {
        const card = document.createElement("div");
        card.className = "card";

        // Generate tech tags markup
        let techTagsHTML = "";
        for (const tech of project.technologies) {
            techTagsHTML += `<span class="tech-tag">${tech}</span>`;
        }

        card.innerHTML = `
            <div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
            <div>${techTagsHTML}</div>
        `;

        projectsContainer.appendChild(card);
    }
}

// Function to render Testimonials (satisfies the JavaScript Requirement)
function renderTestimonials() {
    const testimonialsContainer = document.getElementById("testimonials-container");

    // Loop through the testimonials object/array
    for (const item of portfolioData.testimonials) {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <p>"${item.quote}"</p>
            <span class="testimonial-author">${item.author}</span>
        `;

        testimonialsContainer.appendChild(card);
    }
}

// Initialize rendering when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    renderTestimonials();
});