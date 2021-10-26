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
console.log(spitSubject(test));
