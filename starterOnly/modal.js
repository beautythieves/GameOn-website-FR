function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBody = document.querySelector(".modal-body");
const form = document.getElementById("reserve");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity"); /* nombre de tournois*/
const city = document.getElementsByName("location");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form and reset datas in the form
function closeModal() {
  modalbg.style.display = "none";
  form.reset();
}
// if click outside the modal, the modal close okay!!!
modalbg.addEventListener("click", (event) => {
  const clickInsideModalBody = event.target.closest(".modal-body");
  if (!clickInsideModalBody) {
    closeModal();
  }
});
// submit the form when click on "fermer" modal button
document.querySelector(".btn-submit").addEventListener("click", submitForm);
function submitForm(event) {
  event.preventDefault();
  event.stopPropagation();
  form.submit();
}

/* when submit form => function validateform start*/
document.querySelector(".btn-validate").addEventListener("click", validateForm);

function validateForm(event) {
  event.preventDefault();
  event.stopPropagation();
  /* array with all the conditions to validate the form*/
  const conditions = [
    validateFirstName(),
    validateLastName(),
    validateEmail(),
    validateRadio(),
    validateTournament(),
    validateDate(),
  ];
  if (conditions.filter((cond) => !cond).length) {
    console.log("Formulaire invalide");
    return;
  }
  console.log("Formulaire valide");
  greetings();
}

function greetings() {
  document.querySelector("#greetings").style.display = "block";
  form.style.display = "none";
}
/**
 * FUNCTION VALIDATION FIRST NAME OK
 *
 * @return  {Boolean}  true if  valid, if not false
 */
function validateFirstName() {
  const regexFirstName = /^[A-Z a-z]{2,25}$/; /*min 2 types*/
  return validateField(
    firstName,
    regexFirstName,
    "Veuillez entrez un prénom valide"
  );
}

//FUNCTION VALIDATION NAME AND ERROR MESAGE OK!!!
function validateLastName() {
  const regexLastName = /^[A-Z a-z]{2,25}$/; /*min 2 types*/
  return validateField(
    lastName,
    regexLastName,
    "Veuillez entrez un nom valide"
  );
}

//FUNCTION VALIDATION EMAIL AND ERROR MESSAGE OK!!!
function validateEmail() {
  const regexEmail =
    /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  return validateField(email, regexEmail, "Veuillez entrez un courriel valide");
}

function setDateLimits() {
  const dateToday = new Date();
  const day = dateToday.getDate(); /*  day of this month  */
  console.log(day);
  const month =
    dateToday.getMonth() +
    1; /* month of this year "+1" because return "0" for january*/
  const year = dateToday.getFullYear(); /* this year*/
  let date = new Date(`${year - 18}-${month}-${day}`)
    .toISOString()
    .split("T")[0];
  console.log(birthdate, date);
  birthdate.setAttribute("max", date);
  date = new Date(`${year - 100}-${month}-${day}`).toISOString().split("T")[0];
  console.log(birthdate, date);
  birthdate.setAttribute("min", date);
}

function validateDate() {
  const parent = birthdate.parentNode;
  let isValid = true;
  const selectedDate = new Date(birthdate.value);
  const dateToday = new Date();
  const day = dateToday.getDate(); /* day of this month*/
  const month =
    dateToday.getMonth() +
    1; /*month of this year "+1" because return "0" for january*/
  const year = dateToday.getFullYear(); /* this year*/
  let date = new Date(`${year - 18}-${month}-${day}`);
  if (selectedDate > date) {
    isValid = false;
  } else {
    date = new Date(`${year - 100}-${month}-${day}`);
    if (selectedDate < date) {
      isValid = false;
    }
  }
  if (!isValid) {
    birthdate.focus();
    parent.setAttribute("data-error", "Veuillez entrez une date valide");
    parent.setAttribute("data-error-visible", "true");
    return false;
  }
  parent.setAttribute("data-error-visible", "false");
  return true;
}

//FUNCTION VALIDATION NUMBER OF TOURNAMENTS OK!!!
function validateTournament() {
  const quantityTournament = document.querySelector("input[name='quantity']");
  const parent = document
    .querySelector(`input[name='quantity']`)
    .closest(`.formData`);
  console.log(parent);
  if (quantityTournament.value == "" || null) {
    quantity.focus();
    parent.setAttribute("data-error", "Veuillez entrez un nombre");
    parent.setAttribute("data-error-visible", "true");
    return false;
  }
  parent.setAttribute("data-error-visible", "false");
  return true;
}

// FUNCTION VALIDATION CITY CHOICE OK!!
function validateRadio() {
  const checkradio = document.querySelector("input[name='location']:checked");
  const parent = document
    .querySelector(`input[name='location']`)
    .closest(`.formData`);
  console.log(parent, "parent");
  if (checkradio != null) {
    parent.setAttribute("data-error-visible", "false");
    return true;
  }
  parent.setAttribute("data-error", "Veuillez choisir une ville");
  parent.setAttribute("data-error-visible", "true");
  return false;
}

function validateField(domElement, regex, message) {
  const parent = domElement.parentNode;
  console.log(parent, "parent1");
  if (domElement.value == "" || !regex.test(domElement.value)) {
    domElement.focus();
    parent.setAttribute("data-error", message);
    parent.setAttribute("data-error-visible", "true");
    return false;
  }
  parent.setAttribute("data-error-visible", "false");
  return true;
}

setDateLimits();
