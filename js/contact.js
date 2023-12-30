const firebaseConfig = {
  apiKey: "AIzaSyAbn7TGJJMczFNQTldst038yaIiTqSZTbQ",
  authDomain: "snjdistribution-dd246.firebaseapp.com",
  databaseURL: "https://snjdistribution-dd246-default-rtdb.firebaseio.com",
  projectId: "snjdistribution-dd246",
  storageBucket: "snjdistribution-dd246.appspot.com",
  messagingSenderId: "523739106380",
  appId: "1:523739106380:web:f2486a4f22109e471fb8e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const ref = database.ref("databasestorage")

var form = document.getElementById('contactForm');
var alert = document.querySelector(".alert");
var shorError = document.querySelector(".errorMessage");
var errorMail = document.querySelector(".errorMessagemail");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  shorError.textContent = ""; 
  errorMail.textContent = "";

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const description = document.getElementById('description').value;


  if (!isValidPhone(phone)) {
    shorError.innerHTML = "Enter a valid 10-digit phone number starting with 6, 7, 8, or 9";
    return;
  }

  if (!isValidEmail(email)) {
    errorMail.innerHTML = "Please enter a valid email address";
    return;
  }


  ref.push({
    name: name,
    email: email,
    phone: phone,
    description: description
  })
  alert.style.display = "block"

  setTimeout(() => {
    alert.style.display = "none"
    // Clear text content after successful submission
    shorError.textContent = "";
    errorMail.textContent = "";
  }, 2000)
  form.reset()
});

function isValidPhone(phone) {
  var phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
