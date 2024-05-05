function count_to_ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "</br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function for_loop() {
    for (y = 0; y < instruments.length; y++){
        content += instruments[y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

function array_function() {
    var cat_picture = [];
    cat_picture[0] = "sleeping";
    cat_picture[1] = "playing";
    cat_picture[2] = "eating";
    cat_picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + cat_picture[3] + ".";
}

function constant_function() {
    const Musical_instrument = { type: "guitar", brand: "Fender", color: "black" };
    Musical_instrument.color = "blue";
    Musical_instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        " "+Musical_instrument.color+" "+Musical_instrument.type + " was " + Musical_instrument.price;
}

const x = 44;
//x = 22;
document.write("<br>"+x+"<br>");

var z = 65;
z = 66;
document.write(z);

var m = 88;
document.write("<br>"+m);
{
    let m = 54;
    document.write("<br>" + m);
}
document.write("<br>" + m);

var n = 56;
document.write("<br>" + n);
{
    var n = 95;
    document.write("<br>" + n);
}
document.write("<br>" + n+"<br>");

let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    blank: " ",
    description: function () { return "The car is a " + this.year + this.blank+this.color + this.blank+this.model+"."; }
};
document.getElementById("car_object").innerHTML = car.description();

let target = 8;
for (let i = 0; i < 10; i++){
    if (i % 3 === 0) {
        continue;
    }
    if (i === target) {
        console.log("Found the target:" + target);
        break;

    }
    console.log(i);
}