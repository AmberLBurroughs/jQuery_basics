// PROBLEM: the menu is not responsive
// SOLUTION: toggle navigation for smaller screens

// create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);
// circle over each menu link
$("#menu a ").each(function(){
  var $anchor = $(this);
  // create an option
  var $option = $("<option></option>");

  // selected option depending on current page
    if($anchor.parent().hasClass("selected")){
      $option.prop("selected", true);
    };

  // option value is the href
  $option.val($anchor.attr("href"));
  // options text is txt of link
  $option.text($anchor.text());
  // append option to select
  $select.append($option);
});

// create a button
var $button = $("<button>Go</button>");
$("#menu").append($button);
//bind click to button
$button.click(function(){
  //go to select location on click
  window.location = $select.val();
});
