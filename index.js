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
