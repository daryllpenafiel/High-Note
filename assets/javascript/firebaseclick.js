$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyDXIYL1fyZVryDK-A-0eBSO9IgIgFZYldw",
        authDomain: "high-note-e6f67.firebaseapp.com",
        databaseURL: "https://high-note-e6f67.firebaseio.com",
        projectId: "high-note-e6f67",
        storageBucket: "high-note-e6f67.appspot.com",
        messagingSenderId: "1045651609392"
    };

    firebase.initializeApp(config);

    var database = firebase.database();
    var databaseRef = firebase.database().ref();
    var fireclickCount = 0;

    databaseRef.on("value", function (snapshot) {
        fireclickCount = snapshot.val().eow;
        console.log(fireclickCount);
        $("#fire-clicks").text(fireclickCount);
    })

    $("#fire-button").on("click", function () {

        console.log('click');
        console.log(fireclickCount);
        event.preventDefault();
        fireclickCount++;
        databaseRef.update({
            eow: fireclickCount
        });
    })

})