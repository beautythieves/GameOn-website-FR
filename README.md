# Projet GameOn
Pour ce projet, il s'agissait de finir la page d'accueil d'un site et d'implémenter des fonctionnalités dans la modale.
Les consignes étaient les suivantes:
1. Forkez ce repo disponible sur https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR ;
2. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.
3. Vous devez respecter les maquettes suivantes: https://www.figma.com/file/B7NKBDvSI18uoMLJgpnh48/UI-Design-GameOn-FR?node-id=106%3A630&t=YgXdMk2PexEljAD8-0
4. Vous devez régler cette ToDoList: https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/issues 
Plus précisément, il s'agisait de: 
Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. 
Corriger les erreurs d'affichage existantes.Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes). Ajouter confirmation quand envoi réussi. 
Dans le formulaire: Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :           "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    "Vous devez choisir une option."
    "Vous devez vérifier que vous acceptez les termes et conditions."
    "Vous devez entrer votre date de naissance."
    Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
    Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

    Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
    Les données doivent être saisies correctement :
    (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
    (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
    (3) L'adresse électronique est valide.
    (4) Pour le nombre de concours, une valeur numérique est saisie.
    (5) Un bouton radio est sélectionné.
    (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
    Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

Rapport de l'évaluateur suite à la soutenance:
Remarques sur l'évaluation

Compétences évaluées

En vous basant sur les critères d’évaluation dans le guide mentor du projet, définissez le statut d'acquisition de chaque compétence listée ci-dessous :

Validé - Expliquez pourquoi en partageant des retours constructifs

Non validé - Expliquez de façon constructive pourquoi et comment l’étudiant peut s’améliorer, en vous appuyant sur les critères d’évaluations

1. Programmer en JavaScript

Validé

Commentaires :

✅ Seul du Vanilla Javascript est utilisé.
✅ La modale se lance lorsque l'utilisateur clique sur le bouton de la page d’accueil.
✅ L'icône de fermeture de la modale (x) est fonctionnelle/codée pour fermer la modale.
✅ Le bouton de soumission du formulaire capture les données
✅ Les entrées erronées comportent des messages d'erreur spécifiques.
✅ Le formulaire n'est PAS effacé lorsque des erreurs sont présentes.
✅ Un formulaire validé avec des entrées correctes renvoie un message de réussite en sortie. 

Livrable

Points forts :

Decoupage du code js en fonctions courtes et commentées ;
Usage d'expressions régulières pour valider les données ;
Usage des data attribute pour afficher/masquer les messages d'erreurs 
Correction des issues sur l'interface ;

Axes d'amélioration :

Uniformiser les comentaires et ajouter sur toutes les fonctions ;
Eviter de mixer la gestion des evenements du dom entre le javascript et le html ;

Soutenance

Remarques :

Bonne présentation du travail, les directives ont bien été respectées.

