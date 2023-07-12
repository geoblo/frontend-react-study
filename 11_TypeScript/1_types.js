// 자바스크립트에 타입 문법이 추가된 것
// 자바스크립트로 코드를 짤때 타입을 엄격하게 지정(정적 타입)
// 잘못된 타입의 데이터가 들어가는 것을 막아 타입 관련 버그들을 미연에 방지
// 변수에 타입 지정 가능
// 변수명: 타입명
// 타입스크립트에서 지원하는 기본 자료형
// boolean, number, string, Array, object, 튜플, enum, any, void, null과 undefined, never 등이 있음
// 1. boolean
// true 또는 false 값을 저장하는 타입
let active = true;
// 이 변수에는 boolean 타입만 들어올 수 있음
// active = 123; // 실수로 타입을 변경하면 에러 발생
// 2. number
// 숫자 데이터를 저장하는 타입
// 10진, 16진, 2진, 8진수 리터럴을 지원
let decimal = 10;
let hex = 0xa;
let binary = 0b1010;
let octal = 0o12;
// 이 변수에는 number 타입만 들어올 수 있음
console.log(decimal, hex, binary, octal);
// 3. string
// 문자열 데이터를 저장하는 타입
let message = 'Welcome';
// 이 변수에는 string 타입만 들어올 수 있음
// 4. Array
// 배열의 타입을 정의하는 방법에는 2가지가 존재
// 1) 첫번째 방법: type[]
let firstArray = [1, 2, 3]; // 숫자만 담긴 배열만 가능
// 2) 두번째 방법(제네릭): Array<type>
let secondArray = [4, 5, 6]; // 숫자만 담긴 배열만 가능
// 제네릭: 타입을 파라미터로 입력하는 문법
// 5. object
let person = { a: 11, b: 'bb', c: true };
// 이 변수에는 원시 자료형이 아닌 모든 자료형 값이 들어올 수 있음(예: 객체, 배열, 함수 등)
person = [1, 2, 3];
person = () => { };
// 원시 자료형이란?
// person = 1;
// person = 'aa';
// person = true;
// person = undefined;
// person = null;
// (참고) https://hwani.dev/js-primitive-reference-types/
