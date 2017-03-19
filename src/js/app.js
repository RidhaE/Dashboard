
$(function() {
    responsive();
    $(window).resize(function(){
        responsive();
    });

    $(document).on('click','#account',function (){;
        $("#topbar-menu").toggleClass("show");
        $("#topbar-menu").toggleClass("hide");
        $(this).find('#ico-account').toggleClass('ion-chevron-down');
        $(this).find('#ico-account').toggleClass('ion-chevron-up');
    })
    $(document).on('click','.submenu',function (){
        $(this).find("#sub-content").toggleClass("show");
        $(this).find("#sub-content").toggleClass("hide");
        $(this).find('#icon').toggleClass('ion-chevron-right');
        $(this).find('#icon').toggleClass('ion-chevron-up');
    })
    $(document).on('click','#nav-button-responsive',function (){
        $('#nav').toggleClass('hide');
        $('#nav').toggleClass('show');
    })
    
    function responsive(){
        if( jQuery(window).width() < 1024 ){
            $('#nav').removeClass("hide");
            $('#nav').removeClass("show")
            $(document).on('click','#search-responsive',function (){
                $("#search-input").addClass('responsive');
                $("#breadcrumb").addClass('hide');
                $("#search-close").addClass('responsive');
            })
            $(document).on('click','#search-close',function (){
                $("#search-input").removeClass('responsive');
                $("#breadcrumb").removeClass('hide');
                $("#search-close").removeClass('responsive');
            })
        }
        if(jQuery(window).width() < 768){
            $('#nav').addClass("hide");
        }
    }
     
});
