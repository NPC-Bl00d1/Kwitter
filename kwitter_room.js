var firebaseConfig = {
      apiKey: "AIzaSyDSJcds4MfsJws0hUXJbF2cxV746JneZQw",
      authDomain: "inazuma-pretty.firebaseapp.com",
      databaseURL: "https://inazuma-pretty-default-rtdb.firebaseio.com",
      projectId: "inazuma-pretty",
      storageBucket: "inazuma-pretty.appspot.com",
      messagingSenderId: "196428017978",
      appId: "1:196428017978:web:986db6709393ef04b1e003",
      measurementId: "G-1FWJ0NC05F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    




var real_username = localStorage.getItem("username");
document.getElementById("welcome_unsername").innerHTML = "Welcome, " + real_username;





function addRoom(){

      roomname = document.getElementById("add_room_input").value;

firebase.database().ref("/").child(roomname).update({

purpose: "adding roomname"

});

localStorage.setItem("roomnname", roomname);

window.location="kwitter_page.html";

}











function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);

row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+ Room_names +"</div><hr>";

document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirect(name)
{
  console.log(name);
  localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";
}


function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("roomname");
    window.location = "index.html";
}
