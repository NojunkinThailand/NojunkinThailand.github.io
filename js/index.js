$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

var i=0;


setInterval(function() {
    var j = i%4
    var str
    switch (j) {
        case 0:
            str = "มาทำให้การแยกขยะ มีประโยชน์มากขึ้นกัน";
            break;
        case 1:
            str = "การแยกขยะของคุณ จะไม่เสียเปล่าอีกต่อไป";
            break;
        case 2:
            str = "มาทิ้งขยะ เพื่อโลกกัน";
            break;
        case 3:
            str = "ขยะของคุณจะไม่ไร้ประโยชน์อย่างแน่นอน";
            break;
    }
    document.getElementById("subDescription").innerHTML = str
    i++;

    
},5000)