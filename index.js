$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
});

$(document).ready(function(){
    $(".navbar a, footer a[href='#index']").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
            });
        }
    });
})

$(window).scroll(function() {
    $(".slideanim").each(function(){
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 750) {
            $(this).addClass("slide");
        }
    });
});

$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

function aboutfn() {
    const element = document.getElementById("about");
    element.scrollIntoView();
}

function experiencefn() {
    const element = document.getElementById("experience");
    element.scrollIntoView();
}

function projectfn() {
const element = document.getElementById("project");
element.scrollIntoView();
}