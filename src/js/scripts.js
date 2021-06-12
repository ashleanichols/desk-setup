$(document).ready(() => {
    
    $(".retrowave__toggle").on("click", function () {
        if (!$(".app").is(':visible')) {
            $(".app").fadeIn();
            $(".retrowave__toggle").toggleClass('active');
        } else {
            $(".app").fadeOut();
            $(".retrowave__toggle").toggleClass('active');
        }
    });

    $(".desk__hotspot--toggle").on("click", function () {
        let $current = $(this).parent(".desk__hotspot");
        $current.hasClass("open") ?
            $current.removeClass("open").addClass("visited") :
            $current
            .addClass("open")
            .siblings(".desk__hotspot.open")
            .removeClass("open")
            .addClass("visited");
    });

    $(".desk__hotspot--closingIcon").on("click", function (e) {
        e.preventDefault();
        $(this)
            .parents(".desk__hotspot")
            .eq(0)
            .removeClass("open")
            .addClass("visited");
    });
});