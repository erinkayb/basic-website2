
/* level 0.9 */
// write a function that, given an array of both letters and numbers, returns a 
// new array that contains only the letters from the first array.
// 
function split(arr){
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if(typeof(arr[i]) === 'string'){
			newArr.push(arr[i]);
			}
		}
		console.log(newArr);
}
split(['ant', 13, 'bear', 20, 400, 30])

// Level 0.9
// create a function that takes in two strings and 
// prints out the first letter in each of them.

function str(str){
	var match = str.match(/\b(\w)/g);
	
	console.log(match);
}
str("abra cadabra")

// * level 1
// *
// * Implement an "equals with epsilon" function. The function should check if two numbers are
// * equal within a certain margin of error. The function should take in three parameters: the
// * two values to compare, and an "epsilon" value that determines the error margin. The function
// * should return true or false.
// *
// * You are not allowed to use any "Math.*" functions.
// * examples:
// * 10, 11, epsilon 0.5 ---> false
// * 10, 10.2, epsilon 0.3 ---> true
// */


// var x = 10;
// var y= 10.2;
// var ep = 0.3;
// console.log(Math.abs(x - y + ep) < Number.EPSILON);

// var result = Math.abs(10 - 10.2 + 0.3);

// console.log(result);

// console.log(result < Number.EPSILON);


function absVal(x,y,z) {
	var total = x - y + z;
  	var find = total < 0 ? -total : total;
  	console.log(find < z)
	}

absVal(10, 10.2, 0.3)


// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

function reverse(str){
	var newString = "";

	for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    console.log(newString);
}
reverse("goodbye")


// level 2
// given an array of integers, return that array, sorted. 
// You may not use the "sort"
// function or any other array functions

function sortArray(arr) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        var temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

var numbers = [12, 10, 10, 15, 11, 14, 13, 16];
sortArray(numbers);
console.log(numbers);
