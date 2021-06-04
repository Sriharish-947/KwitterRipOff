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

  var name1 = localStorage.getItem("userName");

  document.getElementById("userName").innerHTML = "Welcome," + " " + name1 + "!";
  
  function logout()
  {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  
  }

  function addRoom()
  {
        roomName = document.getElementById("roomName").value;
  
        firebase.database().ref("/").child(roomName).update({
              purpose : "Room adding Name"
        });
  
        localStorage.setItem("room_name", roomName);
        window.location = "kwitter_page.html"
  }
   
    
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log(roomName); 
        row = "<div class='roomName' id="+Room_names+" onclick='redirectToRoomPage(this.id)' >#"+ Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function  redirectToRoomPage(name)
  {
        console.log(name);
        localStorage.setItem("itemClick", name);
        window.location = "kwitter_page.html";
  }