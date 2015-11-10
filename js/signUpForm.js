// hints are being shown when always even when valid
// toggle hints at appropriate times

//hide hints
$("form span").hide();

// event listener on PW input
$("#password").focus(function(){
 // test if valid
   if( $(this).val().length > 8){
    // if true hide hints


   }else{
   // else show hints

   }
});

// event listener on confirmation input
$("#confirm_password").
  // test if valid (match w/ PW input)
  // if true hide hints
    // else show hints
