// // var x = 1;

// function bar() {
//   let x = 10;
//   foo();
// }

// function foo() {
//   console.log(x);
// }

// bar();
// foo();

function Circle(radius) {
  // 3. 인스턴스 초기화
  this.radius = radius;
  // 4. 인스턴스 생성시에 생성자 함수를 호출할 때 넣은 인수를 this 바인딩을 통해 프로퍼티에 할당한 뒤, 인스턴스를 반환한다.
}
// 2. 인스턴스 생성
const circle = new Circle(5);
const a = new Circle(1);
const b = Circle(1);
const c = Circle(2);
console.log(a === b, a.radius);
