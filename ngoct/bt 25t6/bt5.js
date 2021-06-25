// bài tập 5
var number = 83;
var sum = 0;

sum += number % 10;
number = Math.floor(number / 10);
sum += number % 10;
sum += Math.floor(number / 10);

console.log("bài tập 5");
console.log('tổng:', sum);