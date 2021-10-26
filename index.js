// function에서 void -> return을 막는 기능
function myFunction(x) {
    return x * 2;
}
// Narrowing
function narrowingFunc(x) {
    if (typeof x === 'string')
        return x + '1';
    else
        return x + 1;
}
narrowingFunc('hey');
narrowingFunc(27);
// Assertion
function assertionFunc(x) {
    var arr = [];
    arr[0] = x;
}
assertionFunc(123);
