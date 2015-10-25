//prevent spoilerphobes from seeing spoilers
//solution: hide spoilers & reveal them through user interaction

// - Hide spoiler
  $(".spoiler span").hide();
// - add a button / "mask"
  $(".spoiler").append("<button>Reveal Spoiler!</button>");
//3, When button pressed
  $("button").click(function(){
    // - when button clicked reveal spoiler
    $("this").prev().show();
   // - when clicked hide button
    $(this).remove();
  });

