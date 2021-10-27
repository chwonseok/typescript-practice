var title = document.querySelector('#title');
// solution 1
if (title !== null)
    title.innerHTML = 'hellooooooooo';
// solution 2
if (title instanceof Element)
    title.innerHTML = 'hellooooooooo';
// solution 3 not recommended
// const title = document.querySelector('#title') as Element
// solution 4
if ((title === null || title === void 0 ? void 0 : title.innerHTML) !== undefined)
    title.innerHTML = 'hellooooooooo';
// solution 5
// tsconfig.json 파일에서 -> "strictNullChecks": true 지우거나 false
var link = document.querySelector('.link');
// link.href = 'https://kakao.com'; // 단순 이렇게 ㄴㄴ
// a 태그의 경우 HTMLAnchorElement를 이용
if (link instanceof HTMLAnchorElement)
    link.href = 'https://kakao.com';
var button = document.querySelector('.button');
// 이처럼 optional chaining '?' 사용가능 (narrowing으로 인정)
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () { });
var navers = document.querySelectorAll('.naver');
navers.forEach(function (naver) {
    if (naver instanceof HTMLAnchorElement)
        naver.href = 'https://kakao.com';
});
// Class
var Family = /** @class */ (function () {
    function Family(a) {
        this.lastName = 'Choi';
        this.firstName = a;
    }
    Family.prototype.greet = function () {
        console.log("hi I'm " + this.firstName);
    };
    return Family;
}());
var person1 = new Family('Wonseok');
var person2 = new Family('Wonjun');
person1.greet();
console.log(person1, person2);
