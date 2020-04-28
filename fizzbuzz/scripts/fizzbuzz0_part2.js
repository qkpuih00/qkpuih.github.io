function displayContent() {
    //Get the user input name by their ids
    var firstname = document.getElementById("firstname").value;
    var middleInitial = document.getElementById("middleinitial").value;
    var lastname = document.getElementById("lastname").value;
    //concatenate the new string
    var newGreeting = "Welcome to Onix Fizzbuzz 0 - part 2, " + firstname + " " + middleInitial + ". " + lastname + "!";
    //assign the new string to previous string
    document.getElementById("greeting").innerHTML = newGreeting;
    //create the varibles for the loop
    var twoWords = "Cool Cats!";
    var demo = document.getElementById("fizzbuzz");//get the div for the loop display
    var userInput = prompt("How high would you like to count, " + firstname + "?");
    userInput = parseInt(userInput);
    for(var i = 1; i < userInput + 1; i++) {
        if(i % 2 == 0) {
            demo.innerHTML += i + " - even " + twoWords + "<br>";
        } else {
            demo.innerHTML += i + " - odd " + twoWords + "<br>";
        }
    }
    //end of function
}