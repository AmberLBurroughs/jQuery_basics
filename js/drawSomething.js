// no user interaction, no change to canvas
// when user interacts with buttons and canvas cause events to happen
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

// when clicking on control li
$(".controls").on("click", "li", function(){
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
 function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

// when color range changed
 $("input[type=range]").change(changeColor);

// when add color is clicked
$("#addNewColor").click(function(){
  // append color to controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  // select new color that is added
  $newColor.click();

});

// on mouse even on canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  // draw lines
  if(mouseDown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke(); // draws the line
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
});

