document.getElementById("button").addEventListener("click", demonstrate);

function demonstrate() {
    var name = prompt("What is your name?");
    alert("Hello " + name);
    var cat = prompt("Do you have a cat " + name + "?" + " Please enter yes or no");
    if (cat === "yes") {
        alert("congratulation " + name + " you are part of the 42.7 million cat owners in america");
    }
    else {
        alert("That's ok not everyone like cats");
    }
}

