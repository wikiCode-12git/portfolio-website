// Portfolio JavaScript will go here 
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");
const revealElements = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");


const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        
        entry.target.classList.add("active");

        observer.unobserve(entry.target);
      }
    });
  
});

revealElements.forEach(function(section) {
  observer.observe(section);
});
menuToggle.addEventListener("click", function () {

  navigation.classList.toggle("show");

  if ( navigation.classList.contains("show")) {
     menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
  
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function(card, index) {
  card.style.transitionDelay =   `${index * 0.2}s`;
});

window.addEventListener("scroll", function() {
  let currentSection = "";

  sections.forEach(function(section) {

    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute("id");
    }

  });

  navLinks.forEach(function(link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }

  });

});
// get form using JavaScript
  const contactForm = document.querySelector("#contact-form");
  const formMessage = document.querySelector("#form-message");
  const submitButton = document.querySelector("#submit-button");

  contactForm.addEventListener("submit", function(event) {

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    event.preventDefault();

    submitButton.textContent ="Sending...";
    submitButton.disabled = true;
    // store form data using object for groups
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };

    console.log(formData);

    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
       },
      body: JSON.stringify(formData)
      // backend response to the browser
    }).then(response => response.text())
    .then(result => {
        formMessage.textContent = result;
       contactForm.reset();

       submitButton.textContent = "Send Message";
       submitButton.disabled = false;
      })

      .catch(error => {
        console.log("Error:", error);

        formMessage.textContent = 
        "Sorry, your message could not be sent. Please try again.";

        submitButton.textContent = "Send Message";
        submitButton.disabled = false;
      });
  });

  