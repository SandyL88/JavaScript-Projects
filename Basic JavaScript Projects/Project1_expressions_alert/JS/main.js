/*window.alert("Hello, World!")*/

/*alert("Hello, World!")*/

document.write("This is to try document.write.")

var A = "This is the biginning of the string."
document.write(A)

var B = "and this is the end of the srting."
var C = "Hi, C!"
window.alert(C)

document.write("<br> Lisa told Bart, \"Know it off, Bart, or I'll tell dad!\" <br> \"Eat my shorts!\" Bart responded.<br>");

document.write("<br>\"Be who you are and say what you feel,"
    + "because those who mind don\'t matter and those who matter don\'t mind.\""
    + "-Dr. Seuses");

document.write("<br>" + A + " " + B + "<br>") //after"<br> there is a + sign

var family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine",
    Daughter = "Penny", Son = "Eorro"; //multiple variables
document.write(Son)

document.write("<br>" + (5 + 2)+"<br>"); //if write an expression in a sentence, include a ()

function My_First_Function() {
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}
