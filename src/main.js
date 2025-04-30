const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

// // Dummy user data (normally, this would come from a backend)
// const users = [
//   {
//       username: "user1",
//       password: "pass123",
//       name: "John Doe",
//       address: "123 Street, City, Country",
//       favorites: ["Pizza", "Burger", "Pasta"]
//   },
//   {
//       username: "user2",
//       password: "password",
//       name: "Jane Smith",
//       address: "456 Avenue, Town, Country",
//       favorites: ["Salad", "Sandwich", "Tacos"]
//   }
// ];

// // Add event listener to the login button
// document.getElementById("loginButton").addEventListener("click", function () {
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // Check if the credentials match any user
//   const user = users.find(
//       user => user.username === username && user.password === password
//   );

//   if (user) {
//       // Save user info to localStorage for the user page
//       localStorage.setItem("loggedInUser", JSON.stringify(user));

//       // Redirect to user page
//       window.location.href = "user.html";
//   } else {
//       alert("Invalid username or password. Please try again.");
//   }
// });



const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const togglePasswordButton = document.getElementById("toggle-password");
const toggleRegisterPasswordButton = document.getElementById("toggle-register-password");

const hardcodedUsername = "aaravfr";
const hardcodedPassword = "erm123";

function setupShowPasswordToggle(passwordField, toggleButton) {
  toggleButton.addEventListener("click", () => {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleButton.textContent = "❌";
    } else {
      passwordField.type = "password";
      toggleButton.textContent = "👁️";
    }
  });
}

function isValidPassword(password) {
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  return (
    uppercaseRegex.test(password) &&
    numberRegex.test(password) &&
    specialCharRegex.test(password)
  );
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === hardcodedUsername && password === hardcodedPassword) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password!");
  }
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("register-password").value;

  if (!firstName || !lastName || !email) {
    alert("Please fill in all fields.");
    return;
  }

  if (!isValidPassword(password)) {
    alert(
      "Password must contain at least one uppercase letter, one number, and one special character."
    );
    return;
  }

  alert(`Account created successfully!\nWelcome, ${firstName} ${lastName}!`);
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

document.getElementById("register-link").addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

document.getElementById("login-link").addEventListener("click", (event) => {
  event.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

setupShowPasswordToggle(document.getElementById("password"), togglePasswordButton);
setupShowPasswordToggle(document.getElementById("register-password"), toggleRegisterPasswordButton);
