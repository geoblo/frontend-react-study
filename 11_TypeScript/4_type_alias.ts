// type alias(별칭) 만드는 법
let animalVar: string | number | undefined;
// type이 길어지거나 타입을 재사용하고 싶다면 변수처럼 만들어 사용 가능

// 영어 대문자로 시작하는게 관례, 가독성을 위해 뒤에 Type을 붙여주기도 함
// (주의) type 선언도 변수 선언과 같이 중복 선언 불가
type AnimalType = string | number | undefined;
let animalVar2: AnimalType = 'Dog';

// object 타입을 type alias로 만들어보기
type PersonType = {
  name: string,
  age: number
};
let person4: PersonType = { name: 'Kim', age: 25 };

// 옵셔널 속성
type PersonType2 = {
  name: string,
  age?: number // age 속성은 선택사항
};
let person5: PersonType2 = { name: 'Ace' };

// object의 자료 수정도 막을 수 있음
// 속성에 사용 가능한 readonly 키워드
type Friend = {
  readonly name: string
};
let friend: Friend = {
  name: 'Alice'
};
// friend.name = 'Peter'; // readonly로 읽기 전용 속성임
console.log(friend); // 실제로 JS에서는 값이 바뀌는데 TS에서는 에러를 발생시켜줌
// (타입스크립트 에러는 에디터&터미널에서만 발생하고 실제 실행과는 상관없음)

// 유니언 자료형을 이용하여
// | 연산자로 두 개의 type alias를 묶기
type Name = string;
type Age = number;
type PersonTypes = Name | Age;

// 인터섹션 자료형을 이용하여
// & 연산자로 object 타입 결합하기
type PositionX = { x: number };
type PositionY = { y: number };
type Position2D = PositionX & PositionY; // { x: number, y: number }

let position: Position2D = { x: 10, y: 20 };


// Quiz
// Q1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// 한번 테스트 해보기


// Q2. 다음 조건을 만족하는 타입을 만들어봅시다.
// 1. 이 타입은 object 자료형이어야 합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야 합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야 합니다.
// 4. 이 타입은 position 이라는 변경 불가능한 속성이 있어야 하며 항상 숫자가 담긴 array 자료가 들어와야 합니다.
// type alias로 만들어보세요.


// Q3. 다음을 만족하는 type alias를 만들어보세요.
// 1. 아래처럼 생긴 object 자료를 다룰 일이 많습니다.
// { name: 'Kim', phone: 821012345678, email: 'geoblo@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.


// Q4. 다음을 만족하는 type alias를 만들어보세요.
// 1. Q3와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자 여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. Q3에서 만들어둔 type alias를 재활용해봅시다.