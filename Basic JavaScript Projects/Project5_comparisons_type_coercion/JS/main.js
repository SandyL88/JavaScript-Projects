document.write(typeof "word");
document.write("----typeof \"word\"; ");
document.write(typeof 3);
document.write("-------typeof 3; ");
document.write("10" + 3);
document.write("------\"10\" + 3; ");
document.write(2E310);
document.write("-------2E310; ");
document.write(-2E310);
document.write("-------2E310; ");
document.write(10 < 15);
document.write("----------10 < 15; ");
document.write(10 < 5);
document.write("----10 < 5; ");
document.write(10 == 5 + 5);
document.write("----10 == 5 + 5; ");
x = 10;
y = "10";
document.write(x === y);
document.write("-----x === y; ");
A = 10;
document.write(x === A);
document.write("<br>");
B = "10";
document.write(y === B);
document.write("<br>");
C = "ten";
document.write(B === C);
document.write("<br>");
document.write(5 > 2 && 10 > 4);
document.write("-------5 > 2 && 10 > 4; ");
document.write(5 > 10 && 10 > 4);
document.write("------5 > 10 && 10 > 4; ");
document.write(5 > 10 || 10 > 4);
document.write("---------5 > 10 || 10 > 4; ");
document.write(5 > 10 || 10 > 20);
document.write("---------5 > 10 || 10 > 20; ");

function my_Function() {
    var results = [
        0 / 0,
        isNaN("This is a string."),
        isNaN(007)
    ];
    document.getElementById("Test").innerHTML = results;

}

console.log(5 + 9); // to be seen in console; to open console:
//Clicking “F12” and then clicking on “Console,”

//Clicking the three upright dots in the top - right of the browser and then clicking on “More tools.” Finally, click “Developer tools” and then click “Console”, or

//Type Ctrl + Shift + I and then click on “Console”.
console.log(5 > 9);

function not_function() {
    var not_operator = [
        !(20 > 10),
        !(5 > 10)
    ];
    document.getElementById("Not").innerHTML = not_operator;

}