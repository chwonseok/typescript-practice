const title = document.querySelector('#title');

// solution 1
if (title !== null) title.innerHTML = 'hellooooooooo';
// solution 2
if (title instanceof Element) title.innerHTML = 'hellooooooooo';
// solution 3 not recommended
// const title = document.querySelector('#title') as Element
// solution 4
if (title?.innerHTML !== undefined) title.innerHTML = 'hellooooooooo';
// solution 5
// tsconfig.json 파일에서 -> "strictNullChecks": true 지우거나 false

const link = document.querySelector('.link');
// link.href = 'https://kakao.com'; // 단순 이렇게 ㄴㄴ
// a 태그의 경우 HTMLAnchorElement를 이용
if (link instanceof HTMLAnchorElement) link.href = 'https://kakao.com';

const button = document.querySelector('.button');
// 이처럼 optional chaining '?' 사용가능 (narrowing으로 인정)
button?.addEventListener('click', () => {});

const navers = document.querySelectorAll('.naver');
navers.forEach((naver) => {
  if (naver instanceof HTMLAnchorElement) naver.href = 'https://kakao.com';
});

// Class
class Family {
  lastName: 'Choi'; // JS는 이런 필드값없이도 아래에 this.lastName 사용 가능. TS는 필드값 미리 선언 필요
  firstName: string;
  constructor(a: string) {
    this.lastName = 'Choi';
    this.firstName = a;
  }
  greet() {
    console.log(`hi I'm ${this.firstName}`);
  }
}

const person1 = new Family('Wonseok');
const person2 = new Family('Wonjun');
person1.greet();
console.log(person1, person2);

// Interface
interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}
const student1: Student = { name: 'kim' };
const teacher1: Teacher = { name: 'kim', age: 30 };

type Animals = {
  name: string;
};
type Dogs = {
  name: number;
} & Animals;
