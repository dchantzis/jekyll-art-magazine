$(window).load(function() {

  $('.mobile-nav-toggle-box').change(function() {
    if($(this).is(":checked")) {
      $(".main-wrapper").addClass('js-contract')
    } else {
      $(".main-wrapper").removeClass('js-contract');
    }
  });

  $('.posts-grid').masonry({
    itemSelector: '.post-grid-item',
    columnWidth: '.post-grid-sizer',
    fitWidth: true,
    percentPosition: true
  });

});
