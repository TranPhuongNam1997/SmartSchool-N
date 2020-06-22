$( document ).ready(function() {

    // $('.datepicker-msb-none').focus(function () {
    //     var getwidth = $('.data-filed .datepicker-msb-none').width();
    //     $('.xdsoft_datetimepicker.xdsoft_noselect.xdsoft_').css({"width": getwidth + 38});
    // });

    // $('.show-child-kl').hide();
    //
    // $('.parent_sysbol').click(function () {
    //     $(this).next('.show-child-kl').toggle();
    //     $(this).closest('tr.has-group').find('.show-child-kl:nth-child(n+4)').show();
    // });

    //select
    $('select').click(function () {
        $(this).toggleClass('select-icon-up');
    });
    $('select').focusout(function () {
        $(this).removeClass('select-icon-up')
    });

    //menubar
    var overlay = $("<div class='overlay'></div>")
    $("body").prepend(overlay);

    $(".view-menu-mb").click(function () {
        $(this).toggleClass("change-icon-mb")
        overlay.toggle();
        $(".navigation").toggleClass("open-mb");
    });
    overlay.click(function () {
       $(".view-menu-mb").trigger('click');
    });

    //close file name-uploadfile
    $(".close-file").click(function () {
        $(this).parent(".file-return").remove();
    });

    login_pp();

    // $('.search-select2').select2();

    // js show hide table
    // $(".zone-extend").hide();
    // $('.zone-narrow').click(function () {
    //     $(this).parent().find('.zone-extend').toggle();
    //
    // });

    // var count = $('.table-wrap .table-block table tbody tr.has-group td > div.ex-cls').length;
    // if(count > 3){
    //     $('.ex-cls:nth-child(n+4)').hide();
    //     $('.btn-collapse').hide();
    // }
    // else{
    //     $('.btn-extend-collapse').hide();
    // }
    //
    // $('.btn-extend').click(function () {
    //     $(this).hide();
    //     $(this).next().show();
    //     $(this).closest('tr.has-group').find('.ex-cls:nth-child(n+4)').show();
    //
    //     $(this).closest('tr.has-group').find('.ex-cls:nth-child(3)').css('border-bottom','1px solid #eaeaea');
    //     $(this).parent('.btn-extend-collapse').prev().css('border-bottom','none');
    // });
    // $('.btn-collapse').click(function () {
    //     $(this).hide();
    //     $(this).prev().show();
    //     $(this).closest('tr.has-group').find('.ex-cls:nth-child(n+4)').hide();
    //     $(this).parent('.btn-extend-collapse').prev('.ex-cls:nth-child(3)').css('border-bottom','none')
    //     $(this).closest('tr.has-group').find('.ex-cls:nth-child(3)').css('border-bottom','none');
    // })

});


$(window).resize(function () {
    login_pp();
});
// fc menumb
function login_pp() {
    if (window.innerWidth < 992) {
        $(".info-user-wrap").hide();
        $(".user-block").click(function () {
            $(".info-user-wrap").toggle();
            $(this).toggleClass("btn-lightx")
        });

        // js dropdownmenu
        $(".nav-dropdown").hide();
        $('.hasdropdown').click(function () {
            $(".nav-dropdown").slideUp();
            $('.hasdropdown').removeClass('rotate-up');
            if(!$(this).children('ul.nav-dropdown').is(":visible"))
            {
                $(this).children('ul.nav-dropdown').slideDown();
                $(this).addClass('rotate-up');
            }
        });
        // Check if clicked outside target
        if (!($(event.target).closest(".user-block").length)) {
            // Hide target
            $(".info-user-wrap").hide();

        }
    }
}

//effect button
$(function($) {

    $(document).on("mousedown", "[data-ripple]", function(e) {

        var $self = $(this);

        if($self.is(".btn-disabled")) {
            return;
        }
        if($self.closest("[data-ripple]")) {
            e.stopPropagation();
        }

        var initPos = $self.css("position"),
            offs = $self.offset(),
            x = e.pageX - offs.left,
            y = e.pageY - offs.top,
            dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
            $ripple = $('<div/>', {class:"ripple", appendTo:$self});

        if(!initPos || initPos==="static") {
            $self.css({position:"relative"});
        }

        $('<div/>', {
            class : "rippleWave",
            css : {
                background: $self.data("ripple"),
                width: dia,
                height: dia,
                left: x - (dia/2),
                top: y - (dia/2),
            },
            appendTo : $ripple,
            one : {
                animationend : function(){
                    $ripple.remove();
                }
            }
        });
    });

});
