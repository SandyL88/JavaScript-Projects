function displayLetterByLetter() {
    var textElement = document.getElementById("text");
    var text = textElement.innerText;
    var newText = "";

    for (var i = 0; i < text.length; i++){
        newText+="<span class='letter'>"+text[i]+"</span>"
    }

    textElement.innerHTML = newText;

    var spans = textElement.getElementsByTagName("span");
    for (var i = 0; i < spans.length; i++){
        fadeIn(spans[i], i * 100); //100 milliseconds delay between each letter;
    }
}

function fadeIn(element, delay) {
    setTimeout(function () {
        element.style.opacity = "1";
    }, delay);
    
}