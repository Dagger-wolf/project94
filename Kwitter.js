var firebaseConfig = {
    apiKey: "AIzaSyD_YA2-Uyod9QJbGkMcunXTYIH98_NHvKg",
    authDomain: "kwitter-91fd1.firebaseapp.com",
    databaseURL: "https://kwitter-91fd1-default-rtdb.firebaseio.com",
    projectId: "kwitter-91fd1",
    storageBucket: "kwitter-91fd1.appspot.com",
    messagingSenderId: "494135168609",
    appId: "1:494135168609:web:4f9739b9a29214b768e420"
  };
  
firebase.initializeApp(firebaseConfig);

function addUser(){

    username = document.getElementById("add_user").value;
    firebase.database().ref("/").child(username).update({

      purpose:"adddddddddddddddddddddddddddddddddiiiiiiiiiiiiing aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa UUUUUUUUUUUUUUUUUUUSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"

    })
    window.location = Kwitter.html;

}

