// One argument
//console.log('Hello, world!');

// Zero arguments
//let sales = [5, 2.50, 3];
//sales.pop();

function evaluateString(lol) {
    if (lol)  {
        return 'The string has a value!';
    } else {
        return 'What string?';
    }
}

// Option 1
//console.log(evaluateString(''));
//console.log(evaluateString('This one!'));


// Option 2
let first = evaluateString('');
let second = evaluateString('This one!');
console.log(first); // What string?
console.log(second); // The string has a value!

function evaluateString(lol) {  // parameter

}

evaluateString('This one!');  // argument

function square(number)  {
    return number * number;
}

console.log(square(2)); // 4
let result = square(3);
console.log(result); // 9

 let now = new Date();
 console.log(now.getDay()); // A number between 0 and 6

function dayOfWeek(date)  {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

let now = new Date();
console.log('Happy ' + dayOfWeek(now) + '!');

// Template Literals - use these instead of the commented exaples
// let name = 'Rick';
//console.log('My name is ' + name '.');

let name = 'Rick';
console.log(`My name is ${name}.`);

function calculateSalesTax(price, tax)  {
    console.log(`price is ${price}`);
    console.log(`tax is ${tax}`);
    return price * tax;
}

let result = calculateSalesTax(10, 0.15);
console.log(`Sales tax is $${result}`);

function calculateSalesTax(a, b)  { // Swapped variable names
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    return a * b;
}


let result = calculateSalesTax(0.15, 10); // Swapped these values
console.log(`Sales tax is $${result}`);

function calculateSalesTax(prices, tax)  {
    let result = [];
    for (let i = 0; i < prices.length; i++)  {
        result.push(prices[i] * tax);
    }
    return result;
}

console.log(calculateSalesTax([1, 5, 10], 0.15));
console.log(calculateSalesTax(0.15, [1, 5, 10]));
