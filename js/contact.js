document.getElementById('myForm').addEventListener('submit', function (event) {
    // Reset previous error messages
    resetErrorMessages();
  
    // Validate Name
    var name = document.getElementById('name').value;
    if (name.trim() === '') {
      showError('nameError', 'Please enter your name');
      event.preventDefault();
      return;
    } else {
      removeError('nameError');
    }
  
    // Validate Email
    var email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
      showError('emailError', 'Pl ease enter a valid email address');
      event.preventDefault();
      return;
    } else {
      removeError('emailError');
    }
  
    // Validate Phone
    var phone = document.getElementById('phone').value;
    if (!isValidPhone(phone)) {
      showError('phoneError', 'Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9');
      event.preventDefault();
      return;
    } else {
      removeError('phoneError');
    }
  
    // If all validations pass, show success message
    alert('Form submitted');
  });
  
  function isValidEmail(email) {
    // Use a simple regex to check for a valid email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
    // Use a regex to check for a valid 10-digit phone number starting with 6, 7, 8, or 9
    var phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  }
  
  function showError(id, message) {
    // Display error message below the input field
    document.getElementById(id).textContent = message;
  }
  
  function removeError(id) {
    // Remove error message
    document.getElementById(id).textContent = '';
  }
  
  function resetErrorMessages() {
    // Reset all error messages
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = '';
    }
  }
  


 // Function to store data
function storeData(name, email, phone, description) {
    const newDataKey = database.ref().child('users').push().key;

    // Set data in the 'users' node
    database.ref('users/' + newDataKey).set({
        name: name,
        email: email,
        phone: phone,
        description: description
    });
}

   // Reference to the database
   const database = firebase.database();

const firebaseConfig = {
    apiKey: "AIzaSyCR5Fhxp0HfBDZhr57a9Eypd-6Ga3EAIdA",
    authDomain: "snjdistribution-27be7.firebaseapp.com",
    databaseURL: "https://snjdistribution-27be7-default-rtdb.firebaseio.com/",
    projectId: "snjdistribution-27be7",
    storageBucket: "snjdistribution-27be7.appspot.com",
    messagingSenderId: "515407945050",
    appId: "1:515407945050:web:6e97813f97e0ff99bb2763"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore();


 
