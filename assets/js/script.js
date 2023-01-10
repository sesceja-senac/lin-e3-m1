$(document).ready(function() {   
    AOS.init();
    
    $('.btOnOF').click(function(){
        $(this).parent().toggleClass("isOn");
    })
    console.log("teste print");
})

$('.painel-container button').hover(function (){
    $(this).css('transform', 'scale(2)')
}, function (){
    $(this).css('transform', 'scale(1)')
})

$('.card-sesc').click(function(){
    if($('.card-sesc .active').css('display')!=='none'){
        $('.card-sesc .active').fadeOut()
        $('figcaption.active').fadeOut()
        window.setTimeout(function(){
        $('.card-sesc .hidden').fadeIn()
        $('figcaption.hidden').fadeIn()
    }, 500)
    } else if($('.card-sesc .hidden').css('display')!=='none'){
        $('.card-sesc .hidden').fadeOut()
        $('figcaption.hidden').fadeOut()
    window.setTimeout(function(){
        $('.card-sesc .active').fadeIn()
        $('figcaption.active').fadeIn()
    }, 500)
    }
    
})

