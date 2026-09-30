/* ===============================
   MOBILE NAVBAR
================================ */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* ===============================
   DARK / LIGHT THEME
================================ */

const themeBtn = document.getElementById("themeBtn");


/* Load saved theme */

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


/* Change theme */

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* ===============================
   PROJECT SEARCH + FILTER
================================ */

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const projectCards =
    document.querySelectorAll(".project-card");

const noResults =
    document.getElementById("noResults");


function filterProjects() {

    const searchText =
        searchInput.value.toLowerCase();

    const selectedCategory =
        categoryFilter.value;


    let visibleProjects = 0;


    projectCards.forEach(function (card) {

        const title =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        const description =
            card.querySelector("p")
                .textContent
                .toLowerCase();

        const category =
            card.dataset.category;


        const matchesSearch =
            title.includes(searchText) ||
            description.includes(searchText);


        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;


        if (matchesSearch && matchesCategory) {

            card.style.display = "block";

            visibleProjects++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleProjects === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* Search */

searchInput.addEventListener(
    "input",
    filterProjects
);


/* Category filter */

categoryFilter.addEventListener(
    "change",
    filterProjects
);


/* ===============================
   CONTACT FORM VALIDATION
================================ */

const contactForm =
    document.getElementById("contactForm");


const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");


const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Clear previous errors */

        nameError.textContent = "";

        emailError.textContent = "";

        messageError.textContent = "";

        formMessage.textContent = "";


        let isValid = true;


        /* Name validation */

        const name =
            nameInput.value.trim();


        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;

        } else if (name.length < 2) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            isValid = false;

        }


        /* Email validation */

        const email =
            emailInput.value.trim();


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            isValid = false;

        } else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email.";

            isValid = false;

        }


        /* Message validation */

        const message =
            messageInput.value.trim();


        if (message === "") {

            messageError.textContent =
                "Please enter a message.";

            isValid = false;

        } else if (message.length < 10) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            isValid = false;

        }


        /* Success */

        if (isValid) {

            formMessage.textContent =
                "Message submitted successfully!";

            formMessage.style.color =
                "green";


            contactForm.reset();

        }

    }
);