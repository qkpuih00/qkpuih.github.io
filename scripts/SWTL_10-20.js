document.getElementById("demonstrate").addEventListener("click", demonstrate);

function demonstrate() {
    var repeat = prompt("Type something and it will repeat 5 time");
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            alert(repeat);
            break;
        }
    }
}