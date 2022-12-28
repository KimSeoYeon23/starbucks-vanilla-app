# FastCampus Starbucks Demo
[STARBUCKS Demo Site](https://endearing-cassata-6075df.netlify.app/)  
FastCampus 강의를 들으며 만든 사이트입니다.  
<br/>
<br/>

# 📅 개발 기간
- 2022 . 12 . 20 ~ 2022 . 12 . 28
<br/>
<br/>

***

## 📌 Skill
<img alt="HTML" src="https://img.shields.io/badge/HTML-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"/> <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=white"/>


## 오픈 그래프(The Open Graph protocol)

웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

Slack -

![Slack Open Graph example](https://raw.githubusercontent.com/KimSeoYeon23/starbucks-vanilla-app/main/__assets/starbucks_slack_image.png)

KakaoTalk -

![KakaoTalk Open Graph example](https://raw.githubusercontent.com/KimSeoYeon23/starbucks-vanilla-app/main/__assets/starbucks_kakaotalk_image.png)

[더 많은 오픈 그래프 속성 보기](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)
<br/>
<br/>

## 트위터 카드(Twitter Cards)

웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

[더 많은 트위터 카드 보기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />
```

- `twitter:card`: 페이지(카드)의 유형(E.g. `summary`, `player`)
- `twitter:site`: 속한 사이트의 이름
- `twitter:title`: 페이지의 이름(제목)
- `twitter:description`: 페이지의 간단한 설명
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:url`: 페이지 주소(URL)
<br/>
<br/>

## Reset.css

각 브라우저의 기본 스타일을 초기화합니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```
<br/>
<br/>

## GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)](https://greensock.com/gsap/)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다.
[ScrollToPlugin](https://greensock.com/scrolltoplugin/)은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다.

> 자바스크립트 지식이 뛰어나지 않아도 충분히 사용할 수 있습니다!

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

[.to() 사용법](https://greensock.com/docs/v3/GSAP/gsap.to())
[GSAP Easing](https://greensock.com/docs/v2/Easing)

```js
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
```
<br/>
<br/>

## Swiper

[Swiper](https://swiperjs.com/)는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리입니다.

[Getting Started With Swiper](https://swiperjs.com/get-started)

> 강의에서 Swiper 6버전을 사용하여<br>
> 같은 6버전으로 사용하였습니다.<br>

```html
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="./images/promotion_slide1.jpg"alt="2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!" />
            <a href="javascipt:void(0)" class="btn">자세히 보기</a>
        </div>
        <div class="swiper-slide">
            <img src="./images/promotion_slide2.jpg" alt="기간 내 스타벅스 e-Gift를 3만원 이상 선물 시, 아메리카노 e-쿠폰을 드립니다." />
            <a href="javascipt:void(0)" class="btn">자세히 보기</a>
        </div>
        <div class="swiper-slide">
            <img src="./images/promotion_slide3.jpg" alt="뉴이어 푸드와 제조 음료를 세트로 구매 시, 뉴이어 음료 BOGO(1+1)쿠폰을 드립니다." />
            <a href="javascipt:void(0)" class="btn">자세히 보기</a>
        </div>
        <div class="swiper-slide">
            <img src="./images/promotion_slide4.jpg" alt="신년 MD 상품 포함 3만원 이상구매 고객께 아메리카노(톨사이즈)쿠폰을 드립니다." />
            <a href="javascipt:void(0)" class="btn">자세히 보기</a>
        </div>
        <div class="swiper-slide">
            <img src="./images/promotion_slide5.jpg" alt="2017 DIGITAL LUCKY DRAW 100%당첨의 행운을 드립니다!" />
            <a href="javascipt:void(0)" class="btn">자세히 보기</a>
        </div>
    </div>
</div>
```

[Swiper API](https://swiperjs.com/swiper-api)(옵션)을 확인하세요!

```js
new Swiper(요소, 옵션);
```

```js
new Swiper('.swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
```
<br/>
<br/>

## Youtube API

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)를 통해 YouTube 동영상을 제어할 수 있습니다.

유튜브 영상이 출력될 위치에 요소를 지정(생성)합니다.

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

`onYouTubePlayerAPIReady` 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않습니다!<br>
그리고 함수는 전역(Global) 등록해야 합니다!

[플레이어 매개변수(playerVars)](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters)에서 더 많은 옵션을 확인할 수 있습니다.

```js
// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
/** 
 * onYoutubeIframeAPIReady 의 함수 이름은 
 * 외부에서 가져오는 유튜브를 제어할 수 있는
 * 외부 자바스크립트 라이브러리에서 함수 이름을 자동으로
 * 찾게 만들었으므로 같은 이름으로 써야함
 * */ 
function onYouTubeIframeAPIReady() {
    // 'plyer' 라는 id 값을 찾음 <div id='player'></div>
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8',         // 최초 재생할 유튜브 영상 ID
        playerVars: {
            autoplay: true,             // 자동 재생 유무
            loop: true,                 // 반복 재생 유무
            playlist: 'An6LvWQuj_8',    // 반복 재생할 유튜브 영상 ID 목록
        },
        events: {
            onReady: function (event) {
                event.target.mute();    // 음소거
            }
        },
    });
}
```
<br/>
<br/>

## ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic)은 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리입니다.<br>
대표적으로 어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용합니다.

[ScrollMagic API](http://scrollmagic.io/docs/)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

```js
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
```
<br/>
<br/>

## Lodash

[Lodash](https://lodash.com/)는 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.

[Lodash API](https://lodash.com/docs/4.17.15) <br>
[Lodash throttle](https://lodash.com/docs/4.17.15#throttle)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```