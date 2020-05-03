//Create checkDivision function with two number param
function checkDivision(firstNumber, dividerNum) {
    let divisible = false;
    if((firstNumber % dividerNum) === 0) {
        return divisible = true; 
    }
}


// create displayOutput function with checkDivision inside
function displayOutput() {
    let num1 = document.getElementById("num1").value;
    let divNum = document.getElementById("num2").value;
    let fizzbuzzOutput = document.getElementById("fizzbuzz");
    if (checkDivision(num1, divNum) == true) {// call the checkDivision function and pass in the value for num1 and divNum(user input)
        fizzbuzzOutput.innerHTML = num1 + " is divisible by " + divNum;
    } else {
        fizzbuzzOutput.innerHTML = num1 + " is not divisible by " + divNum;
    }
}
