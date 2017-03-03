$.noConflict();

jQuery(function ($) {
  $("html").removeClass("nojs");
  $("html").addClass("hasjs");

  // check for valid email 
  $("#email").on("keyup focus blur", function () {
    var currentValue = $(this).val();
    var validPattern = $(this).attr("pattern");
    if (currentValue.match(validPattern)) {
      $("#submit").addClass("active");
    } else {
      $("#submit").removeClass("active");
    }
  
  // empty out email field and refresh page without modifying url upon click
  $("#submit").click(function (event) {
    event.preventDefault();
    $("#email").val("");
    window.location.reload();
    
  });

});

});
 