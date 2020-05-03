//Create checkDivision function with two number param
function checkDivision(counter, num) {
    let divisible = false;
    if((counter % num) === 0) {
        return divisible = true; 
    }
}

function displayOutput() {
    //Get the user input name by their ids
    var firstname = document.getElementById("firstname").value;
    var middleInitial = document.getElementById("middleInitial").value;
    var lastname = document.getElementById("lastname").value;
    var newGreeting = "Welcome to Onix Fizzbuzz 3, " + firstname + " " + middleInitial + ". " + lastname + "!";
    document.getElementById("greeting").innerHTML = newGreeting;
    //End of name display
    
    //Get the user first second and third number and word by ids
    let firstNum = document.getElementById("num1").value,
        secondNum = document.getElementById("num2").value,
        thirdNum = document.getElementById("num3").value,
        firstWord = document.getElementById("firstWord").value,
        secondWord = document.getElementById("secondWord").value,
        thirdWord = document.getElementById("thirdWord").value,
        defaultWord = document.getElementById("defaultWord").value,

    //Get total counter from the user
        endCounter = document.getElementById("endCount").value;
    //create the varibles for the output
        var demoOuput = document.getElementById("fizzbuzz");

    //create the loop
    // Each if call on checkDivision function and pass in the number parameter
        for(let i = 1; i <= endCounter; i++) {
            if((checkDivision(i, firstNum) && checkDivision(i, secondNum) && checkDivision(i, thirdNum)) == true) {
                demoOuput.innerHTML += i + " " + firstWord + " " + secondWord + " " + thirdWord + "!";
            } else if((checkDivision(i, firstNum) && checkDivision(i, secondNum)) == true) {
                demoOuput.innerHTML += i + " " + firstWord + " " + secondWord;
            } else if((checkDivision(i, firstNum) && checkDivision(i, thirdNum)) == true) {
                demoOuput.innerHTML += i + " " + firstWord + " " + thirdWord;
            } else if((checkDivision(i, secondNum) && checkDivision(i, thirdNum)) == true) {
                demoOuput.innerHTML += i + " " + secondWord + " " + thirdWord;
            } else if(checkDivision(i, firstNum) == true) {
                demoOuput.innerHTML += i + " " + firstWord;
            } else if(checkDivision(i, secondNum) == true) {
                demoOuput.innerHTML += i + " " + secondWord;
            } else if(checkDivision(i, thirdNum) == true) {
                demoOuput.innerHTML += i + " " + thirdWord;
            }else {
                demoOuput.innerHTML += i + " " + defaultWord;
            }
            demoOuput.innerHTML+="<br>\n";
        }
        //end of loop
}