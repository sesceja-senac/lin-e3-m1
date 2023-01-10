
$(document).ready(function() {
    if(localStorage.getItem('lstvideo-intro')!=='true'){
      $('html').css('overflow', 'hidden')
      $('.backdrop').fadeIn()
    } 
    $('.botao-video').click(function(){
      $('.backdrop').fadeIn()
      $('html').css('overflow', 'hidden')
    })
    $('#fechar-video').click(function(){
      $('.backdrop').hide()
      $('html').css('overflow', 'unset')
      localStorage.setItem('lstvideo-intro', 'true')
    })
    
    window.setTimeout(function(){
      $('.aneis:nth-child(1)').removeClass("init");
      console.log("teste");
  }, 300)
  window.setTimeout(function(){
    $('.aneis:nth-child(2)').removeClass("init");
    console.log("teste");
}, 600)
window.setTimeout(function(){
  $('.aneis:nth-child(3)').removeClass("init");
  console.log("teste");
}, 900)
window.setTimeout(function(){
  $('.aneis:nth-child(4)').removeClass("init");
  console.log("teste");
}, 1200)
window.setTimeout(function(){
  $('.aneis:nth-child(5)').removeClass("init");
  console.log("teste");
}, 1500)
});
  