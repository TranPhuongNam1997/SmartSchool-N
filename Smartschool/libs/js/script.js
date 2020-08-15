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
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() >= 300) {
    //         $('.header-gd').addClass('fixed');
    //         $('.container-main').addClass('pd-99');
    //
    //     } else {
    //         $('.header-gd').removeClass('fixed');
    //         $('.container-main').removeClass('pd-99');
    //     }
    // });

    $(window).scroll( () => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('.head-wrap').addClass('navShadow') : $('.head-wrap').removeClass('navShadow');
        // windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
    });


    // go top
    $("a[href='#top']").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('#go_top').show();
        }
        else {
            $('#go_top').hide();
        }
    });

    //js menu by javascript
    $('body').append("<div class='overlay'></div>");
    $('.btn-bars').click(function () {
        $('.overlay').toggle();
        $('.navigation').toggleClass('show');
    });

    //js select

    $('.field-select').click(function () {
        $(this).toggleClass('active');
    });
    $('.field-select').focusout(function () {
        $(this).removeClass('active');
    });

    //js datepicker
    // jQuery('.datepicker-gd').datetimepicker({
    //     timepicker:false,
    //     format: 'd/m/Y'
    // });




    //modal
    // ( function( window ) {
    //     'use strict';
    //
    //     function classReg( className ) {
    //         return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    //     }
    //     var hasClass, addClass, removeClass;
    //
    //     if ( 'classList' in document.documentElement ) {
    //         hasClass = function( elem, c ) {
    //             return elem.classList.contains( c );
    //         };
    //         addClass = function( elem, c ) {
    //             elem.classList.add( c );
    //         };
    //         removeClass = function( elem, c ) {
    //             elem.classList.remove( c );
    //         };
    //     }
    //     else {
    //         hasClass = function( elem, c ) {
    //             return classReg( c ).test( elem.className );
    //         };
    //         addClass = function( elem, c ) {
    //             if ( !hasClass( elem, c ) ) {
    //                 elem.className = elem.className + ' ' + c;
    //             }
    //         };
    //         removeClass = function( elem, c ) {
    //             elem.className = elem.className.replace( classReg( c ), ' ' );
    //         };
    //     }
    //
    //     function toggleClass( elem, c ) {
    //         var fn = hasClass( elem, c ) ? removeClass : addClass;
    //         fn( elem, c );
    //     }
    //
    //     var classie = {
    //         // full names
    //         hasClass: hasClass,
    //         addClass: addClass,
    //         removeClass: removeClass,
    //         toggleClass: toggleClass,
    //         // short names
    //         has: hasClass,
    //         add: addClass,
    //         remove: removeClass,
    //         toggle: toggleClass
    //     };
    //
    //     if ( typeof define === 'function' && define.amd ) {
    //         // AMD
    //         define( classie );
    //     } else {
    //         // browser global
    //         window.classie = classie;
    //     }
    //
    // })( window );
    //
    // var ModalEffects = (function() {
    //
    //     function init() {
    //
    //         var overlay = document.querySelector( '.md-overlay' );
    //
    //         [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {
    //
    //             var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
    //                 close = modal.querySelector( '.md-close' );
    //
    //
    //             function removeModal( hasPerspective ) {
    //                 classie.remove( modal, 'md-show' );
    //
    //                 if( hasPerspective ) {
    //                     classie.remove( document.documentElement, 'md-perspective' );
    //                 }
    //             }
    //
    //             function removeModalHandler() {
    //                 removeModal( classie.has( el, 'md-setperspective' ) );
    //             }
    //
    //             el.addEventListener( 'click', function( ev ) {
    //                 classie.add( modal, 'md-show' );
    //                 overlay.removeEventListener( 'click', removeModalHandler );
    //                 overlay.addEventListener( 'click', removeModalHandler );
    //
    //                 if( classie.has( el, 'md-setperspective' ) ) {
    //                     setTimeout( function() {
    //                         classie.add( document.documentElement, 'md-perspective' );
    //                     }, 25 );
    //                 }
    //             });
    //
    //             close.addEventListener( 'click', function( ev ) {
    //                 ev.stopPropagation();
    //                 removeModalHandler();
    //             });
    //
    //         } );
    //
    //     }
    //
    //     init();
    //
    // })();


    // hover tab
    // (function ($) {
    //     $(function () {
    //         $(document).off('click.bs.tab.data-api', '[data-hover="tab"]');
    //         $(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function () {
    //             $(this).tab('show');
    //         });
    //     });
    // })(jQuery);

    // Click event of the showPassword button
    $('.show-pass').on('click', function(){

        // Get the password field
        var passwordField = $('.password-ss');

        // Get the current type of the password field will be password or text
        var passwordFieldType = passwordField.attr('type');

        // Check to see if the type is a password field
        if(passwordFieldType == 'password')
        {
            // Change the password field to text
            passwordField.attr('type', 'text');

            // Change the Text on the show password button to Hide
            $(this).val('Hide');

            $('.show-pass .img-show-pass').hide();
            $('.show-pass .img-hide-pass').show();
        } else {
            // If the password field type is not a password field then set it to password
            passwordField.attr('type', 'password');

            // Change the value of the show password button to Show
            $(this).val('Show');
            $('.show-pass img.img-show-pass').show();
            $('.show-pass img.img-hide-pass').hide();
        }
    });
    $('.show-pass2').on('click', function(){

        // Get the password field
        var passwordField = $('#re_password');

        // Get the current type of the password field will be password or text
        var passwordFieldType = passwordField.attr('type');

        // Check to see if the type is a password field
        if(passwordFieldType == 'password')
        {
            // Change the password field to text
            passwordField.attr('type', 'text');

            // Change the Text on the show password button to Hide
            $(this).val('Hide');

            $('.show-pass2 .img-show-pass').hide();
            $('.show-pass2 .img-hide-pass').show();
        } else {
            // If the password field type is not a password field then set it to password
            passwordField.attr('type', 'password');

            // Change the value of the show password button to Show
            $(this).val('Show');
            $('.show-pass2 img.img-show-pass').show();
            $('.show-pass2 img.img-hide-pass').hide();
        }
    });

    $('.wrap-help').hide();
    $('#use-help').click(function () {
        $('.wrap-help').show();
        // $('.main-modal').animate({scrollBottom: 0});
        $(".main-modal").animate({scrollTop: 300}, "slow");
        return false;

    });
    $('#close-help').click(function () {

        $('.wrap-help').hide();
    });


    //js bai hoc

    $('.block-learning').click(function () {
        $('.learning-lesson').toggleClass('active');
    });

    //videoanimation();

    (function($){
        $(window).on("load",function(){

            /* Page Scroll to id fn call */
            $(".list-question-nb a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
                highlightSelector:".list-question-nb a",
                top: "50%"
            });

        });
    })(jQuery);

    // changState();
    // $('.tabcontent').css("display","none");

    // $(".item-help").click(function(){
    //     $('.item-help').removeClass('acitve');
    //     // $(this).addClass('active');
    //
    //     // if(!$(this).children('ul.nav-dropdown').is(":visible"))
    //     //     {
    //     //         $(this).children('ul.nav-dropdown').slideDown();
    //     //         $(this).addClass('rotate-up');
    //     //     }
    //
    // });

    openClass();
    // $('.tab-content.active').style.display = "block";



});




//js hover tab
function openClass(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

        //
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//check state on tap

function changeState()
{
    if ($('.item-anwer input').checked)
    {
        trangthai = 1;
        console.log('da thay doi trang thai')
    } else {
        trangthai = 0;
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

//effect video

function videoanimation() {
    //js video

    //ELEMENT SELECTORS
    var player = document.querySelector('.player');
    var video = document.querySelector('#video');
    var playBtn = document.querySelector('.play-btn');
    var volumeBtn = document.querySelector('.volume-btn');
    var volumeSlider = document.querySelector('.volume-slider');
    var volumeFill = document.querySelector('.volume-filled');
    var progressSlider = document.querySelector('.progress-x');
    var btnplayvd = document.getElementsByClassName('btn-playvd')[0];
    var progressFill = document.querySelector('.progress-filled');
    var textCurrent = document.querySelector('.time-current');
    var textTotal = document.querySelector('.time-total');
    var speedBtns = document.querySelectorAll('.speed-item');
    var fullscreenBtn =document.querySelector('.fullscreen');
    //GLOBAL VARS
    let lastVolume = 1;
    let isMouseDown = false;

    //PLAYER FUNCTIONS
    function togglePlay() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        playBtn.classList.toggle('paused');
    }
    function togglePlayBtn() {
        playBtn.classList.toggle('playing');
    }

    function toggleMute() {
        if(video.volume) {
            lastVolume = video.volume;
            video.volume = 0;
            volumeBtn.classList.add('muted');
            volumeFill.style.width = 0;
        } else {
            video.volume = lastVolume;
            volumeBtn.classList.remove('muted');
            volumeFill.style.width = `${lastVolume*100}%`;
        }
    }
    function changeVolume(e) {
        volumeBtn.classList.remove('muted');
        let volume = e.offsetX/volumeSlider.offsetWidth;
        volume<0.1 ? volume = 0 : volume=volume;
        volumeFill.style.width = `${volume*100}%`;
        video.volume = volume;
        if (volume > 0.7) {
            volumeBtn.classList.add('loud');
        } else if (volume < 0.7 && volume > 0) {
            volumeBtn.classList.remove('loud');
        } else if (volume == 0) {
            volumeBtn.classList.add('muted');
        }
        lastVolume = volume;
    }
    $('#video').click(function () {
        btnplayvd.classList.toggle('hide');
    });
    function neatTime(time) {
        // var hours = Math.floor((time % 86400)/3600)
        var minutes = Math.floor((time % 3600)/60);
        var seconds = Math.floor(time % 60);
        seconds = seconds>9?seconds:`0${seconds}`;
        return `${minutes}:${seconds}`;
    }
    function updateProgress(e) {
        progressFill.style.width = `${video.currentTime/video.duration*100}%`;
        textCurrent.innerHTML = `${neatTime(video.currentTime)} / ${neatTime(video.duration)}`;
        // textTotal.innerHTML = neatTime(video.duration);
        // console.log(progressFill.style.width);
    }
    function setProgress(e) {
        const newTime = e.offsetX/progressSlider.offsetWidth;
        progressFill.style.width = `${newTime*100}%`;
        video.currentTime = newTime*video.duration;
    }
    function launchIntoFullscreen(element) {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    function exitFullscreen() {
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
    var fullscreen = false;
    function toggleFullscreen() {
        fullscreen? exitFullscreen() : launchIntoFullscreen(player)
        fullscreen = !fullscreen;
    }
    function setSpeed(e) {
        console.log(parseFloat(this.dataset.speed));
        video.playbackRate = this.dataset.speed;
        speedBtns.forEach(speedBtn =>	speedBtn.classList.remove('active'));
        this.classList.add('active');
    }
    function handleKeypress(e) {
        switch (e.key) {
            case " ":
                togglePlay();
            case "ArrowRight":
                video.currentTime += 2;
            case "ArrowLeft":
                video.currentTime -= 2;
            default:
                return;
        }
    }
    //EVENT LISTENERS
    playBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', togglePlayBtn);
    video.addEventListener('pause', togglePlayBtn);
    video.addEventListener('ended', togglePlayBtn);
    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('canplay', updateProgress);
    volumeBtn.addEventListener('click', toggleMute);
    this.addEventListener('mousedown', () => isMouseDown = true);
    this.addEventListener('mouseup', () => isMouseDown = false);
    // volumeSlider.addEventListener('mouseover', changeVolume);
    volumeSlider.addEventListener('click', changeVolume);
    progressSlider.addEventListener('click', setProgress);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    speedBtns.forEach(speedBtn => {
        speedBtn.addEventListener('click', setSpeed);
    });
    this.addEventListener('keydown', handleKeypress);
}

