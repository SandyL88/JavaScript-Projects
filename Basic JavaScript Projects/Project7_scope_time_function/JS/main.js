var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}

function Add_numbers_2() {
    document.write(x + 100+"<br>");
}

function Add_numbers_3() {
    y = 12;
    document.write(y + 3 + "<br>");
}
function Add_numbers_4() {
    document.write(y + 2);
}

function Add_numbers_5() {
    z = 10;
    console.log(18 + z+"<br>");
}

function Add_numbers_6() {
    console.log(12 + z);
}
Add_numbers_1();
Add_numbers_2();
Add_numbers_3();
Add_numbers_4();
Add_numbers_5();
Add_numbers_6();

if (1 < 2) {
    document.write("The left number is smaller than the number on the reight.")
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML="How are you today?"
    }
}

function get_month() { //new Date().getMonth()
    if (new Date().getMonth() <=5 && new Date().getDate()<4) {
        document.getElementById("Reminder").innerHTML = "You only have 2 days!"
    }
}

function Age_Function() { //else
    Age = document.getElementById("Age").value;
    if (Age > 18) {
        vote = "You are old enough to vote!";
    }
    else {
        vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = vote;
}

function Username() { //else
    username = document.getElementById("username").value;
    if (username == "admin") {
        next = "password please.";
    }
    else {
        next = "Wrong username.";
    }
    document.getElementById("value").innerHTML = next;
}

function Time_function() { //elseif
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}