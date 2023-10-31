let count = 0;

const myauto = setInterval(function () {

    count++; //
    console.log(count)
    if (count == 10) {
        clearInterval(myauto);
    };

}, 1000)

// clearInterval(myauto)