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

// 현재 몇년도인지 갖고옴
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();    // 2022