function full_Sentence() { //cancatenate;
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var sentence = "All work and no play makes Johny a dull boy.";
    var Section = sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_search() {
    var upper1 = document.getElementById("upper").value;
    var str = upper1.toUpperCase();
    document.getElementById("upper2").innerHTML = "Hello, " + str;
    var index = upper1.search(/\d/);
    console.log("Index of numbers in the input:", index);
}

function string_Method() { //toString()
    var x = 103;
    document.getElementById("Numbers_to_String").innerHTML = x.toString();
}

function result() { //toPrecision() and toFixed()
    var x = 189563.335496454753;
    var z = x.toPrecision(8);
    var y = x.toFixed(4);
    document.getElementById("Precision").innerHTML = "Precision: " + z + "<br> To Fixed: " + y; 
}