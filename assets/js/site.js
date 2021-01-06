import $ from 'jquery';
import './vendor/bootstrap';

$('.intro .number').each(() => {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: (now) => $(this).text(Math.ceil(now))
    });
});

$("#navbar ul li a[href^='#']").on('click', function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, () => window.location.hash = hash
    );
});
