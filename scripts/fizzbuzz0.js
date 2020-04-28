function displayContent() {
    //Get the user input name by their ids
    var firstname = document.getElementById("firstname").value;
    var middleInitial = document.getElementById("middleinitial").value;
    var lastname = document.getElementById("lastname").value;
    //concatenate the new string
    var newGreeting = "Welcome to Onix Fizzbuzz 0 - part 1, " + firstname + " " + middleInitial + ". " + lastname + "!";
    //assign the new string to previous string
    document.getElementById("greeting").innerHTML = newGreeting;
    //create the varibles for the loop
    var newText = "";
    var twoWords = "Cool Cats!";
    var demo = document.getElementById("fizzbuzz");//get the div for the loop display
    for(var i = 0; i < 126; i++) {
        newText += i + ". " + twoWords + "<br>";
    }
    demo.innerHTML = newText;
    //end of function
}