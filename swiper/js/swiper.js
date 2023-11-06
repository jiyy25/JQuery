$(document).ready(function () {

    // setInterval, animate, css , appedTo

    const anih = $(".swiper-slide").height();

    setInterval(function () {
        $(".swiper-wrapper").amimate({ "marginTop": -anih }, 400, function () {
            $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
            $(".swiper-wrapper").css("marginTop", 0)
        })
    })

})








