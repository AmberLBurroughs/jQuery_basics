// hints are being shown when always even when valid
// toggle hints at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");
//hide hints
$("form span").hide();

function isUsernamePresent() {
  return $username.val().length > 0;
}

function isPasswordValid(){
  return $password.val().length > 8;
}

function arePasswordsMatching(){
  return $password.val() === $confirmPassword.val();
}

function canSubmit(){
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent(){
   // test if valid
  if (isPasswordValid()) {
     // if true hide hints
    $password.next().hide();
  } else {
     // else show hints
    $password.next().show();
  }
}

function confirmPasswordEvent(){
  // test if valid (match w/ PW input)
  var $hint1 = $confirmPassword.next();
  var $hint2 = $confirmPassword.next().next();

  if (arePasswordsMatching()){
    // if true hide hints
    $hint1.hide();
    $hint2.hide();
  } else if ($confirmPassword.val() === ""){
    // else show hints
    $hint1.show();
    $hint2.hide();
  } else {
    $hint1.hide();
    $hint2.show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

function usernameEvent() {
  if (isUsernamePresent()) {
    $username.next().hide();
  } else {
    $username.next().show();
  }
}

// event listener on PW input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

// event listener on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();

