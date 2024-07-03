//하나의 모듈 파일에 여러개의 모듈 만들기
// 방법1


// module.exports = { add, substract, multiply } <<< function 키워드로 함수를 만들었을 때는 위치가 상관없지만
// 화살표 함수로 함수를 선언할 떄는 항상 화살표 함수 아래에 위치해야 함.
function add(x, y) {
    return x + y;
}
function substract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
// const add = (x, y) => x + y;
// // 화살표 함수를 사용하여 한 줄로 쓸 때 return 과 { } 생략가능!!
// const substract = (x, y) => x - y;
// const multiply = (x, y) => x * y;


module.exports = { add, substract, multiply };
//여러개를 하나의 객체에 담아서 전송.


//방법 2
// module.exports.add = function (x, y) {
//     return x + y;
// };
// module.exports.substract = function (x, y) {
//     return x - y;
// }
// module.exports.multiply = function (x, y) {
//     return x * y;
// };
//방법 2 의 생략 버전
// exports.add = function (x, y) {
//     return x + y;
// };
// exports.substract = function (x, y) {
//     return x - y;
// };
// exports.multiply = function (x, y) {
//     return x * y;
// }
//방법2