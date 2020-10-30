$(document).ready(function(){
    const button = $('#button');
    const modal = $('#modal');
    const closse = $('#close');
    const scroll = $('#scroll');
    const clsModalActive = 'modal_active'

    function checkScroll() {
        if ($(window).scrollTop() < 1) {
            scroll.fadeOut(300);
        } else {
            scroll.fadeIn(300);
        }
        
    }

    $(window).on('scroll', function() {
        checkScroll();
    });

    

    
    button.on('click', function() {  
        modal.addClass(clsModalActive);
    });

    closse.on('click', function(){
        modal.removeClass(clsModalActive);
    });

    scroll.on('click', function(){
        $('html, body').animate({
            scrollTop:0
        }, 800);
    });

});