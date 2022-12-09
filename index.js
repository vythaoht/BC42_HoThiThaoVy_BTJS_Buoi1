// Bài 1: Tính tiền lương nhân viên
// input: Lương 1 ngày
let daySalary = 100000;
// output: Tiền lương nhân viên
let total = 0;
// Progress: Lương 1 ngày * số ngày làm
total = daySalary * 20;
console.log("Tổng lương của 20 ngày làm =", total);

// Bài 2: Tính giá trị trung bình
// input: 5 số thực
let number1 = 1.5;
let number2 = 2.5;
let number3 = 3.5;
let number4 = 4.5;
let number5 = 5.5;
// output: Giá trị trung bình của 5 số thực
let average = 0;
// progress:
average = (number1 + number2 + number3 + number4 + number5) / 5;
console.log("Trung bình cộng của 5 số thực =", average);

// Bài tập 3: Quy đổi tiền
// input: Giá USD hiện nay
let oneDollar = 23500;
// output: Quy đổi sang VND
let convert = 0;
// progress: Đổi giúp tôi 4 USD
convert = oneDollar * 4;
console.log("4 USD có giá =", convert);

// Bài tập 4: Tính diện tích, chu vi hình chữ nhật
// input: Chiều dài, chiều rộng
let length = 10;
let height = 5;
// output: Tính diện tích, tính chu vi
let area = 0;
let perimeter = 0;
// progress: 
area = length * height;
perimeter = (length + height) * 2;

console.log("Diện tích HCN là =", area);
console.log("Chu vi HCN la =", perimeter);

// Bài tập 5: Tính tổng 2 ký số 24
// input: Nhập vào 1 số có 2 chữ số
let number = 24;
// output: Tính tổng 2 ký số
let sum = 0;
// progress:
sum += number % 10;
number = Math.floor(number / 10);
sum += number;

console.log("Tổng 2 ký số =", sum);





