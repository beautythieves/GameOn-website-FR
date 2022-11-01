
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
console.log(formData, "infos");
const modalBody = document.querySelector(".modal-body");

const form = document.getElementById("reserve");

console.log(form, "reserve");
const firstName = document.getElementById("first");
console.log(firstName, "prenom");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById("quantity");/* nombre de tournois*/
const city = document.getElementsByName("location");

console.log(city);



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form and reset datas in the form
function closeModal() {
  modalbg.style.display = "none";
  document.getElementById("reserve").reset();
};
//close modal event
//modalBtn.forEach((btn) => btn.addEventListener("click", closeModal));



form.addEventListener("submit", validateForm)/* when submit form => function validateform start*/ 
// fonction validation du formulaire. 
function validateForm(event) {
  
  event.preventDefault();
  event.stopPropagation();
  console.log(event, "evenement");
  validateFirstName();
  validateLastName();
  validateEmail();
  validateRadio();
  validateTournament();
  setDateLimits();
  closeModal();
   };
  // console.log (validateForm(), "achemene")
   
  //!!!! reste le rechargement de la modale avec message de remerciement



//fonction validation du prénom et message erreur OK!!!
function validateFirstName() {
  const regexFirstName = /^[A-Z a-z]{2,25}$/;/*min 2 caracteres*/
  const parent = document.getElementById('first').parentNode;
  if (firstName.value == "" || !regexFirstName.test(firstName.value)) {
    firstName.focus();
    parent.setAttribute("data-error", "Veuillez entrez un prénom valide");
    parent.setAttribute("data-error-visible", "true");

  } else {
    parent.setAttribute("data-error-visible", "false");
  }
};
//fonction validation du nom et message erreur OK!!!
function validateLastName() {
  const regexLastName = /^[A-Z a-z]{2,25}$/;/*min 2 caracteres*/
  const parent = document.getElementById('last').parentNode;
  console.log(parent, "parent1");
  if (lastName.value == "" || !regexLastName.test(lastName.value)) {
    lastName.focus();
    parent.setAttribute("data-error", "Veuillez entrez un nom valide");
    parent.setAttribute("data-error-visible", "true");
  } else {
    parent.setAttribute("data-error-visible", "false");
  }
};

//fonction validation du courriel et message erreur OK!!!
function validateEmail() {
  const regexEmail = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  const parent = document.getElementById('email').parentNode;
  console.log(parent, "parent2");
  console.log(email.value);
  if (email.value == "" || !regexEmail.test(email.value)) {
    email.focus();
    parent.setAttribute("data-error", "Veuillez entrez un courriel valide");
    parent.setAttribute("data-error-visible", "true");
  } else {
    parent.setAttribute("data-error-visible", "false");
  }
};

function setDateLimits(){
  const dateToday = new Date();
    // console.log (dateToday);
  const day = dateToday.getDate() ;/* jour du mois en cours */
  // console.log (day);
  const month = dateToday.getMonth()+1;/* mois de l'année en cours"+1" car renvoie "0" pour janvier*/
  // console.log (month);
  const year = dateToday.getFullYear();/* année en cours*/
  // console.log (year);
  let date = new Date(`${year-18}-${month}-${day}`).toISOString().split("T")[0];
  console.log(birthdate, date);
  birthdate.setAttribute("max",date )
  date = new Date(`${year-100}-${month}-${day}`).toISOString().split("T")[0];
  console.log(birthdate, date);
  birthdate.setAttribute("min",date )
}



function getDBirthdate(){
// validation de la date de naissance

  /* récupération de la date précise actuelle  OK!!! */
  // const  = new Date();/* date précise lors de la session en cours*/

  
  /* récupération de la date de naisance saisie PROBLEME!!!*/
 


  //function validateAge() {
  
 console.log(birthdate.value, 'datenaissance', birthdate.isValid);
//}
}



console.log(quantity.value);
//validation du champ nombre de tournois OK!!!
function validateTournament() {
  const quantityTournament = document.querySelector("input[name='quantity']");
  const parent = document.querySelector(`input[name='quantity']`)
  .closest(`.formData`);
  console.log (parent);
  if (quantityTournament.value == "" || null ) {
    quantity.focus();
    parent.setAttribute("data-error", "Veuillez entrez un nombre");
    parent.setAttribute("data-error-visible", "true");
  } else {
    parent.setAttribute("data-error-visible", "false");
  }
  console.log(quantity.value);
};
// fonction validation de la ville (bouton radio) OK!!
//question Lionel: pourquoi ci, le focus ne marche pas et est inutile?
function validateRadio() {
  const checkradio = document.querySelector("input[name='location']:checked");
  const parent = document.querySelector(`input[name='location']`)
  .closest(`.formData`);
  console.log(parent, "parent")
    if(checkradio != null){  //Teste si une ville est cochée 
      parent.setAttribute("data-error-visible", "false");
      } else {
    parent.setAttribute("data-error", "Veuillez choisir une ville");
    parent.setAttribute("data-error-visible", "true");
    }
};



// message d'alerte confirmation de validation du formulaire
// document.getElementById("reserve").addEventListener("submit", function(e) {
//   e.preventDefault();



//   alert("Merci, votre réservation est effective");
// });



/* il faut que tous les champs soient remplis
et respectent les regex pour que la validation soit effective*/
// factoriser les elements


/*
function validate(elmDom) {
  //regle de validatio
  switch(elmDom.type){
    case "text" :
    console.log("...")
      break;
    default :
      break;
  }

  */
  //affichage


  // text : (content)=>{
  //   const regex = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
  //   console.log(content)
  //   // regex.test(content)
  // },
  // date : (content)=>{},
  // checkbox: (content)=>{},
  // radio: (content)=>{},
  // number: (content)=>{},
  // email: (content)=>{}
/*
}

function test(elm){
console.log("///",elm)
}

const inputs = document.querySelectorAll("input");
for (const input of inputs){
console.log(input.id,input.type )
// validations[input.type](input.value);


}

*/

setDateLimits();