$(document).ready(function () {

    // setInterval, animate, css , appedTo

    const aniw = $(".swiper-slide").width();
    //$("swiper-slide").css("width");
    //워낙 많이 써서 저런 표현식이 가능하게 됨... 값이 없으면 그대로 가져옴

    setInterval(function () {
        $(".swiper-wrapper").animate({ "marginLeft": -aniw }, 400, function () {
            $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
            $(".swiper-wrapper").css("marginLeft", 0)
        })
    }, 3000)
})








