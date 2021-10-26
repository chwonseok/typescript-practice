// 가장 기본
let lastName: string = 'Choi';
lastName = 'CHOI';

// array 내 string만 가능
let arrays: string[] = ['one', 'two', 'three'];

// object 설정
const myself: { firstName?: string } = { firstName: 'Wonseok' };

// string||number
const strNum: string | number = 27;

// type을 변수로 선언하여 이용가능, 보통 대문자이용
type StrAndNum = string | number;
const testVar: StrAndNum = 'hey';

// function, parameter에도 type 설정 가능
// return값도 type 설정 가능
function myfunc(x: number): number {
  return x * 10;
}

// array element 세부 설정 가능
type Member = [number, boolean];
const john: Member = [272727, true];

// object 내 key의 type 일괄 지정
type Obj = {
  [key: string]: string;
};

const wonseok: Obj = {
  where: 'Daegu',
  city: 'Daegu',
  // greeting: () => console.log('haha'), // 에러
};

// class 문법도 가능
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Union Type
const members: (number | string)[] = [1, '2', 3];
const objs: { a: string | number } = { a: 7 };

// Any Type -> all type possible -> 보통 unknown으로 대신하여 사용 (더 안전)
let any: any | unknown = null;
any = true;

// type alias
type Animal = { name: string; age: number };
const animals: Animal = { name: 'monkey', age: 20 };

// readonly
type Gf = {
  readonly name: string;
};
const gf: Gf = {
  name: 'Amber',
};
// gf.name = 'another'; // TS파일에서는 error를 띄우지만, js에서는 결국 수정은 됨

// type alias extend
// 1)
type Name = string;
type Age = number;
type Person = Name | Age;

// 2)
type PositionX = { x: number };
type PositionY = { y: number };
type PositionXY = PositionX & PositionY; // {x: number, y: number}
const position: PositionXY = { x: 30, y: 20 };

// function에서 void -> return을 막는 기능
function myFunction(x: number | undefined) {
  return x * 2;
}

// Narrowing
function narrowingFunc(x: number | string) {
  if (typeof x === 'string') return x + '1';
  else return x + 1;
}
narrowingFunc('hey');
narrowingFunc(27);

// Assertion
function assertionFunc(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number;
}
assertionFunc(123);

// literal types: 변수에 들어갈 값을 정해버림, 함수의 parameter와 return값도 정할 수 있음
let naame: 'kim';
naame = 'kim';

let itsMe: 'korean' | 'man';
itsMe = 'man';

// 가위|바위|보 중 1개만 입력 가능, 가위|바위|보만 담는 array 리턴하는 함수
function rps(
  turn: 'rock' | 'paper' | 'scissors'
): ('rock' | 'paper' | 'scissors')[] {
  return [turn];
}

rps('paper');

// literal type의 문제점
let person = {
  name: 'kim',
} as const;

function myffunc(a: 'kim') {
  // 여기서 a는 'kim이란 자료만 가능'이란 말이 아님
  // 'kim이란 타입만 가능'이란 말
  // 하지만 person.name의 타입은 string, 따라서 다른 종류의 타입임
}

myffunc(person.name);

// function에 type alias 적용하기
type TypeFunc = (a: string) => number;
const hamsoo: TypeFunc = function (a) {
  return 10;
};

// method type alias 적용하기
type TypeMethod = {
  name: string;
  isAdult: (a: number) => boolean;
};
const member: TypeMethod = {
  name: 'choi',
  isAdult: (a) => {
    if (a > 19) return true;
  },
};
member.isAdult(20);
