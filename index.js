// Salutation personnalisée :
// Écrivez un programme qui demande à l'utilisateur son prénom.
// Affichez une salutation telle que "Bonjour, [prénom] !".

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout)
/* rl.question('Quel est votre prénom ? ', (prenom) => {
    console.log(`Bonjour ${prenom} !`)
    rl.close();
}) */

// Calculatrice simple :
// Demandez à l'utilisateur deux nombres.
// Demandez à l'utilisateur une opération (addition, soustraction, multiplication, division).
// Affichez le résultat de l'opération.

/* 

const firstNumber = [];
const secondNumber = [];
const op = [];
let r = [];


rl.question('Donnez-moi un nombre', (nbr1) => {
    firstNumber.push(nbr1)
    rl.question('Donnez moi un deuxième nombre', (nbr2) => {
        secondNumber.push(nbr2);
        rl.question('Quelle sera l\'opérateur ?', (operator) => {
            op.push(operator);

            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);

            switch (operator) {
                case '+':
                    result = num1 + num2
                    r.push(result);
                    break;
                case '-':
                    result = num1 - num2
                    r.push(result);
                case '*':
                    result = num1 * num2
                    r.push(result);
                case '/':
                    if(num2 !== 0) {
                        result = num1 / num2
                        r.push(result);
                    }else {
                        console.log('Erreur division par 0 impossible')
                        rl.close()
                        return;
                    }
                    break;
                default: 
                    console.log('Opérateur non reconnu');
                    rl.close();
                    return;
            }

            console.log(`${firstNumber} ${op} ${secondNumber} = ${r}`)
            rl.close();
        })
    })
})
*/

// Table de multiplication :
// Demandez à l'utilisateur un nombre.
// Affichez la table de multiplication pour ce nombre de 1 à 10.


/*
rl.question('donnez moi un nombre ', (nbr) => {
    
    for(let i = 0; i<=10; i++){
        console.log(`${nbr} * ${i} = ${nbr*i}`)
    }
    rl.close();
})
*/


// Palindrome :
// Demandez à l'utilisateur un mot.
// Vérifiez si ce mot est un palindrome (il se lit de la même manière dans les deux sens, comme "radar" ou "kayak").

/*rl.question('donnez moi un mot :', (mot) => {

    let motTest = mot.split('');

    let reverseWord = motTest.reverse().join('');

    if(reverseWord === mot){
        console.log('Ce mot est un palindrome ! GG')
    }else{
        console.log("Ce n'est pas un palindrome")
    }

    rl.close();
})

// Autre méthode
rl.question('donnez moi un mot :', (mot) => {

   let estUnPalindrome = true;

   for(let i = 0 ; i < mot.length / 2 ; i++){

        if(mot[i] !== mot[mot.length -1 - i]){
            estUnPalindrome = false;
            break;
        }

   }

   estUnPalindrome ? console.log('Ceci est un palindrome, GG !') : console.log("Ceci n'est pas un palindrome");

    rl.close();
})
*/

// Compteur de voyelles :
// Demandez à l'utilisateur une phrase ou un mot.
// Comptez et affichez le nombre de voyelles dans cette phrase ou ce mot.


rl.question('Donnez-moi un mot ou une phrase : ', (mot) => {

    const voyelles = ['a','e','i','o','u','y'];
    let nbrVoyelle = 0;

    for(let i = 0 ; i< mot.length ; i++){

        for(let y = 0; y<voyelles.length; y++){

            if(mot[i] === voyelles[y]){

                nbrVoyelle++;
            }


        }

    }

    console.log(nbrVoyelle);
    rl.close();


})




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