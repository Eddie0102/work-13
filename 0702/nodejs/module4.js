// function add(x, y) {
//     return x + y;
// }
// function substract(x, y) {
//     return x - y;
// }
// function multiply(x, y) {
//     return x * y;
// }

// export { add, substract, multiply };
// export function add(x, y) {
//     return x + y;
// }
// export function substract(x, y) {
//     return x - y;
// }
// export function multiply(x, y) {
//     return x * y;
// }
//방법 2의 화살표  버전
// export const add=(x,y)=x+y;
// export const substract=(x,y)=x-y;
// export const multiply=(x,y)=x*y;


//방법3 한번에 내보내기
const add = (x, y) => x + y;
const substract = (x, y) => x - y;
const multiply = (x, y) => x * y;
//하나의 객체 변수로
const values = { add, substract, multiply };
export default values;