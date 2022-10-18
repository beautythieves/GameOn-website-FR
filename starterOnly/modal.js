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
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");/* nombre de tournois*/
const city = document.getElementsByName("location");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//regex statements for filling the form inutile car pattern dans le html
//const regexFirstName = /^[A-Z a-z]{2,25}$/;/*min 2 caracteres*/
//const regexName =  /^[A-Z a-z]{2,25}$/;/* min 2 caracteres*/
//const regexEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//const regexBirthDate = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;


 //récupération des données des saisies des champs du formulaire
const submit = document.getElementById("reserve");

//fonction qui renvoie vrai si l'argument est vide
const isRequired = value => value === '' ? false : true;

//fonction validation du prénom et message erreur
function validateFirstName() {
  if (firstName.value == ""){
    document.getElementById('fistError').innerHTML="Veuillez entrez un nom valide";  
    first.focus(); 
    return false; 
}else{
    document.getElementById('fistError').innerHTML="";  
}
  };



//focntion choix du tournoi
 function validate() {
  var formValid = false;
  var i = 0;
  while (!formValid && i < location.length) {
      if (location[i].checked) formValid = true;
      i++;        
  }
  if (!formValid) alert("Veuillez choisir une ville");
 
};

// message d'alerte confirmation de validation du formulaire
document.getElementById("reserve").addEventListener("submit", function(e) {
  e.preventDefault();



  alert("Merci, votre réservation est effective");
});

/*FONCTION NE MARCHE PAS
function validateForm()  {
  

  if( regexFirstName.test(firstName) === false) {
      alert("Veuillez entrer un prénom");
  }
  if(regexName.test(lastName) === false) {
      alert("Veuillez entrer un nom");
  }
  if(regexEmail.test(email) === false) {
    alert ("Veuillez entrer un email");
  }
  if(regexBirthDate.test(birthdate) === false) {
      alert ("Veuillez entrer une date de naissance");
  }
  if (quantity === "") {
    alert ("Veuillez renseigner un nombre y compris 0");
  }
  
  return true;
};
console.log(validateForm)
*/

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