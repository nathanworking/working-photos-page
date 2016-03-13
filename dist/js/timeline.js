$(document).ready(function() {

  // Mobile timeline open

  $(document).on('click', '.timeline-mobile__header', function() {
    $(this).parent().find('.timeline').toggle();
  });


  var timelineBlocks = $('.timeline__item'),
    offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    (!window.requestAnimationFrame)
      ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.timeline__item__content').addClass('is-hidden animated');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function(){
      if($(this).hasClass('timeline__item--left')) {
        ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.timeline__item__content').removeClass('is-hidden').addClass('bounceInLeft');
      } else {
        ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.timeline__item__content').removeClass('is-hidden').addClass('bounceInRight');
      }
    });
  }

});
