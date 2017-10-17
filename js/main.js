$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 100) {
            $('#global-nav').addClass('scrolled-nav');
        } else if (scrollTop < 100) {
            $('#global-nav').removeClass('scrolled-nav');
        }

    });

});

$(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});