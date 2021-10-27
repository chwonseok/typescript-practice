// 1.
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// 2.
var user = 'kim';
var age = undefined;
var married = false;
var you = [user, age, married];
// 3.
var school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
// 4.
function greeting(name) {
    if (typeof name === 'string')
        return "hellow " + name;
    if (typeof name === undefined)
        return "there is no name";
}
greeting('wonseok');
// 5.
function countLength(x) {
    if (typeof x === 'string')
        return x.length;
    else
        x.toString().length;
}
countLength('1234');
// 6.
function possibleMarriage(income, house, attraction) {
    var a, b, c;
    a = income * 1;
    if (house)
        b = 500;
    else
        b = 0;
    if (attraction === '상')
        c = 100;
    else
        c = 0;
    console.log(a, b, c);
    if (a + b + c >= 600)
        return '결혼가능';
    else
        return undefined;
}
console.log(possibleMarriage(700, false, '중'));
console.log(possibleMarriage(100, false, '상'));
// 답
function ableMarriage(income, house, charm) {
    var score = 0;
    score += income;
    if (house === true)
        score += 500;
    if (charm === '상')
        score += 100;
    if (score >= 600)
        return '결혼가능';
}
console.log(ableMarriage(700, false, '중'));
console.log(ableMarriage(100, false, '상'));
// 7. 문자열 숫자 변환기
function cleaning(a) {
    var result = [];
    a.forEach(function (b) {
        if (typeof b === 'string')
            result.push(parseInt(b));
        else
            result.push(b);
    });
    return result;
}
cleaning(['1', 2, 3]);
// 8.
var cheol = { subject: 'math' };
var yeong = { subject: ['science', 'english'] };
var min = { subject: ['science', 'art', 'korean'] };
var test = { hello: 'hi' };
function spitSubject(teacher) {
    if (Array.isArray(teacher.subject))
        return teacher.subject[teacher.subject.length - 1];
    else if (typeof teacher.subject === 'string')
        return teacher.subject;
    else
        return 'Nope';
}
console.log(spitSubject(cheol));
console.log(spitSubject(yeong));
console.log(spitSubject(min));
var x = 10;
var youuu = {
    name: 'me',
    phone: 10101010,
    email: 'alkfjadslf',
    isAdult: true,
};
var cutZero = function (a) {
    if (a.slice(0, 1) === '0')
        return a.slice(1);
    else
        return a;
};
cutZero('0abc');
var removeDash = function (a) {
    var result = a.replace(/-/g, '');
    return parseInt(result);
};
console.log(removeDash('-23'));
// 15. callback function w/TS
var cbFunc = function (a, function1, function2) {
    var resultA = function1(a);
    var resultB = function2(resultA);
    console.log(resultB);
};
cbFunc('010-1111-2222', cutZero, removeDash);
// 16. class
var Cars = /** @class */ (function () {
    function Cars(model, price) {
        this.model = model;
        this.price = price;
    }
    Cars.prototype.tax = function () {
        var tax = this.price * 0.1;
        return tax;
    };
    return Cars;
}());
var possibleCar = new Cars('550D', 2000);
console.log(possibleCar);
console.log(possibleCar.tax());
// 17. class
// Word()에 입력되는 숫자, 문자를 자동으로 분류되도록 만들기
var Word = /** @class */ (function () {
    function Word() {
        var _this = this;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.num = [];
        this.str = [];
        elements.forEach(function (el) {
            if (typeof el === 'number')
                _this.num.push(el);
            if (typeof el === 'string')
                _this.str.push(el);
        });
    }
    return Word;
}());
var myTest = new Word('choi', 123, 'hey', 123123, 2929);
console.log(myTest.num);
console.log(myTest.str);
