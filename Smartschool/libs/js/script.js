// $( document ).ready(function() {

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
    // $('select').click(function () {
    //     $(this).toggleClass('select-icon-up');
    // });
    // $('select').focusout(function () {
    //     $(this).removeClass('select-icon-up')
    // });
    //
    // //menubar
    // var overlay = $("<div class='overlay'></div>")
    // $("body").prepend(overlay);
    //
    // $(".view-menu-mb").click(function () {
    //     $(this).toggleClass("change-icon-mb")
    //     overlay.toggle();
    //     $(".navigation").toggleClass("open-mb");
    // });
    // overlay.click(function () {
    //    $(".view-menu-mb").trigger('click');
    // });
    //
    // //close file name-uploadfile
    // $(".close-file").click(function () {
    //     $(this).parent(".file-return").remove();
    // });
    //
    // login_pp();

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

// });

//
// $(window).resize(function () {
//     login_pp();
// });
// // fc menumb
// function login_pp() {
//     if (window.innerWidth < 992) {
//         $(".info-user-wrap").hide();
//         $(".user-block").click(function () {
//             $(".info-user-wrap").toggle();
//             $(this).toggleClass("btn-lightx")
//         });
//
//         // js dropdownmenu
//         $(".nav-dropdown").hide();
//         $('.hasdropdown').click(function () {
//             $(".nav-dropdown").slideUp();
//             $('.hasdropdown').removeClass('rotate-up');
//             if(!$(this).children('ul.nav-dropdown').is(":visible"))
//             {
//                 $(this).children('ul.nav-dropdown').slideDown();
//                 $(this).addClass('rotate-up');
//             }
//         });
//         // Check if clicked outside target
//         if (!($(event.target).closest(".user-block").length)) {
//             // Hide target
//             $(".info-user-wrap").hide();
//
//         }
//     }
// }
$(document).ready(function () {
   $('.wrap-search i').click(function () {
       $('.block-seacrh').toggle();
   });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.header-gd').addClass('fixed');
        } else {
            $('.header-gd').removeClass('fixed');
        }
    });

    $(document).ready(function() {
        $("a[href='#top']").click(function () {
            $("html, body").animate({scrollTop: 0}, "slow");
            return false;
        });
    });

    // go top
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('#go_top').show();
        }
        else {
            $('#go_top').hide();
        }
    });

    //modal
    ( function( window ) {
        'use strict';

        function classReg( className ) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }
        var hasClass, addClass, removeClass;

        if ( 'classList' in document.documentElement ) {
            hasClass = function( elem, c ) {
                return elem.classList.contains( c );
            };
            addClass = function( elem, c ) {
                elem.classList.add( c );
            };
            removeClass = function( elem, c ) {
                elem.classList.remove( c );
            };
        }
        else {
            hasClass = function( elem, c ) {
                return classReg( c ).test( elem.className );
            };
            addClass = function( elem, c ) {
                if ( !hasClass( elem, c ) ) {
                    elem.className = elem.className + ' ' + c;
                }
            };
            removeClass = function( elem, c ) {
                elem.className = elem.className.replace( classReg( c ), ' ' );
            };
        }

        function toggleClass( elem, c ) {
            var fn = hasClass( elem, c ) ? removeClass : addClass;
            fn( elem, c );
        }

        var classie = {
            // full names
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            // short names
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
        };

        if ( typeof define === 'function' && define.amd ) {
            // AMD
            define( classie );
        } else {
            // browser global
            window.classie = classie;
        }

    })( window );

    var ModalEffects = (function() {

        function init() {

            var overlay = document.querySelector( '.md-overlay' );

            [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

                var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
                    close = modal.querySelector( '.md-close' );


                function removeModal( hasPerspective ) {
                    classie.remove( modal, 'md-show' );

                    if( hasPerspective ) {
                        classie.remove( document.documentElement, 'md-perspective' );
                    }
                }

                function removeModalHandler() {
                    removeModal( classie.has( el, 'md-setperspective' ) );
                }

                el.addEventListener( 'click', function( ev ) {
                    classie.add( modal, 'md-show' );
                    overlay.removeEventListener( 'click', removeModalHandler );
                    overlay.addEventListener( 'click', removeModalHandler );

                    if( classie.has( el, 'md-setperspective' ) ) {
                        setTimeout( function() {
                            classie.add( document.documentElement, 'md-perspective' );
                        }, 25 );
                    }
                });

                close.addEventListener( 'click', function( ev ) {
                    ev.stopPropagation();
                    removeModalHandler();
                });

            } );

        }

        init();

    })();
});
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

