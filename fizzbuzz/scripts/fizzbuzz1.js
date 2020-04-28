function displayWords() {
    //get id from form and assign to varibles
    var firstWord = document.getElementById("word1").value;
    var secondWord = document.getElementById("word2").value;
    var bothWord = firstWord + " " + secondWord;// combine both variable for the numbers that are divisible by both 3 and 5
    var fizzBuzz = document.getElementById("fizzbuzz");//where the words will display
    var newPhrase = "";//container for the new phrases

    for(var i = 1; i < 141; i++) {
        if(i % 3 === 0 && i % 5 === 0) {//test this first to ensure that divsisble by 5 or three is not true
            newPhrase += i + ". " + bothWord + "!<br>";
        } else if(i % 3 === 0) {
            newPhrase += i + ". " + firstWord + "!<br>";
        } else if(i % 5 === 0) {
            newPhrase += i + ". " + secondWord + "!<br>";
        } else {
            newPhrase += i + ". <br>";
        }
    }
    fizzBuzz.innerHTML = newPhrase;
    //end of function
}