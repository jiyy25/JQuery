$(document).ready(function () {

    // setInterval, animate, css , appendTo

    let count = 0;

    setInterval(fadeani, 3000)

    function fadeani() { //선언적함수
        count++;
        count = count % 3;
        $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on");
    }

})








