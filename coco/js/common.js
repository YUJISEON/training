$(function(){
    var tab = new Swiper('.tab-content', {
        loop: true,
        slidesPerView: 1,
        autoHeight: true,    
        thumbs: {
            swiper: {
                el: '.tab-menu',
                slidesPerView: 8,
            }
        },
    });
    
    var h = $('.tab-content .swiper-slide-active').height();
    $('.tab-content').css({
        height : `${h}px`
    })
   

    tab.on('slideChange', function () {
        var index = this.activeIndex;
        console.log("realIndex" + index);
        var h = $('.tab-content .swiper-slide').eq(index).height();
        console.log("slideChange" + h);
        $('.tab-content').css({
            height : `${h}px`
        })
   
    });
    
    /*
    var tabSwitch = true;
    var tabTop = $('.tab-menu').offset().top;
    var scroll = 0;

    $(window).scroll(function(){
        var wt = $(window).scrollTop() + 60;
        scroll = $(window).scrollTop();
        console.log(scroll);
        console.log("list_wrap : " + $('.list_wrap').scrollTop());
        aa()
        if(wt > tabTop && tabSwitch){
            $('.tab-menu').addClass('fix');
            tabSwitch = false;
        }
        if(wt <= tabTop && tabSwitch == false){
            $('.tab-menu').removeClass('fix');
            tabSwitch = true;
        }
        
    })

    var header_H = $('#header').height();
    var visual_H = $('.visual').height();
    var tab_H = $('.tab-menu').height();
    
   
    function aa() {    
        var list_H = $('.swiper-slide-active .tab-menu ul li').height();
        var wrap_H = $('.swiper-slide-active .list_wrap').height();
        var h = header_H  + tab_H - scroll;    
        console.log(h);

        if ( !$('.tab-menu').hasClass('fix') ) {
            //$('.list_wrap').css({
            //    height : `calc(100vh - ${h}px + 20px)`
           //})
        }
    }
    */

    

})