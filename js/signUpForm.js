// hints are being shown when always even when valid
// toggle hints at appropriate times

//hide hints
$("form span").hide();

function passwordEvent(){
   // test if valid
  if($(this).val().length > 8) {
     // if true hide hints
    $(this).next().hide();
  } else{
     // else show hints
    $(this).next().show();
  }
}


// event listener on PW input
$("#password").focus(passwordEvent).keyup(passwordEvent);

// event listener on confirmation input

  // test if valid (match w/ PW input)
  // if true hide hints
    // else show hints
