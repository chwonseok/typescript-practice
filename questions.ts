// 1.
const project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

// 2.
const user: string = 'kim';
const age: undefined | number = undefined;
const married: boolean = false;
const you: (string | number | undefined | boolean)[] = [user, age, married];

// 3.
let school: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};

school.score[4] = false;
school.friend = ['Lee', school.teacher];

// 4.
function greeting(name?: string) {
  if (typeof name === 'string') return `hellow ${name}`;
  if (typeof name === undefined) return `there is no name`;
}
greeting('wonseok');

// 5.
function countLength(x: string | number) {
  if (typeof x === 'string') return x.length;
  else x.toString().length;
}
countLength('1234');

// 6.
function possibleMarriage(
  income?: number,
  house?: boolean,
  attraction?: '상' | '중' | '하'
) {
  let a: number, b: number, c: number;
  a = income * 1;
  if (house) b = 500;
  else b = 0;
  if (attraction === '상') c = 100;
  else c = 0;
  console.log(a, b, c);
  if (a + b + c >= 600) return '결혼가능';
  else return undefined;
}
console.log(possibleMarriage(700, false, '중'));
console.log(possibleMarriage(100, false, '상'));

// 답
function ableMarriage(
  income: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += income;
  if (house === true) score += 500;
  if (charm === '상') score += 100;
  if (score >= 600) return '결혼가능';
}
console.log(ableMarriage(700, false, '중'));
console.log(ableMarriage(100, false, '상'));

// 7. 문자열 숫자 변환기
function cleaning(a: (number | string)[]) {
  let result: number[] = [];

  a.forEach((b) => {
    if (typeof b === 'string') result.push(parseInt(b));
    else result.push(b);
  });

  return result;
}

cleaning(['1', 2, 3]);

// 8.
const cheol = { subject: 'math' };
const yeong = { subject: ['science', 'english'] };
const min = { subject: ['science', 'art', 'korean'] };
const test = { hello: 'hi' };

function spitSubject(teacher: { subject: string | string[] }) {
  if (Array.isArray(teacher.subject))
    return teacher.subject[teacher.subject.length - 1];
  else if (typeof teacher.subject === 'string') return teacher.subject;
  else return 'Nope';
}

console.log(spitSubject(cheol));
console.log(spitSubject(yeong));
console.log(spitSubject(min));
// console.log(spitSubject(test)); // error 발생

// 9. type alias 속성 중복 합치기
type ThisNum = number;
type ThatNum = number;
type Another = ThisNum & ThatNum;
const x: Another = 10;

// 10.
type Task = {
  color?: string;
  size: number;
  readonly position: number[];
};

// 11.
type UserData = {
  readonly name: string;
  phone: number;
  email: string;
};

// 12.
type CheckUser = {
  readonly name: string;
  phone: number;
  email: string;
};
type IsAdult = {
  isAdult: boolean;
};
type CheckTheUser = CheckUser & IsAdult;

const youuu: CheckTheUser = {
  name: 'me',
  phone: 10101010,
  email: 'alkfjadslf',
  isAdult: true,
};

// 13. 문자열 앞에 0이 있다면 0을 제거후 리턴
type CutZeroType = (a: string) => string;
const cutZero: CutZeroType = (a) => {
  if (a.slice(0, 1) === '0') return a.slice(1);
  else return a;
};
cutZero('0abc');

// 14. 문자 입력 시 dash 및 문자 제거 후 숫자 타입으로 리턴
type RemoveDashType = (a: string) => number;
const removeDash: RemoveDashType = function (a) {
  const result = a.replace(/-/g, '');
  return parseInt(result);
};

console.log(removeDash('-23'));

// 15. callback function w/TS
const cbFunc = (
  a: string,
  function1: CutZeroType,
  function2: RemoveDashType
) => {
  const resultA = function1(a);
  const resultB = function2(resultA);
  console.log(resultB);
};

cbFunc('010-1111-2222', cutZero, removeDash);

// 16. class
class Cars {
  model: string;
  price: number;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): number {
    const tax = this.price * 0.1;
    return tax;
  }
}
const possibleCar = new Cars('550D', 2000);
console.log(possibleCar);
console.log(possibleCar.tax());

// 17. class
// Word()에 입력되는 숫자, 문자를 자동으로 분류되도록 만들기
class Word {
  num: number[];
  str: string[];
  constructor(...elements: (string | number)[]) {
    this.num = [];
    this.str = [];
    elements.forEach((el) => {
      if (typeof el === 'number') this.num.push(el);
      if (typeof el === 'string') this.str.push(el);
    });
  }
}

const myTest = new Word('choi', 123, 'hey', 123123, 2929);
console.log(myTest.num);
console.log(myTest.str);
