//consol
console.log ('hello world!');

//intro
const name = "Jared Palmer";

function showGreeting(name){
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

const greetingElement = document.getElementById('greeting');
greetingElement.textContent = showGreeting(name);

//resume register
let hasDownloadedResume = false;

const resumeButton = document.querySelector('.resume-btn');

resumeButton.addEventListener('click', function(){
    if (!hasDownloadedResume){
        alert('Your resume is downloaded successfully!');
        hasDownloadedResume = true;
    }
});

let downloadCount = 0;

function trackDownload() {
    downloadCount++; // increment count
    document.getElementById('download-count').textContent = 
        `Downloaded ${downloadCount} time${downloadCount !== 1 ? 's' : ''}`;
}

//deadline
function daysUntilDeadline(deadline) {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
}


const deadlineElement = document.getElementById('project-deadline');
const deadlineDate = deadlineElement.textContent;

const remainingDays = daysUntilDeadline(deadlineDate);

const daysRemainingElement = document.getElementById('days-remaining');
daysRemainingElement.textContent = remainingDays;

//add prof skill
const addProfessionalBtn = document.getElementById('add-professional-btn');
const newProfessionalInput = document.getElementById('new-professional-skill');
const professionalMessage = document.getElementById('professional-skill-message');

const professionalSkillList = document.querySelectorAll('.Skill-catigory ul')[0];

addProfessionalBtn.addEventListener('click', function() {
    const skill = newProfessionalInput.value.trim();

    if (skill === "") {
        professionalMessage.textContent = "Please enter a skill before adding.";
        professionalMessage.style.color = "red";
        return;
    }

    const newLi = document.createElement('li');
    const newH4 = document.createElement('h4');
    const newP = document.createElement('p');
    newP.textContent = skill;
    newH4.appendChild(newP);
    newLi.appendChild(newH4);
    professionalSkillList.appendChild(newLi);

    professionalMessage.textContent = `"${skill}" added successfully!`;
    professionalMessage.style.color = "green";
    newProfessionalInput.value = "";
});

//add fun skill
const addFunBtn = document.getElementById('add-fun-btn');
const newFunInput = document.getElementById('new-fun-skill');
const funMessage = document.getElementById('fun-skill-message');

const funSkillList = document.querySelectorAll('.Skill-catigory ul')[1];

addFunBtn.addEventListener('click', function() {
    const skill = newFunInput.value.trim();

    if (skill === "") {
        funMessage.textContent = "Please enter a skill before adding.";
        funMessage.style.color = "red";
        return;
    }

    const newLi = document.createElement('li');
    const newH4 = document.createElement('h4');
    const newP = document.createElement('p');
    newP.textContent = skill;
    newH4.appendChild(newP);
    newLi.appendChild(newH4);
    funSkillList.appendChild(newLi);

    funMessage.textContent = `"${skill}" added successfully!`;
    funMessage.style.color = "green";
    newFunInput.value = "";
});

//for upcoming projects
$(document).ready(function() {
    const projects = [
        {
            title: "Personal Portfolio Website",
            description: "A responsive personal website built with HTML, CSS, and JavaScript that showcases my understanding with programming a website.",
            deadline: new Date("2025-12-01"),
            imageURL: "https://via.placeholder.com/300x150?text=Portfolio+Website"
        },
        {
            title: "Simple To-Do App",
            description: "A task management app allowing users to add, mark, and remove tasks while learning DOM manipulation.",
            deadline: new Date("2026-01-15"),
            imageURL: "https://via.placeholder.com/300x150?text=To-Do+App"
        },
        {
            title: "Invisible Maze Game",
            description: "Program a video game using Python that is a maze-solving game but you are only told your current position's 4 cardinal directions if there is a wall or if it's clear.",
            deadline: new Date("2026-03-01"),
            imageURL: "https://via.placeholder.com/300x150?text=Maze+Game"
        }
    ];

    const projectListContainer = $("#project-list");

    // Function to render all projects
    function renderProjects(arr) {
    const $container = $("#project-list");
    $container.empty(); // Clear existing cards

    arr.forEach(proj => {
        const currentDate = new Date();
        currentDate.setHours(0,0,0,0);

        const projDeadline = new Date(proj.deadline);
        projDeadline.setHours(0,0,0,0);

        let statusText = projDeadline > currentDate ? "Ongoing" :
                         projDeadline < currentDate ? "Completed" : "Due Today!";

        const $card = $(`
            <div class="project-card">
                <h4>${proj.title}</h4>
                <p>${proj.description}</p>
                <img src="${proj.imageURL}" alt="${proj.title}">
                <p><strong>Deadline:</strong> ${proj.deadline.toLocaleDateString()}</p>
                <p><strong>Status:</strong> ${statusText}</p>
            </div>
        `);

        $container.append($card);
    });
}

    // Initial render
    renderProjects(projects);

    // Sorting buttons
    $("#sortAsc").click(function() {
        projects.sort((a, b) => a.deadline - b.deadline);
        renderProjects(projects);
    });

    $("#sortDesc").click(function() {
        projects.sort((a, b) => b.deadline - a.deadline);
        renderProjects(projects);
    });
});



//education and experience table
const eduExpData = [
    {
        type: "Elementary School",
        location: "Demugel",
        description: "I participated in the First Lego Robotics League. My team managed to pass the State competition.",
        years: "2011 - 2017 (Kindergarten - 5th Grade)"
    },
    {
        type: "Middle School",
        location: "Signaula",
        description: "I was in the MIT-E Program. This program focuses on Science and Engineering, allowing me to take classes on designing, building, and problem-solving projects.",
        years: "2018 - 2020 (6th - 8th Grade)"
    },
    {
        type: "High School",
        location: "Coconino",
        description: "I was in the High School version of MIT-E known as CIT.",
        years: "2021 - 2024 (9th - 12th Grade)"
    },
    {
        type: "College",
        location: "NAU",
        description: "I am currently studying Computer Science at NAU. I have made programs in both Python and C.",
        years: "2024 - Present"
    }
];

function generateEduExpTable(containerId, data) {
    const container = document.getElementById(containerId);

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'separate';
    table.style.borderSpacing = '1px 40px';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ["Type of School", "Location", "Description", "Years"].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.border = "1px solid #0f0404";
        th.style.padding = "10px";
        th.style.backgroundColor = "#bdc3c7";
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        ["type", "location", "description", "years"].forEach(key => {
            const td = document.createElement('td');
            td.textContent = item[key];
            td.style.border = "1px solid #0f0404";
            td.style.padding = "12px";
            td.style.backgroundColor = "#ffffff";
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    container.appendChild(table);
}

generateEduExpTable("edu-exp-table-container", eduExpData);


//jquiry
$(document).ready(function () {
    // Higher-order function for managing a skill list
    function manageSkills(skillArray, listSelector, inputSelector, buttonSelector) {
        function render() {
            const $list = $(listSelector);
            $list.empty();

            skillArray.forEach((skill, index) => {
                const $li = $(`
                    <li class="skill-item">
                        <span class="skill-text">${skill}</span>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </li>
                `);

                // Edit skill
                $li.find(".edit-btn").on("click", function () {
                    const newSkill = prompt("Edit skill:", skill);
                    if (newSkill && newSkill.trim() !== "") {
                        validateSkill(
                            newSkill.trim(),
                            () => {
                                skillArray[index] = newSkill.trim();
                                render();
                            },
                            (msg) => alert(msg)
                        );
                    }
                });

                // Delete skill
                $li.find(".delete-btn").on("click", function () {
                    $li.slideUp(300, function () {
                        skillArray.splice(index, 1);
                        render();
                    });
                });

                $list.append($li.hide().fadeIn(300));
            });
        }

        // Validation callback
        function validateSkill(skill, onSuccess, onError) {
            if (skillArray.includes(skill)) {
                onError("That skill already exists!");
            } else {
                onSuccess(skill);
            }
        }

        // Add button handler
        $(buttonSelector).on("click", function () {
            const newSkill = $(inputSelector).val().trim();
            if (newSkill === "") {
                alert("Please enter a skill first.");
                return;
            }

            validateSkill(
                newSkill,
                () => {
                    skillArray.push(newSkill);
                    $(inputSelector).val("");
                    render();
                },
                (msg) => alert(msg)
            );
        });

        // Initial render
        render();
    }

    // Arrays
    const professionalSkills = [];
    const funSkills = [];

    // Initialize managers
    manageSkills(professionalSkills, "#pro-skill-list", "#pro-skill-input", "#pro-skill-btn");
    manageSkills(funSkills, "#fun-skill-list", "#fun-skill-input", "#fun-skill-btn");

    // --- Keyboard event listener for skill inputs ---
    const skillMappings = [
        { input: "#pro-skill-input", button: "#pro-skill-btn" },
        { input: "#fun-skill-input", button: "#fun-skill-btn" }
    ];

    skillMappings.forEach(mapping => {
        $(mapping.input).on("keydown", function(e) {
            if (e.key === "Enter") {
                $(mapping.button).click(); // trigger the add button
            } else if (e.key === "Escape") {
                $(mapping.input).val(""); // clear the input
            }
        });
    });
});

//nav bar
$(document).ready(function () {
    // Menu items and corresponding section IDs
    const menuItems = [
        { name: "About Myself", target: "#About_Myself" },
        { name: "Skills", target: "#Skills" },
        { name: "Experience/Education", target: "#Experience-Education" },
        { name: "Projects", target: "#Projects" },
        { name: "Contact Info", target: "#Contact_Info" }
    ];

    // Render menu items dynamically
    const $navList = $("#nav-list");
    menuItems.forEach(item => {
        const $li = $(`<li><a href="#">${item.name}</a></li>`);
        $li.find("a").on("click", function(e) {
            e.preventDefault();
            // Smooth scroll to section
            $("html, body").animate({
                scrollTop: $(item.target).offset().top - 120 // adjust for header height
            }, 600);
        });
        $navList.append($li);
    });
});
