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

new Swiper('.awards .swiper-container', {
    slidesPerView: 5,       // 한 번에 봉줄 슬라이드 개수
    spaceBetween: 30,       // 슬라이드 사이 여백
    centeredSlides: true,   // 1번 슬라이드가 가운데 보이기
    loop: true,             // 슬라이드 반복
    autoplay: true,
    navigation: {
        nextEl: ".awards .swiper-next",
        prevEl: ".awards .swiper-prev",
    },
});

// 현재 몇년도인지 갖고옴
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();    // 2022