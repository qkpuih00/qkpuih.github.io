function displayContent() {
    let firstname = document.getElementById("firstname").value,
        middleInitial = document.getElementById("middleinitial").value,
        lastname = document.getElementById("lastname").value,
        newGreeting = middleInitial + " " + firstname + " " + lastname;
        document.getElementById("greeting").innerHTML = newGreeting;
    
    let personalB = document.getElementById("personalB").value,
        professionalB = document.getElementById("professionalB").value,
        academicB = document.getElementById("academicB").value,
        computer = document.getElementById("computer").value,
        courses = document.getElementById("courses").value,
        remeberBy = document.getElementById("rememberBy").value,
        extras = document.getElementById("extras").value,
        newForm = "<strong>Personal Background: </strong>" + personalB + 
        "<br><strong>Professional Background: </strong>" + professionalB + 
        "<br><strong>Academic Background: </strong>" + academicB + 
        "<br><strong>Computer Platform: </strong>" + computer + 
        "<br><strong>Courses: </strong>" + courses + 
        "<br><strong>One thing to remember me by: </strong>" + remeberBy +
        "<br><strong>Anything else: </strong>" + extras;
        document.getElementById("introduction_form").innerHTML = newForm;
}