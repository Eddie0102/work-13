// 하나의 모듈 파일에 하나의 모듈 만들기(es6)
const a = 10;
const b = 20;

function connect(){
    return a+b;
}


// es6 문법에서는 화살표 함수로 해도 export위치가 상관없음
// 이유:  es6는 모든 export 와 import 문이 로드 시점에 한번에 평가되고 처리되기때문에
// 함수선언이나 변수선언의 위치와 무관하게 올바르게 작동함.

export default connect;