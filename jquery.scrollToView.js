(function($){

  $.fn.scrollToView = function( options ){
  var defaults =
  {
      "target":"#Example",
      "speed":1000,
      "viewLevel":190
    };



    var settings = $.extend( {}, defaults, options);

    return this.each(function()
      {
        $(this).click(function()
          {
          //alert("good");
          //$vv = $(params.target).offset().top;
          //alert($vv);
          //$(params.target).css({'border':'solid red 2px'});
            $('html,body').animate(
              {
                scrollTop:$(settings.target).offset().top-settings.viewLevel
              },
                settings.speed
            );
          });

      });

  };

})(jQuery);
