/*Exercice : Vérification de symétrie dans un tableau
Objectif : Écrire un programme en JavaScript qui vérifie si un tableau est symétrique. Un tableau est considéré comme symétrique s'il est le même à l'endroit et à l'envers.

Instructions :

Demandez à l'utilisateur de fournir une série de nombres séparés par des virgules (par exemple : "1,2,3,2,1").
Convertissez cette chaîne en un tableau de nombres.
Vérifiez si ce tableau est symétrique.
Affichez un message indiquant si le tableau est symétrique ou non.
Conseils :

Utilisez une boucle pour parcourir la moitié du tableau.
Comparez les éléments du début et de la fin du tableau, tout comme vous l'avez fait pour le mot palindrome.
Si tous les éléments correspondent, le tableau est symétrique. Sinon, il ne l'est pas.
Exemple d'entrée et de sortie :

Entrée : "1,2,3,2,1"
Sortie : "Le tableau est symétrique."

Entrée : "1,2,3,4,5"
Sortie : "Le tableau n'est pas symétrique."

Essayez de résoudre cet exercice par vous-même en utilisant ce que vous avez appris sur la vérification de la symétrie !
*/

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Vérifie la symétrie d\'un tableau ', (nbr) => {

    console.log(nbr.split(','))

    const tab = nbr.split(',')

    let estSymetrique = true;

    for(let i = 0; i < tab.length / 2; i++){

        if(tab[i] !== tab[tab.length -1 -i]){

            estSymetrique = false;
            break;

        }

    }


    estSymetrique ? console.log('Ce tableau est symétrique') : console.log('Ce tableau n\'est pas symétrique');

    rl.close();


})