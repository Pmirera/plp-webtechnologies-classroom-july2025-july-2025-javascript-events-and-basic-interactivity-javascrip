// 🌙 Dark/Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Counter Game
let counter = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

// ❓ FAQ Toggle
const faqToggles = document.querySelectorAll(".faq-toggle");
faqToggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const answer = toggle.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// 📝 Form Validation
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form submission

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = " Name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = " Invalid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = " Min 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // If all valid
  if (valid) {
    document.getElementById("successMsg").textContent = "✅ Registration successful!";
    signupForm.reset();
  }
});
