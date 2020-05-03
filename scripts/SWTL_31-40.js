function calculate()
{
        let userChoice = document.getElementById("option").value;
        let numOfHours = document.getElementById("hours").value;
        numOfHours = parseFloat(numOfHours);
        let total = 0.0;
        var coupon = Math.floor(Math.random() * 6);
        let newTotal = 0.0;
        switch(userChoice.toLowerCase()) {
            case "normal":
                total = numOfHours * 13.00;
                total = total.toFixed(2)
                break;
            case "special":
                total = numOfHours * 15.00;
                total = total.toFixed(2)
                break;
            case "delux":
                total = numOfHours * 18.00;
                total = total.toFixed(2)
                break;
            default:
                total = " invalid! enter a care level"
        }
        newTotal = total - coupon;
        document.getElementById("result").innerHTML = "Your total after a $" + coupon + " Dollar deduction is $"+ newTotal;
}
