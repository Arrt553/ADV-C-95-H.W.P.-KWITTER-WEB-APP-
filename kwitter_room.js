
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDNdVhgobYjDsppNgUnn3jMcYwmoPq3flY",
    authDomain: "kwitter-c893d.firebaseapp.com",
    databaseURL: "https://kwitter-c893d-default-rtdb.firebaseio.com",
    projectId: "kwitter-c893d",
    storageBucket: "kwitter-c893d.appspot.com",
    messagingSenderId: "265066622452",
    appId: "1:265066622452:web:905526344c3a732540dda1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
