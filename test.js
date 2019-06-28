/*wow comments */
var today = new Date();
var hour = today.getHours();
var greeting = "";
if (hour <12) {
	greeting = "Good morning";
} else if (hour < 18){
	greeting = "Good afternoon";
} else {
	greeting = "Good evening";
}
document.write(greeting + "<br />");
var toChange = document.getElementById("change");
toChange.textContent = "I have changed";

var colours = new Array("White", "Black", "Blue","Red");
document.write(colours[0] + " " + colours[1]);

function UpdateThis(id,inputStr){
	var el = document.getElementById(id);
	el.textContent = inputStr;
}

UpdateThis("update", "hello");

var area = (function() {
	var width = 2;
	var height = 3;
	return width * height;
}()) //iffy function
document.write("The area is " + area + "cm^2 <br />");

function Person(name, age, birthday) {
	this.name = name;
	this.age = age;
	this.birthday = birthday;
	this.haveBirthday = function() {
		this.age = this.age + 1;
	};
}

var ryan = new Person("Ryan Farnes", 19, "2000-06-13");
ryan.haveBirthday();
document.write(ryan.name + " is " + ryan.age + " years old!<br />");
document.write(window.location + " | " + document.lastModified + "<br />");
document.write(ryan.name.toUpperCase() + " " + Math.PI.toFixed(3) + " " + (Math.floor(10* Math.random()) +1));







