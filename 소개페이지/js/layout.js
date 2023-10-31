//document.ready 축약형
$(function () {
    // var scrolltop = $(window).scrollTop();
    var scrolltop = 0; //화면이 열리자마자 스크롤상단위치 저장할 변수 선언
    var scrollTimeout; //scroll이벤트의 실행식을 0.1초 단위로 실행(인간이 감지할 정도) setInterval을 저장할 변수 선언

    // console.log(`화면이 열리자마자 스크롤 상단위치 알려줘 ${scrolltop}`)

    $(window).scroll(function () {
        scrolltop = $(window).scrollTop();
        //윈도우를 스크롤을 할때마다 변하는 값을 다시 scrolltop에 저장!!
        //그릇을 계속 쓴당
        // console.log(`화면이 열리자마자 스크롤 상단위치 알려줘 ${scrolltop}`)
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(
            function () {
                if (scrolltop > 0) {
                    $("body").addClass("scroll");
                    // $("h1 img").attr("src", "./img/logo2.svg");
                } else {
                    $("body").removeClass("scroll");
                    // $("h1 img").attr("src", "./img/logo1.svg");
                }
            }
        )

    })
});