// 가장 기본
var lastName = 'Choi';
lastName = 'CHOI';
// array 내 string만 가능
var arrays = ['one', 'two', 'three'];
// object 설정
var myself = { firstName: 'Wonseok' };
// string||number
var strNum = 27;
var testVar = 'hey';
// function, parameter에도 type 설정 가능
// return값도 type 설정 가능
function myfunc(x) {
    return x * 10;
}
var john = [272727, true];
var wonseok = {
    where: 'Daegu',
    city: 'Daegu',
    // greeting: () => console.log('haha'), // 에러
};
// class 문법도 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// Union Type
var members = [1, '2', 3];
var objs = { a: 7 };
// Any Type -> all type possible -> 보통 unknown으로 대신하여 사용 (더 안전)
var any = null;
any = true;
var animals = { name: 'monkey', age: 20 };
var gf = {
    name: 'Amber',
};
var position = { x: 30, y: 20 };
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
// literal types: 변수에 들어갈 값을 정해버림, 함수의 parameter와 return값도 정할 수 있음
var naame;
naame = 'kim';
var itsMe;
itsMe = 'man';
// 가위|바위|보 중 1개만 입력 가능, 가위|바위|보만 담는 array 리턴하는 함수
function rps(turn) {
    return [turn];
}
rps('paper');
// literal type의 문제점
var person = {
    name: 'kim',
};
function myffunc(a) {
    // 여기서 a는 'kim이란 자료만 가능'이란 말이 아님
    // 'kim이란 타입만 가능'이란 말
    // 하지만 person.name의 타입은 string, 따라서 다른 종류의 타입임
}
myffunc(person.name);
var hamsoo = function (a) {
    return 10;
};
var member = {
    name: 'choi',
    isAdult: function (a) {
        if (a > 19)
            return true;
    },
};
member.isAdult(20);
