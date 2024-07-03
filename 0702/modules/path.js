const path = require('path')

// join(경로들) 여러개의 경로 조각을 결합하여 하나의 경로로 생성
// 상대, 절대, 혼합 경로로 설정될 수 있음.
// 상대 경로 예시
const pathJoin1 = path.join('public', 'txt', 'file.txt')
console.log(pathJoin1);

// 절대 경로 예시: 경로 조각 중 하나라도 절대 경로가 있으면 결과는 절대경로가 됨
const pathJoin2 = path.join('/public', 'txt', 'file.txt')
console.log(pathJoin2);

// 혼합경로 예시: ..을 쓰면 상위폴더로 이동
const pathJoin3 = path.join('/users', 'martin', '../files', 'file.txt');
console.log(pathJoin3)

//resolve(경로들): 여러 개의 경로 조각을 결합하여 절대 경로로 생성(경로가 없으면 현재 경로)
const pathResolve1 = path.resolve('public', 'txt', 'file.txt');
console.log(pathResolve1)
const pathResolve2 = path.resolve();
console.log(pathResolve2)

//basename (경로, 확장자[선택]): 주어진 경로의 마지막 부분( 파일이름 )을 반환
// 확장자가 없으면 전체 파일 명, 확장자가 있으면 확장자를 제거한 파일명
const filename = path.basename("/users/Eddie/files/file.txt");
console.log(filename);
const originalName = path.basename("/users/Eddie/files/file.txt", 'txt');
console.log(originalName);

// extname(경로): 주어진 경로의 확장자를 반환
const ext = path.extname("/users/Eddie/files/file.txt");
console.log(ext)

// dirname(경로): 주어진 경로의 디렉토리 부분을 반환
const dir  =path.dirname("/users/Eddie/files/file.txt")
console.log(dir)