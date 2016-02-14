var parts = sentence.split();
var longestIndex = -1;
var longestWord = 0;

for(var i=0; i < parts.length; i++){
    if(parts[i].length > longestWord){
        longestWord = parts[i].length;
        longestIndex = i;
    }
}

alert("longest word is " + parts[longestIndex] + ": " + longestWord + " characters");


// //////////







var a = 5;
var b = -1;

var c = function min(a, b) {
	Math.min(a, b);
}
console.log(c);

console.log(min(0, 10));
console.log(min(0, -10));







function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)


funtion isEven(num) {
	if(num - 2 === 0) {
		return true;
	}
	else {

		return false;
	}
}