$(document).ready(function () {
    $('#scrollD_0').on('click',function () {
        $("html, body").animate({scrollTop: $('.txt4').offset().top-100 }, 500);
    });
    $('#scrollD_1').on('click',function () {
        $("html, body").animate({scrollTop: $('.slider').offset().top  }, 500);
    });
    $('#scrollD_2').on('click',function () {
        $("html, body").animate({scrollTop: $('#txt7').offset().top  }, 500);
    });
    $('#scrollD_3').on('click',function () {
        $("html, body").animate({scrollTop: $('.features').offset().top  }, 500);
    });
    $('#scrollD_4').on('click',function () {
        $("html, body").animate({scrollTop: $('.automation').offset().top }, 500);
    });
    $('#scrollD_5').on('click',function () {
        $("html, body").animate({scrollTop: $('.footer').offset().top  }, 500);
    });

    $('#nav_0').on('click',function () {
        $("html, body").animate({scrollTop: $('.txt4').offset().top-100 }, 800);
    });
    $('#nav_1').on('click',function () {
        $("html, body").animate({scrollTop: $('.slider').offset().top  }, 800);
    });
    $('#nav_2').on('click',function () {
        $("html, body").animate({scrollTop: $('.what_PROD').offset().top  }, 800);
    });
    $('#nav_3').on('click',function () {
        $("html, body").animate({scrollTop: $('.features').offset().top  }, 800);
    });
    $('#nav_4').on('click',function () {
        $("html, body").animate({scrollTop: $('.how_to').offset().top }, 800);
    });
    $('#nav_5').on('click',function () {
        $("html, body").animate({scrollTop: $('.footer').offset().top  }, 800);
    })
});
