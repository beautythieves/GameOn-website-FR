/* a faire: implémenter les données du formulaire
(1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
(2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
Les données doivent être saisies correctement :
(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
(3) L'adresse électronique est valide.
(4) Pour le nombre de concours, une valeur numérique est saisie.
(5) Un bouton radio est sélectionné.FAIT
(6) La case des conditions générales est cochée, 
l'autre case est facultative / peut être laissée décochée.
Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il
 ne passe pas la validation.FAIT
 */
//cela signifie quoi?



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


const reserve = document.getElementById("reserve");
console.log(reserve, "reserve");
const firstName = document.getElementById("first");
console.log(firstName, "prenom");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById("quantity");/* nombre de tournois*/
const city = document.getElementsByName("location");

console.log(city);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//const regexBirthDate = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;


//récupération des données des saisies des champs du formulaire
const submit = document.getElementById("reserve");



// fonction validation du formulaire. la date de naissance n'est pas concernée
//le nombre de tournoi n'est pas concerné (requis par défaut)
function validateForm() {
  event.preventDefault();
  event.stopPropagation();
  validateFirstName();
  validateLastName();
  validateEmail();
  validateRadio();
}
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

// validation de la date de naissance

  /* récupération de la date précise actuelle  OK!!! */
  const dateToday = new Date();/* date précise lors de la session en cours*/
  console.log (dateToday);
  const day = dateToday.getDate() ;/* jour du mois en cours */
  console.log (day);
  const month = dateToday.getMonth()+1;/* mois de l'année en cours"+1" car renvoie "0" pour janvier*/
  console.log (month);
  const year = dateToday.getFullYear();/* année en cours*/
  console.log (year);
  
  /* récupération de la date de naisance saisie PROBLEME!!!*/
  const dayOfBirth = new Date(value); 
  console.log (dayOfBirth, "date saisie");


  //function validateAge() {
  const birthDatePlayer = document.getElementById('birthdate').value;
 console.log(birthDatePlayer, 'datenaissance');
//}

console.log(quantity.value);
//validation du champ nombre de tournois PROBLEME!!!
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


function validate(date){
  var eighteenYearsAgo = moment().subtract(18, "years");
  var birthday = moment(date);
  console.log(birthday)

  if (!birthday.isValid()) {
      return "invalid date";    
  }
  else if (eighteenYearsAgo.isAfter(birthday)) {
      return "okay, you're good";    
  }
  else {
      return "sorry, no";    
  }
}
// fonction validation âge (plus de 18 ans, max 110 ans)
function validateBirthdate() {
  
}

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