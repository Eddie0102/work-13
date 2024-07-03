import connect from "./module3.js";
const result = connect();
console.log(result);


// import {add,substract,multiply} from './module4.js'
// // console.log(add(5,6));
// // console.log(substract(9,6));
// console.log(multiply(3,6));
import calculator from'./module4.js'
// 방법3 한번에 내보내기
console.log(calculator.add(1,3));
console.log(calculator.substract(4,1));
console.log(calculator.multiply(4,2));