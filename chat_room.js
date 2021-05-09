// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCAj09ct7azJUf3C4r6LziZF41OHABdA1w",
    authDomain: "lets-chat-app-affa2.firebaseapp.com",
    projectId: "lets-chat-app-affa2",
    storageBucket: "lets-chat-app-affa2.appspot.com",
    messagingSenderId: "570441961164",
    appId: "1:570441961164:web:4cf443fa3cc65c9c587c69"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
