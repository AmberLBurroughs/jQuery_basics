// problem: poor user experience when clicking on image.
// solution: create lightbox for lg img, keep user on page.
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $dismissButton = $('<button id="exit">X</button>');
var $caption = $('<p></p>');

//Add An image to overlay
$overlay.append($image);

//Add a exit button to overlay
$overlay.append($dismissButton);


//When overlay button clicked
$dismissButton.click(function(){
  //Hide the overlay
  $overlay.hide(300);
});

//A caption to overlay
$overlay.append($caption);

//copies value of alt and sets to title alt.
$('#imgGallery img').each(function(index, element){
    var titleValue = $(element).attr('alt');
    $(element).attr('title', titleValue);
});

//Add overlay
$('body').append($overlay);

//Capture the click event on a link to an image
  $('#imgGallery a').click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr('href');
      //Update overlay with the image linked in the link
    $image.attr('src', imageLocation);

     //Show the overlay.
    $overlay.show();

    //Get child's alt attribute and set caption
    var captionText = $(this).children('img').attr('title');
    $caption.text(captionText);
  });

