// no user interaction, no change to canvas
// when user interacts with buttons and canvas cause events to happen
var color = $(".selected").css("background-color");

// when clicking on control li
$(".controls li").click(function(){
  // deselect sibling elements
  $(this).siblings().removeClass("selected");
  // select clicked elements
  $(this).addClass("selected");
  // cache current color here
  color = $(this).css("background-color");
});

// when clicking new color
$("#revealColorSelect").click(function(){
  // show or hide color select
  changeColor();
  $("#colorSelect").toggle();
});

// update the new color span
 function changeColor(){
   var r = $("#red").val();
   var g = $("#green").val();
   var b = $("#blue").val();
   $("#newColor").css("backround-color", "rgb(" + r +"," + g +"," + b +")");
}

// when color range changed
 $("input[type=range]").change(changeColor);

// when add color is clicked
  // append color to controls ul
  // select new color that is added

// on mouse even on canvas
  // draw lines
