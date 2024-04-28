function My_First_Function() {
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

document.getElementsByTagName("title")[0].innerHTML = "Javascript Functions";

