function Addition_function() {
    var A = parseFloat(document.getElementById("inputA").value);
    var B = parseFloat(document.getElementById("inputB").value);
    var addition = A + B;
    document.getElementById("MathResult").innerHTML = A + " + " + B + " = " + addition;
}

function Subtraction_function() {
    var A = parseFloat(document.getElementById("inputA").value);
    var B = parseFloat(document.getElementById("inputB").value);

    var subtraction = A - B;
    document.getElementById("MathResult").innerHTML = A + " - " + B + " = " + subtraction;
}

function Multiplication_function() {
    var A = parseFloat(document.getElementById("inputA").value);
    var B = parseFloat(document.getElementById("inputB").value);

    var multiplication = A * B;
    document.getElementById("MathResult").innerHTML = A + " * " + B + " = " + multiplication;
}

function Division_function() {
    var A = parseFloat(document.getElementById("inputA").value);
    var B = parseFloat(document.getElementById("inputB").value);

    var division = A / B;
    document.getElementById("MathResult").innerHTML = A + " / " + B + " = " + division;
}

function Modulus_Operator() {
    var A = parseFloat(document.getElementById("inputA").value);
    var B = parseFloat(document.getElementById("inputB").value);

    var remainder = A % B;
    document.getElementById("MathResult").innerHTML = A + " % " + B + " = " + remainder + "<br>" + "The remainder of A devided by B is " + remainder;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

function negation() {
    var A = parseFloat(document.getElementById("inputA").value);
    var B = parseFloat(document.getElementById("inputB").value);

    var negationA = -A;
    var negationB= -B
    document.getElementById("MathResult").innerHTML = "The negation of A is " + negationA + "<br>The negation of B is " + negationB; 
}

function IncreDecre() {
    var x = 5;
    x++;
    document.getElementById("output").innerHTML += "5 after increment: " + x + "<br>";

    var y = 5.25;
    y--;
    document.getElementById("output").innerHTML += "5.25 decrement: " + y;
}

function randomnumber()  { 
    var randomnums = [];

    for (var i = 0; i < 7; i++){    //select 7 random numbers;
        var randomnum = Math.floor(Math.random() * 50);     //select numers between 0-50;
        randomnums.push(randomnum); //add numbers to the array;
    }
    document.getElementById("RandomNums").innerHTML = "Here are 7 random numbers " + randomnums.join(" "); 
    // .join(",")  is used to concatenate all the elements of an array into a single string; 
    //comma is used as the separator;
}