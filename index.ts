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
