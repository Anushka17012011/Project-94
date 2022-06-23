 var  firebaseConfig = {
    apiKey: "AIzaSyDNNU78cDMBRITA0LGTeLZkRUmp5fTthe8",
    authDomain: "letschat-1904e.firebaseapp.com",
    databaseURL:"https://console.firebase.google.com/u/0/project/letschat-1904e/database/letschat-1904e-default-rtdb/data/~2F",
    projectId: "letschat-1904e",
    storageBucket: "letschat-1904e.appspot.com",
    messagingSenderId: "875574536087",
    appId: "1:875574536087:web:6be89bfefdb819531406d2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
        
   //End code
   });});}
getData();
