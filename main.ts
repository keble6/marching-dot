basic.forever(function () {
    for (let yn = 0; yn <= 4; yn++) {
        for (let xn = 0; xn <= 4; xn++) {
            led.plot(xn, yn)
            basic.pause(100)
            led.unplot(xn, yn)
        }
    }
})
