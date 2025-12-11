(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('position-fixed bg-dark shadow-sm');
        } else {
            $('.navbar').removeClass('position-fixed bg-dark shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);


var navbar = $('.navbar');

$(window).scroll(function () {
    if ($(this).scrollTop() > 0 || $('#navbarCollapse').hasClass('show')) {
        navbar.addClass('position-fixed navbar-bg-translucent shadow-sm');
    } else {
        navbar.removeClass('position-fixed navbar-bg-translucent shadow-sm');
    }
});

$('.navbar-nav .nav-link').on('click', function () {
    if ($('.navbar-toggler').is(':visible')) {
        var collapseEl = document.getElementById('navbarCollapse');
        var bsCollapse = bootstrap.Collapse.getInstance(collapseEl) || new bootstrap.Collapse(collapseEl, {toggle: false});
        bsCollapse.hide();
    }
});

$('#navbarCollapse').on('show.bs.collapse', function () {
    navbar.addClass('position-fixed navbar-bg-translucent shadow-sm');
});
$('#navbarCollapse').on('hidden.bs.collapse', function () {
    if ($(window).scrollTop() === 0) {
        navbar.removeClass('position-fixed navbar-bg-translucent shadow-sm');
    }
});

// Modal DOM
const modal = document.createElement('div');
modal.id = 'imgModal';
modal.innerHTML = '<div class="close-btn"></div><img src="" alt="">';
document.body.appendChild(modal);

const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.close-btn');

document.querySelectorAll('.portfolio-img').forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', e => {
    if (e.target === modal || e.target === closeBtn) {
        modal.style.display = 'none';
        modalImg.src = '';
    }
});


function zoomImage() {
  const zoomContainer = document.getElementById('zoomedImage');
  zoomContainer.style.display = 'flex';
}

function closeZoom() {
  const zoomContainer = document.getElementById('zoomedImage');
  zoomContainer.style.display = 'none';
}
