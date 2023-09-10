// Salutation personnalisée :

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout)
rl.question('Quel est votre prénom ? ', (prenom) => {
    console.log(`Bonjour ${prenom} !`)
    rl.close();
})

// Écrivez un programme qui demande à l'utilisateur son prénom.
// Affichez une salutation telle que "Bonjour, [prénom] !".
// Calculatrice simple :

// Demandez à l'utilisateur deux nombres.
// Demandez à l'utilisateur une opération (addition, soustraction, multiplication, division).
// Affichez le résultat de l'opération.
// Table de multiplication :

// Demandez à l'utilisateur un nombre.
// Affichez la table de multiplication pour ce nombre de 1 à 10.
// Palindrome :

// Demandez à l'utilisateur un mot.
// Vérifiez si ce mot est un palindrome (il se lit de la même manière dans les deux sens, comme "radar" ou "kayak").
// Compteur de voyelles :

// Demandez à l'utilisateur une phrase ou un mot.
// Comptez et affichez le nombre de voyelles dans cette phrase ou ce mot.
// Liste de courses :

// Créez une liste vide de courses.
// Permettez à l'utilisateur d'ajouter des articles à la liste, d'en supprimer ou d'afficher la liste.
// Nombre pair ou impair :

// Demandez à l'utilisateur un nombre.
// Dites à l'utilisateur si le nombre est pair ou impair.
// Jeu de devinette :

// Choisissez un nombre aléatoire entre 1 et 100.
// Demandez à l'utilisateur de deviner le nombre.
// Donnez-lui des indices ("trop haut !" ou "trop bas !") jusqu'à ce qu'il devine correctement.
// Conversion de température :

// Demandez à l'utilisateur une température en Celsius.
// Convertissez cette température en Fahrenheit et affichez-la.
// Tri de nombres :

// Demandez à l'utilisateur de saisir une série de nombres (par exemple, séparés par des virgules).
// Triez ces nombres et affichez-les dans l'ordre croissant.