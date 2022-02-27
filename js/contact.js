//inspired by lesson on form validation
const form = document.querySelector("#form");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#fullName-error")
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error")
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error")
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error")
const message = document.querySelector(".message");


form.addEventListener("submit", validateContactForm);

function validateContactForm(event) {
  event.preventDefault();

  if(checkLength(fullName.value, 0)){
    fullNameError.style.display ="none";
  } else {
    fullNameError.style.display ="block";
  }

  if(checkLength(subject.value, 10)){
    subjectError.style.display ="none";
  } else {
    subjectError.style.display ="block";
    
  }

  if(checkEmail(email.value)){
    emailError.style.display ="none";
  } else {
    emailError.style.display ="block";
  }

  if(checkLength(address.value, 25)){
    addressError.style.display ="none";
  } else {
    addressError.style.display ="block";
  }

  successMessage ();
  
}

// Level 2 - Process
function successMessage () {
  if (checkLength(fullName.value, 0) && checkLength(subject.value, 10) && checkEmail(email.value) && checkLength(address.value, 25)) {
    message.style.display = "block";
    form.reset();
  } else {
    message.style.display = "none";
  }
}

function checkLength (value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
  }
