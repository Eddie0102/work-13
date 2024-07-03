const myURL = new URL("http://localhost.com:8000/users?query=001#hash")

//속성
console.log(myURL.href);
// http://localhost.com:8000/users?query=001#hash
console.log(myURL.hostname);
// localhost.com
console.log(myURL.pathname);
// /users
console.log(myURL.search);
// ?query=001(키와 키값)

console.log(myURL.searchParams.get('query'));
// 001(query 라는 키의 키값을 받아옴)
myURL.searchParams.append('newParam', 'kdt');
// newParam 이라는 새로운 키와 그 키 값을 kdt로 추가.

console.log(myURL.search)
// ?query=001&newParam=kdt 새로운 키값이 추가된 것을 확인할 수 있음.
//메서드
console.log(myURL.toString());
// myURL이라는 변수가 URL 객체일때 문자열로 반환하는 것.
// 결과) http://localhost.com:8000/users?query=001&newParam=kdt#hash

const query = myURL.search;
const param = new URLSearchParams(query);
console.log(param.get('newParam'));
// 새로 추가된 newParam 이라는 키의 키값을 확인 : kdt