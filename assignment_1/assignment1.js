/*
Exercise #1
Create a variable named "numbers" and assign an empty array to it.
*/
console.log('Exercise #1');
var numbers = [];


/*
Exercise #2
Using the loop provided for you below, use the array push method to insert the numbers 1 to 10 into the array.
*/
console.log('Exercise #2');

for(var i=0;i<10;i++){
    //use the array push() method here.
    numbers.push(i+1);
}

console.log('Array length is now ' + numbers.length);

/*
Exercise #3
Test that you used the array push method correctly by console logging the first item in the array. Console log the last item in the array afterwards.
*/
console.log('Exercise #3');
console.log('First item is ' + numbers[0]);
console.log('Last item is ' + numbers[numbers.length - 1]);


/*
Exercise #5
Create an empty object and assign it to the variable car below.
Give the car object a property called "colour" and assign it the value of "black". Test that your code works correctly by outputting the "colour" property to the console. You should see the value "black" printed out.
*/
console.log('Exercise #4 (not 5)');
var car = new Object();
car.colour = "black";
console.log(car.colour);


// End of exercises
console.log('Done.');
