

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
  
  // var alert = document.querySelector(".alert");
  
  document.getElementById('myForm').addEventListener('submit', (event) => {
    resetErrorMessages();
    event.preventDefault();
    const name = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;
  
    if (name.trim() === '') {
      showError('nameError', 'Please enter your name');
      event.preventDefault();
      return;
    } else {
      removeError('nameError');
    }
  
    if (!isValidEmail(email)) {
      showError('emailError', 'Please enter a valid email address');
      event.preventDefault();
      return;
    } else {
      removeError('emailError');
    }
  
    if (!isValidPhone(phone)) {
      showError('phoneError', 'Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9');
      event.preventDefault();
      return;
    } else {
      removeError('phoneError');
    }
  
    if (description.trim() === '') {
      showError('descriptionError', 'Please provide a brief description of your requirement');
      event.preventDefault();
      return;
    } else {
      removeError('descriptionError');
    }
  
    ref.push({
      name: name,
      email: email,
      message: message,
      description: description
    })
    alert.style.display = "block"
  
    setTimeout(() => {
      alert.style.display = "none"
    }, 2000)
    form.reset()
  });
  
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
    var phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  }
  
  function showError(id, message) {
    document.getElementById(id).textContent = message;
  }
  
  function removeError(id) {
    document.getElementById(id).textContent = '';
  }
  
  function resetErrorMessages() {
    var errorElements = document.getElementsByClassName('errormessage');
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = '';
    }
  }