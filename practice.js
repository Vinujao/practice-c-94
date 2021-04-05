var firebaseConfig = {
    apiKey: "AIzaSyCuSuD8Pp4-UxgqPxNyqykwuobmnR266kQ",
    authDomain: "warp-1-36e0b.firebaseapp.com",
    databaseURL: "https://warp-1-36e0b-default-rtdb.firebaseio.com",
    projectId: "warp-1-36e0b",
    storageBucket: "warp-1-36e0b.appspot.com",
    messagingSenderId: "1021895001014",
    appId: "1:1021895001014:web:cf484ac91248c5804e3717"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addroom() {
    roomname=document.getElementById("roominput").value 
    firebase.database().ref("/").child(roomname).update({
        status:"Roomname created"
    })
    document.getElementById("roominput").value=""
}
//Adding data to the main folder//
function sendtext() {
   username=document.getElementById("nameinput").value
   text=document.getElementById("msginput").value
   firebase.database().ref(roomname).push({
       user:username,
       Message:text
   }) 
}