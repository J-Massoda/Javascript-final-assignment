// Write a function to find the largest of 2 numbers
function findLargest(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

// Modify the code to find the largest of the numbers

function findLargest(...nums) {
  return Math.max(...nums)
}

// Check if a year is a LEap year
function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2100)); // false

// Using a for loop, print the first 10 numbers in js. Modify the code to print even numbers in a given array


for (let i = 1; i <= 10; i++) {
  console.log(i);
}

function printEvenNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printEvenNumbers(arr); // 2, 4, 6, 8, 10

// Write a code to find the largest number in an array

function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [8, 3, 11, 6, 2, 7];
console.log(findLargest(arr)); // 11

// Using a while loop, perform the safe operation listed about

