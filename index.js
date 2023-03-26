let a="Nikita"; // Representaion of string in one way with double quotes
let b='Agarwal'; // Representaion of string in one way with single quotes
let c=23;
let name= new String("Nikita Agarwal") // Representaion of string in one way
console.log(a); // Print the value
console.log(b);
console.log(name);
console.log("To get the Type of variable a is => "+ typeof(a)); // String
console.log("To get the Type of variable name is => "+ typeof(name)); // object


// ------------------------------------------------String Methods
console.log("String Methods");
console.log("Length of an Array is => "+ a.length);
console.log("Join two strings => "+ a.concat(b));
console.log("Return Index Number value => "+ a.charAt(2));
console.log("Return Character Code of Index Number value => "+ a.charCodeAt(7)); // A character code starts with 97 // if value is not present return NaN
console.log("Return Character Code of Index Number value => "+ a.codePointAt(7)); // if value is not present return undefined
console.log("Return true & False Endswith  => "+ a.endsWith("a")); // If the string end with particular string 
console.log("Return true & False Includes => "+ a.includes('na')); // If the string includes string
console.log("Return Index Number & Search from first => "+ a.indexOf("i")); // if not present return -1
console.log("Return Index Number from start but search from last => "+ a.lastIndexOf("z")); // if not present return -1
console.log("Return Number of Copies to repeat => "+ a.repeat(2)); // if not present return -1
console.log("Replace the Old value to New Value => "+ a.replace("ita","sh"));

console.log("Search value and return index no => "+ a.search('z')); // if not present return -1
console.log("Return Index value start to end -1 => "+ a.slice(2,5)); 
console.log("Split a String into substring => "+ a.split("i",'2')); // ifseperator not present return same string
console.log("Return Substring => "+ a.substring(2,9)); 
console.log("Return Substring start index and length=> "+ a.substr(2,3)); 

console.log("Return True False If string starts with value => "+ a.startsWith("N")); 
console.log("Return String in Small Letter => "+ a.toLowerCase()); 
console.log("Return string representation of string => "+c.toString() ); // convert a number into string
console.log("Return String in Capital Letter => "+ a.toUpperCase()); 
console.log("Remove the white space from start & End => "+ a.trim()); 
console.log("Remove the white space from End => "+ a.trimEnd());  
console.log("Remove the white space from start => "+ a.trimStart());
console.log("Change a string length with value fill from end => "+ a.padEnd(15,"b"));
console.log("Change a string length with value fill from start => "+ a.padStart(10,"a"));




console.log("Return Primitive value => "+ a.valueOf()); 
console.log("Return Unicode value => "+ String.fromCharCode(105)); 

console.log("Return matched value => "+ a.match("ta")); // if not present return null


console.log('Want to add a "double extra quotes" use alteernative quotes');
console.log("Want to add a \"double extra quotes\" use backslash ");