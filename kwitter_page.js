var roomName = localStorage.getItem("roomName");
var userName = localStorage.getItem("userName");

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDlxk6aCBw6pfcJmKgExJaT9UgGanQsyHI",
      authDomain: "lets-chat-app-9fc4e.firebaseapp.com",
      databaseURL: "https://lets-chat-app-9fc4e-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-9fc4e",
      storageBucket: "lets-chat-app-9fc4e.appspot.com",
      messagingSenderId: "892846920979",
      appId: "1:892846920979:web:9926489869cc126d3336e6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function send()
{
      message = document.getElementById("message").value;
      firebase.database().ref(roomName).push({
                  name:userName,messaage:message,like:0});
      document.getElementById("message").value = "";
}