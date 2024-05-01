function Ride_Function() { // Ternary Operators? :
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function vote_function() { //Ternary Operators Challenge
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to" : "You can";
    document.getElementById("Vote").innerHTML = Can_vote + " vote.";
}   

function Vehicle(Make, Model, Year, Color) { //Keywords
    this.Vehicle_Make = Make;//this is to refer to this function()
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");// create a blank array and filled with ifo Vehicle
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a "
        + Erik.Vehicle_Color + "-colored "
        + Erik.Vehicle_Model + " manufactured in "
        + Erik.Vehicle_Year + ".";   
}

function Book(Name, Author, Publisher, Published_Year) {
    this.Book_Name = Name;
    this.Book_Author = Author;
    this.Book_Publisher = Publisher;
    this.Book_Published_Year = Published_Year;
}
var Book1 = new Book("My Mixed Emotions", "Elinor  Greenwood", ["DK", "Penguin Random House"], 2018);
var Book2 = new Book("the Monster at the end of this Book", "Jon Stone", "Golden Books", 2015);
var Book3 = new Book("the Amazing Pop-up Grammar Book", "Jennie Maizels & Kate Petty","Gutton Children's Books", 1996);

function my_function() {
    var booksInfo = "";

    booksInfo += "Book 1: " + Book1.Book_Name + " by " + Book1.Book_Author + ", published by " + Book1.Book_Publisher.join(" and ") + " in " + Book1.Book_Published_Year + ".<br>";
    booksInfo += "Book 2: " + Book2.Book_Name + " by " + Book2.Book_Author + ", published by " + Book2.Book_Publisher + " in " + Book2.Book_Published_Year + ".<br>";
    booksInfo += "Book 3: " + Book3.Book_Name + " by " + Book3.Book_Author + ", published by " + Book3.Book_Publisher + " in " + Book3.Book_Published_Year + ".<br>";

    document.getElementById("BooksInfo").innerHTML = booksInfo;
}

function count_Function() { //nested function;
    document.getElementById("Counting").innerHTML = count();
    function count() {
        var starting_point = 6;
        function Plus_one()
        { starting_point += 1; }
    
        Plus_one();

        return starting_point;
    }
}

function Hello() {
    
    function plusname() {
        var usernm = document.getElementById("Name").value;
        function capitalfirsttL(string) {
            return string.charAt(0).toUpperCase()
                + string.slice(1).toLowerCase();
        }
        var formatted_name = capitalfirsttL(usernm);
        return "Hello, " + formatted_name + "! Click here to see more infomation.";
    }
    document.getElementById("Greeting").innerHTML = plusname();
}