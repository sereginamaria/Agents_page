let AbilitiesMore = document.querySelector('.slider1-abilities-more');
let AbilitiesMoreSwitcher1 = false;
let AbilitiesMoreSwitcher2 = false;
let AbilitiesMoreSwitcher3 = false;
let AbilitiesMoreSwitcher4 = false;
let PlayerBGR1 = false;
let PlayerBGR2 = false;
let PlayerBGR3 = false;
let PlayerBGR4 = false;


$('.slider1-player-bgr1').on('click', function() {
    PlayerBGR1 = !PlayerBGR1;
    PlayerBGR2 = PlayerBGR3 = PlayerBGR4 = false;


    if ($('.slider1-player-bgr').hasClass('js-bgr')) {
        $('.slider1-player-bgr').removeClass('js-bgr');
    }

    if (PlayerBGR1) {
        $('.slider1-player-bgr1').addClass('js-bgr');
        TweenMax.to(AbilitiesMore, 1, {x: '2%', display: 'flex', ease: Back.easeOut});
        $('.player1-ability').css('display', 'flex');
        $('.player2-ability, .player3-ability, .player4-ability').css('display', 'none');
    }else{
        $('.slider1-player-bgr1').removeClass('js-bgr');
        TweenMax.to(AbilitiesMore,1,{x:'-200%',display: 'flex',ease:Power3.easeOut});
    }

});

$('.slider1-player-bgr2').on('click', function() {
    PlayerBGR2 = !PlayerBGR2;
    PlayerBGR1 = PlayerBGR3 = PlayerBGR4 = false;

    if ($('.slider1-player-bgr').hasClass('js-bgr')) {
        $('.slider1-player-bgr').removeClass('js-bgr')
    }

    if (PlayerBGR2) {
        $('.slider1-player-bgr2').addClass('js-bgr');
        TweenMax.to(AbilitiesMore, 1, {x: '2%', display: 'flex', ease: Back.easeOut});
        $('.player2-ability').css('display', 'flex');
        $('.player1-ability, .player3-ability, .player4-ability').css('display', 'none');
    }else{
        $('.slider1-player-bgr2').removeClass('js-bgr');
        TweenMax.to(AbilitiesMore,1,{x:'-200%',display: 'flex',ease:Power3.easeOut});
    }

});

$('.slider1-player-bgr3').on('click', function() {
    PlayerBGR3 = !PlayerBGR3;
    PlayerBGR1 = PlayerBGR2 = PlayerBGR4 = false;

    if ($('.slider1-player-bgr').hasClass('js-bgr')) {
        $('.slider1-player-bgr').removeClass('js-bgr');

    }

    if (PlayerBGR3) {
        $('.slider1-player-bgr3').addClass('js-bgr');
        TweenMax.to(AbilitiesMore, 1, {x: '2%', display: 'flex', ease: Back.easeOut});
        $('.player3-ability').css('display', 'flex');
        $('.player1-ability, .player2-ability, .player4-ability').css('display', 'none');
    }else{
        $('.slider1-player-bgr3').removeClass('js-bgr');
        TweenMax.to(AbilitiesMore,1,{x:'-200%',display: 'flex',ease:Power3.easeOut});
    }

});

$('.slider1-player-bgr4').on('click', function() {
    PlayerBGR4 = !PlayerBGR4;
    PlayerBGR1 = PlayerBGR2 = PlayerBGR3 = false;

    if ($('.slider1-player-bgr').hasClass('js-bgr')) {
        $('.slider1-player-bgr').removeClass('js-bgr')

    }

    if (PlayerBGR4) {
        $('.slider1-player-bgr4').addClass('js-bgr')
        TweenMax.to(AbilitiesMore, 1, {x: '2%', display: 'flex', ease: Back.easeOut});
        $('.player4-ability').css('display', 'flex');
        $('.player1-ability, .player2-ability, .player3-ability').css('display', 'none');

    }else{
        $('.slider1-player-bgr4').removeClass('js-bgr');
        TweenMax.to(AbilitiesMore,1,{x:'-200%',display: 'flex',ease:Power3.easeOut});
    }

});



