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

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;
    
    ref.push({
        name:name,
        email:email,
        phone:phone,
        description:description
    })
    alert.style.display="block"

    setTimeout(()=>{
        alert.style.display="none"
    },2000)
    form.reset()
})

function myFunction(){
    alert("Working");
  }



