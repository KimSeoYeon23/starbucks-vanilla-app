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
        // 버튼 보이기
        gsap.to('#to-top', .2, {
            x: 0,
        });
    } else {
        // badge 보이기
        gsap.to(badgeEl, .3, {
            opacity: 1,
            display: 'block',
        });
        // 버튼 숰기기
        gsap.to('#to-top', .2, {
            x: 100,
        });
    }
}, 300));

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', () => {
    gsap.to(window, .7, {
        scrollTo: 0         // 스크롤 위치를 0px 위치로 옮김
    });
});

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

// icon animation
function floatingObject(selector, delay, size) {
    gsap.to(selector,  random(1.5, 2.5), {  // 선택자, 애니메이션 동작 시간
        // 옵션
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

function random(min, max) {
    // '.toFixed()'를 통해 반환된 문자 데이터를
    // 'parseFLoat()'을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,      // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8,            // 감시하고 있는 요소가 viewport에서 어느 지점에서 감시되었다는 것을 판단하는지 지정하는 옵션
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});