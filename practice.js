//Once you complete a problem, open up Chrome and check the answer in the console.

//NOTES:
//truinary statement
// var x = 0 < 5 ? "true" : "false";
// alert(x);

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var isTyler = function (name) {
	if(name === "Tyler") {
		return true;
	} else {
		return false;
	}
}
console.log(isTyler(name));
//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function () {
	// return prompt("What is your name?");
	var name = prompt("What is your name?");
	return name;
}
getName();

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
var welcome = function(){
	var name = getName();
	alert("Welcome " + name);
}
welcome();
//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
//The parameters are the aliases for the values that will be passed to the function. The arguments are the actual values.
var foo = function( a, b, c ) {}; // a, b, and c are the parameters

foo( 1, 2, 3 ); // 1, 2, and 3 are the arguments


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
false
0 (zero)
"" (empty string)
null
undefined
NaN (a special Number value meaning Not-a-Number!)
// double equals
var c = (false == 0); // true
var d = (false == ""); // true
var e = (0 == ""); // true
console.log(null == undefined);

//Next Problem



//Create a function called myName that returns your name

  //Code Here
var myName = function(name){
	return name;
}
myName("Lezlee");
//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName("Lezlee");
//Now alert the result of invoking newMyName
alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
var outerFn = function(){
	var name = "Lezlee";
	return (function() {

	})();
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = (function (name){alert(name)})

//Now invoke innerFn.
('Lezlee');



