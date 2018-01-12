// Exercise #1
/* Description
The fizz buzz challenge: Fizz buzz is a common entry level challenge that interviewers use to quickly guage someone's program background. Print the numbers from 1 to 100 to the console, however for every number that is a multiple of 5 print the word fizz, for every number that is a multiple of 3 print buzz. If a number is both a multiple of 5 and 3 (like 15) print the word fizzbuzz. Hint: use if/else statements.
*/

// Write your solution below
for (var i=1; i <= 100; i++) {
    if ( !(i % 5) && !(i % 3) ) {
        console.log(i + ": fizzbuzz");
    }
    else if (!(i % 5)) {
        console.log(i + ": fizz");
    }
    else if (!(i % 3)) {
        console.log(i + ": buzz");
    }
    else {
        console.log(i + ": -");

    }
}


/* 
Write your explanation for Exercise #1 here

The modulus (remainder) operator is used to check for remainders to determine whether the integer is a multiple of 3 or 5.
A modulus operation resulting in a value of 0 (zero) means we found a multiple.  
I used boolean logic to identify the four possible outcomes and implemented that using if/else conditions.
Because the boolean "false" is converted to 0 (zero) prior to the modulus operation, I needed to find those events.

So, my logic in pseudocode is:
if ( the remainder of i mod 5 is zero ) AND ( the remainder of i mod 3 is zero ) then
    print fizzbuzz
else evaluate the remaining outcomes....

*/


console.log("\n\n");


// Exercise #2
/* Description
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
*/

// Write your solution below


// Default values
var resultStr = "";
var isEvenRow = false;  // true for rows 2, 4, 6... and false for 1, 3, 5...
var size = 8;           // matrix dimension

// Setup the default values for row 1 (odd).
var oddChar = "#";
var evenChar = " ";

// Loop through every character in the matrix (i.e. size * size characters)
for (var i = 1; i <= size * size; i++) {

    // store the correct char based upon whether it is an even or odd char.
    if ( i % 2 ) {  // 
        resultStr += oddChar;
    }
    else {
        resultStr += evenChar;
    }

    
    // add the newline if needed and exchange the the oddChar and evenChar
    if ( !(i % size)) { // 
        resultStr += "\n";

        // Toggle the row flag
        isEvenRow = !isEvenRow;

        // Use the ternary operator to set the correct character based upon isEvenRow
        oddChar = isEvenRow ? " " : "#";
        evenChar = isEvenRow ? "#" : " ";
     
    }
}

console.log("Output is:");
console.log(resultStr);

/* 
Write your explanation for Exercise #2 here

To make the code simpler and avoid multiple nested loops, I decided to simply toggle what is considered a even column character and odd column character - on a line by line basis.

Since I setup the variables with the correct values for the first line, I placed the character toggle logic after updating the string.

See the inline comments for more details.
*/
