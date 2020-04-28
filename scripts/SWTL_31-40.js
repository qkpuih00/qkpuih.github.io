//get element by id demonstrate button
document.getElementById("demonstrate").addEventListener("click", demonstrate);

function demonstrate() {
    let matchingStates = ["north carolina", "south carolina", "georgia", "texas", "california"];
    var state = prompt("What is your state?");
    //input validation using while loop
    while(state === "") {
        alert("Invalid input! please enter a state!");
        state = prompt();
    }
    state = state.toLowerCase();
    for (let i = 0; i < matchingStates.length; i++) {
        if(matchingStates.indexOf(state)>-1) {// idexOf() method test if the value in state match any value in matching state array
            alert("Good news! there is a location at " + state);
            var menu = alert("Onix care plan menu: Normal = $13.00hr, Special = $15.00hr, Delux = $18.00hr");
            var userChoice = prompt("Type in a desired plan price from the menu: 13.00, 15.00, or 18.00");
            var hourNum = prompt("Enter the number of hours for your cat sitting");
            userChoice = parseFloat(userChoice);
            hourNum = parseFloat(hourNum);
            var total = userChoice * hourNum;
            total = total.toFixed(2);
            alert("Your total cost came to $" + total + " dollar.");
            var coupon = Math.floor(Math.random() * 6);
            alert("A random coupon ranging from $0 - $5 will be deducted from your total")
            var newTotal = total - coupon;
            newTotal = newTotal.toFixed(2);
            alert("Your new total after a $" + coupon + " dollar deduction is $" + newTotal + " dollar.");
        } else {
            alert("Sorry! There are no location at " + state);
        }
        break;
    }


}