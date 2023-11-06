$(document).ready(function () {

    // // setInterval, animate, css , appendTo

    let count = 0;

    setInterval(fadeani, 3000)

    function fadeani() { //선언적함수
        count++;
        count = count % $(".swiper-slide").length;
        //계속 반복..!
        $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on");
    }
    // const anih = $(".swiper-slide").height();

    // setInterval(function () {
    //     $(".swiper-wrapper").animate({ "marginTop": -anih }, 300, function () {
    //         $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
    //         $(".swiper-wrapper").css("marginTop", 0)
    //     })
    // }, 3000);
   
})








