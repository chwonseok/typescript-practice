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
