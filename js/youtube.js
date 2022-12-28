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