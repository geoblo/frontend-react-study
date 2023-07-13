let rect = {
    color: 'red',
    width: 100
};
let rect2 = {
    color: 'red',
    width: 100
};
let people = { name: 'Alice' };
let teacher = { name: 'Peter', age: 30 };
let personA = {
    name: 'Kim',
    age: 15
};
// 결론:
// 무엇이 되었던 간에, 프로젝트 전반에서 type을 쓸지 interface를 쓸지 통일 필요
// 객체, 그리고 타입 확장 등을 고려해 보았을 때 interface를 쓰는 것을 추천
// Quiz
// Q1. interface를 이용해서 타입을 만들어보세요.
// let product = { 
//   brand: 'Samsung', 
//   serialNumber: 12345, 
//   model: ['TV', 'phone']
// };
// Q2. interface를 이용해서 타입을 만들어보세요.
// 아래와 같이 배열 안에 객체 여러 개가 들어갑니다.
// let cartList = [
//   { product: '냉장고', price: 2000000 }, 
//   { product: '모니터', price: 800000 },
//   { product: '마우스', price: 150000 } 
// ]; 
// 이렇게 객체들이 잔뜩 들어갈 수 있는 배열은 어떻게 타입을 지정할지?
// Q3. 위에서 만든 interface 타입을 확장해보세요.
// 갑자기 서비스가 업데이트 되어서 일부 상품은 soldout 속성이 들어가야합니다. 
// let item = { product: '청소기', price: 700000, soldout: true };
// 위에서 만든 interface를 확장해서 타입을 만들어보세요.
