// problem: poor user experience when clicking on image.
// solution: create lightbox for lg img, keep user on page.
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $dismissButton = $('<button id="exit">X</button>');

//Add An image to overlay
$overlay.append($image);

//Add a exit button to overlay
$overlay.append($dismissButton);


//When overlay button clicked
$dismissButton.click(function(){
  //Hide the overlay
  $overlay.hide(300);
});

//Add overlay
$('body').append($overlay);

 //A caption to overlay

//Capture the click event on a link to an image
  $('#imgGallery a').click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr('href');
      //Update overlay with the image linked in the link
    $image.attr('src', imageLocation);

     //Show the overlay.
    $overlay.show();

    //Get child's alt attribute and set caption

  });

