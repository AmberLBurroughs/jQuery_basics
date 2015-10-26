// problem: poor user experience when clicking on image.
// solution: create lightbox for lg img, keep user on page.

var $overlay = $("<div id="overlay"></div>");

//Add overlay
$("body").append($overlay);
  //An image to overlay
 //A caption to overlay

//Capture the click event on a link to an image
  $("#imgGallery a").click(function(event){
    event.preventDefault();
    var href = $(this).attr("href");
    console.log(href);
  //Update overlay with the image linked in the link
  //Show the overlay.
  //Get child's alt attribute and set caption
  });
//When overlay is clicked
  //Hide the overlay
