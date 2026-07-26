/* DARKMODE */

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }

});


/* TIMER */

const eventDate = new Date("October 20, 2026 09:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;
    }

    days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    minutes.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    seconds.textContent = Math.floor((distance % (1000 * 60)) / 1000);

}

updateCountdown();

setInterval(updateCountdown, 1000);



/* COUNTERS */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 120;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.innerText = Math.floor(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    if (target >= 100000) {

                        counter.innerText = "₹1,00,000+";

                    } else {

                        counter.innerText = target + "+";

                    }

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => counterObserver.observe(counter));



/* FROM VALIDATION*/

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll("input");

    let valid = true;

    inputs.forEach(input => {

        if (input.hasAttribute("required") && input.value.trim() === "") {

            input.style.border = "2px solid red";

            valid = false;

        } else {

            input.style.border = "1px solid #ddd";

        }

    });

    const email = form.querySelector('input[type="email"]');

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email.value)) {

        email.style.border = "2px solid red";

        alert("Please enter a valid email address.");

        return;

    }

    const phone = form.querySelector('input[type="tel"]');

    if (phone.value.length < 10) {

        phone.style.border = "2px solid red";

        alert("Please enter a valid phone number.");

        return;

    }

    if (valid) {

        alert("🎉 Registration Successful! (Frontend Demo)");

        form.reset();

    }

});



/* REVEAL ANIMATION*/

const revealElements = document.querySelectorAll(
    ".card, .timeline-item, .prize-card, .gallery-grid img, .sponsor-card"
);

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.transition = "all .7s ease";

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(el => revealObserver.observe(el));



/* NAVIGATION LINK*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* NAVBAR */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";

    } else {

        navbar.style.boxShadow = "0 4px 18px rgba(0,0,0,0.08)";

    }

});



/*HERO */

const button = document.querySelector(".btn");

button.addEventListener("click", function () {

    button.style.transform = "scale(0.96)";

    setTimeout(() => {

        button.style.transform = "scale(1)";

    }, 120);

});