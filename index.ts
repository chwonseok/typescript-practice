const title = document.querySelector('#title');

// solution 1
if (title !== null) title.innerHTML = 'hellooooooooo';
// solution 2
if (title instanceof Element) title.innerHTML = 'hellooooooooo';
// solution 3 not recommended
// const title = document.querySelector('#title') as Element
// solution 4
if (title?.innerHTML !== undefined) title.innerHTML = 'hellooooooooo';
// solution 5
// tsconfig.json 파일에서 -> "strictNullChecks": true 지우거나 false

const link = document.querySelector('.link');
// link.href = 'https://kakao.com'; // 단순 이렇게 ㄴㄴ
// a 태그의 경우 HTMLAnchorElement를 이용
if (link instanceof HTMLAnchorElement) link.href = 'https://kakao.com';

const button = document.querySelector('.button');
// 이처럼 optional chaining '?' 사용가능 (narrowing으로 인정)
button?.addEventListener('click', () => {});

const navers = document.querySelectorAll('.naver');
navers.forEach((naver) => {
  if (naver instanceof HTMLAnchorElement) naver.href = 'https://kakao.com';
});
