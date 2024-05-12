function Color_Function() {
    var Color_output;
    var Colors = document.getElementById("Color_Input").value.trim().toLowerCase();
    var Color_string = " is a great color.";
    switch (Colors) {
        case "red": Color_output = "Red" + Color_string;
            break;
        case "orange": Color_output = "Orange" + Color_string;
            break;
        case "yellow": Color_output = "Yellow" + Color_string;
            break;
        case "green": Color_output = "Green" + Color_string;
            break;
        case "blue": Color_output = "Blue" + Color_string;
            break;
        case "purple": Color_output = "Purple" + Color_string;
            break;
        case "brown": Color_output = "Brown" + Color_string;
            break;
        default:
            Color_output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("ID_Name").innerHTML = Color_output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

const canvas = document.getElementById("id_name");
const ctx1 = canvas.getContext("2d");

ctx1.fillStyle = "red";
ctx1.fillRect(50, 50, 200, 100);


const myCanvas = document.getElementById("myCanvas");
const ctx2 = myCanvas.getContext("2d");
const grd = ctx2.createLinearGradient(100, 100, 100, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(0.5, "cyan");
grd.addColorStop(1, "white");

ctx2.fillStyle = grd;
ctx2.fillRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);