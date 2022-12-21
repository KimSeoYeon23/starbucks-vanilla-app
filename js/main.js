const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

// focus 요소가 포커스를 받을 때
searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    // setAttribute 요소의 속성 값을 정하는 메소드
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// blur 요소가 포커스를 잃을 때
searchInputEl.addEventListener('blur', function () { 
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// ._throttle(함수, 시간) 함수가 실행되는 시간을 제한을 둠
window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        // badge 숨기기
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .3, {
            opacity: 0,
            display: 'none',
        });
    } else {
        // badge 보이기
        gsap.to(badgeEl, .3, {
            opacity: 1,
            display: 'block',
        })
    }
}, 300));