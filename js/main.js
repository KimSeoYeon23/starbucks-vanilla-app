const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
    searchInputEl.focus();
});

// focus 요소가 포커스를 받을 때
searchInputEl.addEventListener('focus',() => {
    searchEl.classList.add('focused');
    // setAttribute 요소의 속성 값을 정하는 메소드
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// blur 요소가 포커스를 잃을 때
searchInputEl.addEventListener('blur',() => { 
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// ._throttle(함수, 시간) 함수가 실행되는 시간을 제한을 둠
window.addEventListener('scroll', _.throttle(() => {
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

// Fade In
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7초뒤, 1.4초 뒤, 2.1초 뒤 실행
        opacity: 1,
    })
});

// Slide
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,       // 한 번에 봉줄 슬라이드 개수
    spaceBetween: 10,       // 슬라이드 사이 여백
    centeredSlides: true,   // 1번 슬라이드가 가운데 보이기
    loop: true,             // 슬라이드 반복
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: ".promotion .swiper-pagination",    // 페이지 번호 요소 선택자
        clickable: true,                        // 상요자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        nextEl: ".promotion .swiper-next",
        prevEl: ".promotion .swiper-prev",
    },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', () => {
    isHidePromotion = !isHidePromotion;

    if(isHidePromotion) {
        // 숨김 처리
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
})