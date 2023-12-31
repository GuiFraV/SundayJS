/*

Exercice : Recherche Binaire d'un Élément dans une Liste Triée

Vous avez une liste triée d'entiers et un nombre spécifique que vous devez trouver dans cette liste. Utilisez la recherche binaire pour déterminer si le nombre est présent dans la liste et, si oui, renvoyez son index. Si le nombre n'est pas dans la liste, renvoyez -1.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : une liste triée d'entiers et un entier cible à rechercher.
Implémentez l'algorithme de recherche binaire pour trouver l'index de l'entier cible dans la liste.
Si l'entier cible est trouvé dans la liste, retournez son index. Sinon, retournez -1.
Exemple d'entrée et de sortie :

Entrée : liste = [1, 3, 5, 7, 9, 11], cible = 5

Sortie : 2 (car 5 est à l'index 2 dans la liste)

Entrée : liste = [1, 3, 5, 7, 9, 11], cible = 6

Sortie : -1 (car 6 n'est pas présent dans la liste)

Cet exercice vous permettra de pratiquer la mise en œuvre de base de la recherche binaire, un algorithme efficace pour la recherche dans les listes triées.

*/

// const liste = [1, 3, 5, 7, 9, 11];

function binarySearch(olist, target){

    let low = 0;
    let high = olist.length -1;

    while(low <= high){

        let mid = Math.floor((low + high) / 2);
        let guess = olist[mid];

        if(guess === target){
            return mid;
        }

        if(guess > target){
            high = mid - 1;
        }else{
            low = mid + 1;
        }

        
        
    }
    return -1;

}

// console.log(binarySearch(liste, 11))



/*

Exercice : Trouver le Point de Changement dans une Liste Triée en Rotation

Imaginez que vous avez une liste triée d'entiers qui a été "rotée" à un certain point. Par exemple, si la liste triée originale est [1, 2, 3, 4, 5, 6] et qu'elle est rotée à partir de l'index 3, elle devient [4, 5, 6, 1, 2, 3]. Votre tâche est de trouver l'index où cette rotation a eu lieu en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend une liste triée en rotation en tant qu'entrée.
Utilisez la recherche binaire pour trouver l'index du "point de changement", c'est-à-dire l'endroit où l'élément suivant est inférieur à l'élément actuel.
Retournez l'index de cet élément. Si la liste n'est pas rotée (c'est-à-dire qu'elle est triée normalement), retournez 0.
Exemple d'entrée et de sortie :

Entrée : liste = [4, 5, 6, 1, 2, 3]
Sortie : 3 (car l'élément à l'index 3 est 1, qui est inférieur à 6 à l'index 2)

*/

// const l = [4, 5, 6, 1, 2, 3]
// const l = [1, 2, 3, 4, 5, 6]

// const rotation = (liste) => {
//     let low = 0;
//     let high = liste.length -1;
//     while(low <= high){
//         let mid = Math.floor((low + high)/2);
//         let item = liste[mid];
//         let rotate = mid + 1;
      
//         if(item > liste[rotate]){
//             return rotate;
//         }else{
//             return 0;
//         }
//     }
// }

// console.log(rotation(l));

// Correction : 

const rotation = (liste) => {


    let low = 0;
    let high = liste.length -1

    while (low <= high){

        let mid = Math.floor((low + high) / 2);

        if(liste[mid] > liste[mid +1]){
            return mid + 1
        }else if(liste[low] < liste[mid]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return 0;
}

// console.log(rotation(l))


/*

    Exercice : Trouver le Minimum dans une Liste Triée en Rotation

    Supposons que vous avez une liste d'entiers qui a été triée en ordre croissant, puis rotée à un certain point. Par exemple, si la liste triée originale est [1, 2, 3, 4, 5] et qu'elle est rotée à partir de l'index 2, elle devient [3, 4, 5, 1, 2]. Votre tâche est de trouver le plus petit élément de cette liste en utilisant la recherche binaire.

    Instructions :

    Écrivez une fonction en JavaScript qui prend une liste triée en rotation en tant qu'entrée.
    Utilisez la recherche binaire pour trouver le plus petit élément de la liste.
    Retournez ce plus petit élément.
    Exemple d'entrée et de sortie :

    Entrée : liste = [3, 4, 5, 1, 2]
    Sortie : 1 (car c'est le plus petit élément dans la liste)

*/


// const findMin = (liste) => {

//     let low = 0;
//     let high = liste.length -1;

//     let lowMid = Math.floor((low + high) / 2);
//     let highMid = Math.floor((low + high) / 2);

//     while(low <= high){


//         if(liste[low] <= liste[lowMid]){
//             lowMid -= 1;
//         }

//         if(liste[highMid] >= liste[high]){
//             highMid += 1;
//         }
//     }

//     if(lowMid < highMid){
//         return liste[lowMid];
//     }else{
//         return liste[highMid];
//     }

// }



const findMind = (liste) => {


    let low = 0;
    let high = liste.length - 1;


    while(low <= high){

        let mid = Math.floor((low + high) / 2);


        if(liste[mid] >= liste[mid + 1]){
            return liste[mid+1];
        }

        if(liste[low] <= liste[mid]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }

    }
}

// console.log(findMind([3, 4, 5, 6, 1, 2]))


/*

Exercice : Trouver un Nombre dans un Array Trié par Rotation avec des Doublons

Supposons que vous avez un array d'entiers qui a été trié en ordre croissant, puis roté à un certain point. Contrairement à l'exercice précédent, cette fois, l'array peut contenir des doublons. Par exemple, [2, 3, 4, 5, 5, 1, 2, 2] est une version rotée de l'array [1, 2, 2, 2, 3, 4, 5, 5]. Votre tâche est de déterminer si un nombre cible donné est présent dans l'array.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un array trié puis roté et un entier cible à rechercher.
Utilisez une adaptation de la recherche binaire pour déterminer si le nombre cible est présent dans l'array.
Retournez true si le nombre est trouvé, sinon false.
Exemple d'entrée et de sortie :

Entrée : array = [2, 3, 4, 5, 5, 1, 2, 2], cible = 3

Sortie : true (car 3 est présent dans l'array)

Entrée : array = [2, 3, 4, 5, 5, 1, 2, 2], cible = 6

Sortie : false (car 6 n'est pas dans l'array)

*/

const findNumber = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (target === arr[mid]) {
            return true;
        }

        if (arr[low] <= arr[mid]) {
            if (target >= arr[low] && target < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (target > arr[mid] && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return false;
}

// console.log(findNumber([2, 3, 4, 5, 5, 1, 2, 2], 3))


/*

Exercice : Trouver le Pic dans un Array de Montagnes

Imaginez que vous avez un array d'entiers qui représente une série de montagnes. Les valeurs de l'array augmentent d'abord jusqu'à un certain point (le pic de la montagne), puis diminuent. Par exemple, l'array [1, 3, 5, 7, 8, 5, 3, 1] a un pic à l'indice 4 où la valeur est 8. Votre tâche est de trouver l'indice du pic en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend un array représentant une montagne en tant qu'entrée.
Utilisez la recherche binaire pour trouver l'indice du pic.
Retournez l'indice du pic.
Exemple d'entrée et de sortie :

Entrée : array = [1, 3, 5, 7, 8, 5, 3, 1]
Sortie : 4 (car l'élément à l'indice 4 est le pic de la montagne)
Cet exercice est intéressant car il vous demande d'identifier un élément spécifique dans un array qui suit une certaine tendance (augmentation puis diminution). Il teste votre capacité à utiliser la recherche binaire dans un contexte légèrement différent de la recherche d'un élément spécifique ou d'un minimum/maximum dans un array trié.

*/


// const a = [1, 3, 5, 7, 8, 5, 3, 1];
// const pic = (arr) => {

//     let low = 0;
//     let high = arr.length -1;

//     while(low <= high){

//         let mid = Math.floor((low + high) / 2);

//         console.log(mid)

//         if(arr[mid] <= arr[mid + 1]){
//             return arr[mid + 1];
//         }

//         if(arr[low] <= arr[mid]){
//             low = mid + 1;
//         }else{
//             high = mid - 1;
//         }
//     }
// }

// console.log(pic(a));
// Correction : 

const pic = (arr) => {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) { // Notez l'utilisation de < au lieu de <=
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] < arr[mid + 1]) {
            // Si le milieu est plus petit que son voisin droit,
            // le pic est à droite.
            low = mid + 1;
        } else {
            // Sinon, le pic est à gauche ou c'est le milieu.
            high = mid;
        }
    }

    // À la fin de la boucle, low et high convergent vers l'indice du pic.
    return low; // ou return high; car low == high
}

// const a = [1, 3, 5, 7, 8, 5, 3, 1];
// console.log(pic(a)); // Devrait afficher l'indice du pic, qui est 4


/*

Exercice : Trouver un Élément dans un Array Trié et Inversé

Imaginez que vous avez un array d'entiers qui a été trié en ordre décroissant. Votre tâche est de trouver un élément spécifique dans cet array en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un array trié en ordre décroissant et un entier cible à rechercher.
Implémentez la recherche binaire pour trouver l'index de cet entier cible dans l'array.
Si l'entier cible est trouvé, retournez son index. Sinon, retournez -1.
Exemple d'entrée et de sortie :

Entrée : array = [10, 8, 6, 4, 2], cible = 6

Sortie : 2 (car 6 est à l'index 2 dans l'array)

Entrée : array = [10, 8, 6, 4, 2], cible = 5

Sortie : -1 (car 5 n'est pas présent dans l'array)

Cet exercice est intéressant car il teste votre capacité à adapter l'algorithme de recherche binaire à un array trié dans l'ordre inverse (décroissant au lieu de croissant). Cela nécessite de modifier légèrement la façon dont vous comparez les éléments de l'array pendant la recherche.

*/

// const b = array = [10, 8, 6, 4, 2];

const findElement = (arr, target) => {

    let low = 0;
    let high = arr.length -1;

    while(low <= high){

        let mid = Math.floor((low + high) / 2);

        if(target === arr[mid]){
            return mid;
        }

        if(target < arr[mid]){
            low = mid + 1;
        }else{
            high = mid - 1 ;
        }

    }

    return -1;

}

// console.log(findElement(b, 10))

/*

Exercice : Trouver le Plus Proche Nombre dans un Array Trié

Supposons que vous avez un array d'entiers trié en ordre croissant. Votre tâche est de trouver l'élément dans cet array qui est le plus proche d'un nombre cible donné. Si deux nombres sont également proches, retournez le nombre inférieur.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un array trié et un entier cible.
Utilisez la recherche binaire pour trouver l'élément de l'array qui est le plus proche de la cible.
Retournez cet élément.
Exemple d'entrée et de sortie :

Entrée : array = [1, 2, 4, 5, 6, 6, 8, 9], cible = 7

Sortie : 6 (car 6 est le nombre le plus proche de 7 dans l'array)

Entrée : array = [1, 3, 5, 7, 9, 11], cible = 6

Sortie : 5 (car 5 est le nombre le plus proche de 6 dans l'array)

*/

const closestElement = (arr, target) => {

    let low = 0;
    let high = arr.length -1;

    while(low <= high){

        let mid = Math.floor((low + high) / 2);

        if(target > arr[mid]){
            low = mid + 1;
        }else{
            high = mid -1;
        }
    }

    return arr[high]
}

// const array = [1, 2, 4, 5, 6, 6, 8, 9]

// console.log(closestElement(array, 7));

const closesstElement = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (target > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // Après la boucle, vérifiez si low ou high est plus proche de la cible.
    // Assurez-vous également que low et high sont dans les limites de l'array.
    if (low < arr.length && high >= 0) {
        if (Math.abs(arr[low] - target) < Math.abs(arr[high] - target)) {
            return arr[low];
        } else {
            return arr[high];
        }
    } else if (low < arr.length) {
        return arr[low];
    } else {
        return arr[high];
    }
}

// const array = [1, 2, 4, 5, 6, 6, 8, 9];
// console.log(closesstElement(array, 7)); // Doit afficher 6



/*
Exercice : Recherche Binaire dans un Array Trié de Manière Non-Conventionnelle

Imaginez que vous avez un array d'entiers qui commence par une série de nombres en ordre décroissant, suivie d'une série de nombres en ordre croissant. Par exemple, l'array pourrait ressembler à [8, 6, 4, 1, 3, 5, 7]. Votre tâche est de trouver un élément spécifique dans cet array en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un array trié de manière non-conventionnelle (comme décrit ci-dessus) et un entier cible à rechercher.
Utilisez la recherche binaire pour trouver l'index de cet entier cible dans l'array.
Si l'entier cible est trouvé, retournez son index. Sinon, retournez -1.
Exemple d'entrée et de sortie :

Entrée : array = [8, 6, 4, 1, 3, 5, 7], cible = 5

Sortie : 5 (car 5 est à l'index 5 dans l'array)

Entrée : array = [8, 6, 4, 1, 3, 5, 7], cible = 2

Sortie : -1 (car 2 n'est pas présent dans l'array)

*/

// const binaryGoal = (arr, target) => {

//     let low = 0;
//     let high = arr.length -1;

//     while(low <= high){

//         let mid = Math.floor((low + high) / 2);

//         if(target === arr[mid]){
//             return arr[mid];
//         }

//         if(arr[low] > arr[mid]){



//         }

//     }

//     return -1;
// }

// console.log(binaryGoal([8, 6, 4, 1, 3, 5, 7], 2))

// const binaryGoal = (arr, target) => {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (target === arr[mid]) {
//             return mid;
//         }

//         // Vérifie si mid est dans la partie décroissante
//         if (arr[mid] > arr[high]) {
//             if (target > arr[mid] || target <= arr[high]) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         } 
//         // Sinon, mid est dans la partie croissante
//         else {
//             if (target > arr[mid]) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         }
//     }

//     return -1;
// }

// console.log(binaryGoal([8, 6, 4, 1, 3, 5, 7], 2)); // Doit retourner -1 puisque 2 n'est pas dans l'array

/*

    Exercice : Trouver le Seuil dans un Array de Températures

    Imaginez que vous avez un array de températures journalières enregistrées sur une période d'un mois. Les températures sont enregistrées de manière désordonnée. Votre tâche est de trouver le premier jour où la température dépasse un certain seuil en utilisant la recherche binaire.

    Instructions :

    Écrivez une fonction en JavaScript qui prend deux arguments : un array de températures et un seuil de température.
    Le array n'est pas trié, donc commencez par trier le array.
    Utilisez ensuite la recherche binaire pour trouver le premier jour où la température dépasse le seuil donné.
    Retournez l'index de ce jour dans le array trié. Si aucun jour ne dépasse le seuil, retournez -1.
    Exemple d'entrée et de sortie :

    Entrée : températures = [18, 23, 20, 15, 25, 30, 16], seuil = 24
    Sortie : 4 (car le premier jour où la température dépasse 24 est le jour 4 avec une température de 25, dans l'array trié)

*/


const temp = [18, 23, 20, 15, 25, 30, 16];
const seuil = 24;

const findSeuil = (arr, target) => {
    let sortTemp = arr.sort((a, b) => a - b);
    let low = 0;
    let high = sortTemp.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (target >= sortTemp[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // low est maintenant l'index du premier élément supérieur au seuil ou égal à la taille de l'array.
    if (low < sortTemp.length && sortTemp[low] > target) {
        return low; // Retourne l'index
    } else {
        return -1; // Aucun élément ne dépasse le seuil
    }
}

// console.log(temp.sort((a,b) => a - b));

// console.log(findSeuil(temp, seuil))


/*

Exercice : Trouver la Première Lettre Plus Grande dans un Array de Caractères Trié

Imaginez que vous avez un array de caractères (lettres) trié en ordre alphabétique. Votre tâche est de trouver la première lettre dans cet array qui est plus grande qu'une lettre cible donnée en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un array de caractères trié et un caractère cible.
Utilisez la recherche binaire pour trouver l'index de la première lettre qui est plus grande que le caractère cible.
Retournez cette lettre. Si aucune lettre dans l'array n'est plus grande que le caractère cible, retournez null.
Exemple d'entrée et de sortie :

Entrée : array = ['a', 'c', 'f', 'h'], cible = f

Sortie : h (car 'h' est la première lettre qui est plus grande que 'f')

Entrée : array = ['a', 'c', 'f', 'h'], cible = h

Sortie : null (car il n'y a pas de lettre plus grande que 'h' dans l'array)

*/

const enter = ['a', 'c', 'f', 'h'];
const cible = 'h';


const findFirstBiggerAlphabet = (arr, target) => {

    let low = 0 ;
    let high = arr.length -1;

    while (low <= high){

        let mid = Math.floor((low + high) / 2);

        if(target === arr[mid]){
            return arr[mid + 1];
        }

        if(target > arr[mid]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }

    }
}

// console.log(findFirstBiggerAlphabet(enter, cible))


/*

Exercice : Recherche Binaire pour un Logement Abordable

Imaginez que vous avez un array représentant le prix des logements dans un quartier, trié du moins cher au plus cher. Votre tâche est de trouver le nombre de logements abordables par rapport à un budget donné, en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un array de prix trié et un budget maximal.
Utilisez la recherche binaire pour trouver l'index du dernier logement que vous pouvez vous permettre (dont le prix est inférieur ou égal à votre budget).
Retournez le nombre de logements que vous pouvez vous permettre, ce qui correspond à l'index trouvé plus un, car les indices commencent à zéro.
Exemple d'entrée et de sortie :

Entrée : prix = [100, 200, 300, 400, 500], budget = 350
Sortie : 4 (car vous pouvez vous permettre les logements aux indices 0, 1, 2 et 3, soit 4 logements au total)


*/


const prix = [150, 200, 250, 300, 350, 400];
const budget = 280;

const findCando = (arr, target) => {

    let low = 0 ;
    let high = arr.length -1;
    let mid = 0;

    while (low <= high){

        mid = Math.floor((low + high) / 2);

        if(target > arr[mid]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }

    }

    if(arr[low] > target){
        return mid + 1;
    }else{
        return 0;
    }
}

// console.log(findCando(prix, budget));



/*

Exercice : Trouver le Maximum d'un Array Trié et Roté

Imaginez que vous avez un array d'entiers qui a été initialement trié en ordre croissant, puis roté à un certain point. Par exemple, si l'array original était [1, 2, 3, 4, 5] et qu'il a été roté à partir de l'index 3, il pourrait ressembler à [4, 5, 1, 2, 3]. Votre tâche est de trouver le maximum de cet array en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend un array trié puis roté en tant qu'entrée.
Utilisez la recherche binaire pour trouver l'élément maximal dans l'array.
Retournez cet élément maximal.
Exemple d'entrée et de sortie :

Entrée : array = [4, 5, 1, 2, 3]
Sortie : 5 (car 5 est le maximum dans l'array)

*/

// const a = [4, 5, 1, 2, 3]; 5
// const a = [6, 7, 8, 9, 1, 2, 3, 4, 5];
// const a = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const a = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
// const a = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4];

// const a = [1];
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const all = [
//     [4, 5, 1, 2, 3],
//     [6, 7, 8, 9, 1, 2, 3, 4, 5],
//     [10, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
//     [5, 6, 7, 8, 9, 10, 1, 2, 3, 4],
//     [1],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ]

const rotateArray = (arr) => {

    let low = 0;
    let high = arr.length -1;

    
    while(low <= high){
        
        let mid = Math.floor((low + high) / 2);

        if(arr[mid + 1] !== undefined){

            if(arr[mid] <= arr[mid - 1]){
                return arr[mid - 1];
            }
            if(arr[low] <= arr[mid]){
                low = mid + 1;
            }else{
                high = mid -1;
            }
        }else if(arr[mid] < arr[mid -1]){
            return arr[mid -1];
        }else{
            return arr[mid];
        }

    }
}

// Une valeur 
// Un array "roté"


// for(let i = 0 ; i <all.length; i++){
//     console.log(rotateArray(all[i]))
// }

/*

Bien sûr, voici un autre exercice de recherche binaire pour vous entraîner :

Exercice : Trouver le Point de Basculage dans un Array de Nombres

Imaginez que vous avez un array d'entiers où les nombres commencent par augmenter et atteignent un point où ils commencent à diminuer. Votre tâche est de trouver l'index de ce point de basculement (le maximum local) en utilisant la recherche binaire. C'est un peu comme trouver le sommet d'une montagne dans un profil montagneux.

Instructions :

Écrivez une fonction en JavaScript qui prend un array de nombres comme argument.
Utilisez la recherche binaire pour trouver l'index du point de basculement où les nombres cessent d'augmenter et commencent à diminuer.
Retournez cet index.
Exemple d'entrée et de sortie :

Entrée : array = [1, 2, 4, 8, 10, 9, 7, 5]
Sortie : 4 (car l'élément à l'index 4 est 10, qui est le point de basculement)

*/

// const ar = [1, 2, 4, 8, 10, 9, 7, 5];


// const basculage = (arr) => {

//     let low = 0;
//     let high = arr.length -1;

//     while(low <= high){

//         let mid = Math.floor((low + high) / 2);

//         console.log(`Ce-ci est le mid : ${arr[mid]} et ça c'est mid + 1 ${arr[mid +1]}`)

//         if(arr[mid] > arr[mid +1]){
//             return mid;
//         }
//         if(arr[mid] < arr[mid +1]){
//             return mid + 1;
//         }
//         if(arr[low] <= arr[mid]){
//             low = mid +1;
//         }else{
//             high = mid -1;
//         }

//     }

// }

// const all = [
//     [1, 2, 4, 8, 10, 9, 7, 5], // 4
//     [3, 5, 8, 12, 15, 14, 10, 6], // 4

//     [1, 3, 5, 7, 9, 8, 6, 4, 2], // 4

//     [10, 20, 30, 40, 50, 40, 30, 20, 10], 
//     [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
//     [7, 10, 11, 12, 9, 5, 2],
//     [1, 2, 1]
// ]


const basculage = (arr) => {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) { // Utilisez < au lieu de <=
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > arr[mid + 1]) {
            // Point de basculement potentiel trouvé, continuer à chercher à gauche
            high = mid;
        } else {
            // Continuer à chercher à droite
            low = mid + 1;
        }
    }

    return low; // low et high convergent vers l'index du point de basculement
}


// for(let i = 0; i < all.length; i++){
//     console.log(basculage(all[i]));
// }


/*

Exercice : Trouver l'Élément Manquant dans une Suite Arithmétique

Imaginez que vous avez une suite arithmétique (une séquence de nombres où la différence entre les termes consécutifs est constante) stockée dans un array, mais un des éléments de cette suite est manquant. Votre tâche est de trouver cet élément manquant en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend un array représentant une suite arithmétique avec un élément manquant.
Utilisez la recherche binaire pour trouver et retourner l'élément manquant dans la suite.
La différence entre les termes consécutifs de la suite est constante.
Exemple d'entrée et de sortie :

Entrée : array = [1, 3, 4, 5, 6] (la différence est 1, et le nombre 2 manque)
Sortie : 2

*/


const arra = [1, 3, 4, 5, 6];

const all = [
    [1, 3, 4, 5, 6], // 2
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 22, 24], // 20
    [10, 15, 20, 25, 30, 35, 40, 45, 55, 60], // 50
    [3, 6, 9, 12, 15, 18, 24, 27, 30], // 21
    [5, 10, 15, 20, 25, 35, 40, 45], // 30
    [100, 105, 110, 115, 120, 125, 130, 135, 145], // 140
    [50, 52, 54, 56, 60, 62] // 58

]

// const arithmetiqueSuite = (arr) => {

//     let low = 0;
//     let high = arr.length -1;

//     let number = 0;

//     while(low <= high){

//         let mid = Math.floor((low + high) / 2);

//         if(arr[low] > arr[mid]){
//             high = mid -1;
//         }else{
//             number = arr[high] - arr[mid];
//             low = mid + 1;
//         }


//         // if(number >= arr[low]){
//         //     number = arr[mid + 1] - arr[mid];
//         //     low = mid + 1;
//         // }else{
//         //     high = mid - 1;
//         // }

//     }

//     return number;

// }

// // console.log(arithmetiqueSuite(arra));

// for(let i = 0 ; i < all.length; i++){

//     console.log(arithmetiqueSuite(all[i]))

const arithmetiqueSuite = (arr) => {
    let low = 0;
    let high = arr.length - 1;
    let diff = (arr[high] - arr[low]) / arr.length; // Calculer la différence attendue

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        // Vérifier si la différence est maintenue
        if (arr[mid] - arr[low] === diff * (mid - low)) {
            // Si oui, l'élément manquant est dans la moitié droite
            low = mid + 1;
        } else {
            // Sinon, il est dans la moitié gauche
            high = mid;
        }
    }

    // L'élément manquant est la valeur attendue à l'index 'low'
    return arr[low - 1] + diff;
}

// Exemples de test
// console.log(arithmetiqueSuite([1, 3, 4, 5, 6])); // Sortie attendue: 2

// for(let i = 0 ; i < all.length; i++){
//     console.log(arithmetiqueSuite(all[i]))
// }


/*

Exercice : Trouver la Position d'Insertion dans un Array Trié

Imaginez que vous avez un array d'entiers trié en ordre croissant. Votre tâche est de trouver la position à laquelle un nouvel entier donné devrait être inséré pour maintenir l'ordre du array. Si l'entier est déjà présent dans le array, retournez l'index où il pourrait être inséré de manière à maintenir l'ordre.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un array trié et un entier cible à insérer.
Utilisez la recherche binaire pour trouver l'index où la cible devrait être insérée.
Retournez cet index.
Exemple d'entrée et de sortie :

Entrée : array = [1, 3, 5, 6], cible = 5

Sortie : 2 (car 5 est déjà présent à l'index 2)

Entrée : array = [1, 3, 5, 6], cible = 2

Sortie : 1 (car 2 devrait être inséré à l'index 1 pour maintenir l'ordre)

Entrée : array = [1, 3, 5, 6], cible = 7

Sortie : 4 (car 7 devrait être inséré à la fin, à l'index 4)


*/

// const w = [1, 3, 5, 6];

// const findPositionToInsert = (arr, target) => {
//     let low = 0 ;
//     while(low <= high){
//         let mid = Math.floor((low + high) / 2);
//         if(target > arr[mid]){
//             low = mid + 1;
//         }else{
//             high = mid -1;
//         }
//     }
//     return low
// }

// console.log(findPositionToInsert(w, 2))


/*

Exercice : Trouver le Plus Petit Nombre Plus Grand que la Cible

Imaginez que vous avez un array trié d'entiers et un nombre cible. Votre tâche est de trouver le plus petit nombre dans l'array qui est plus grand que le nombre cible en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un array trié et un nombre cible.
Utilisez la recherche binaire pour trouver le plus petit nombre dans l'array qui est plus grand que la cible.
Retournez ce nombre. Si aucun nombre dans l'array n'est plus grand que la cible, retournez null.
Exemple d'entrée et de sortie :

Entrée : array = [1, 3, 5, 7, 9], cible = 6

Sortie : 7 (car 7 est le plus petit nombre plus grand que 6)

Entrée : array = [1, 2, 3, 4, 5], cible = 5

Sortie : null (car il n'y a pas de nombre plus grand que 5 dans l'array)


*/

const r = [1, 2, 3, 4, 5];

const findMinimumBeforeNum = (arr, target) => {

    let low = 0;
    let high = arr.length -1

    while(low <= high){

        let mid = Math.floor((low + high) / 2);

        if(target > arr[mid]){
            low  = mid + 1;
        }else{
            high = mid - 1;
        }
    }

    return arr[low];
}

// console.log(findMinimumBeforeNum(r, 5))


/*

Exercice : Trouver le Dernier Nombre Inférieur à la Cible

Imaginez que vous avez un array trié d'entiers et un nombre cible. Votre tâche est de trouver le dernier nombre dans l'array qui est inférieur à la cible en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un array trié et un nombre cible.
Utilisez la recherche binaire pour trouver le dernier nombre dans l'array qui est inférieur à la cible.
Retournez ce nombre. Si aucun nombre dans l'array n'est inférieur à la cible, retournez null.
Exemple d'entrée et de sortie :

Entrée : array = [1, 2, 3, 4, 5, 6, 7], cible = 5

Sortie : 4 (car 4 est le dernier nombre inférieur à 5)

Entrée : array = [1, 3, 5, 7, 9, 11, 13], cible = 2

Sortie : 1 (car 1 est le seul nombre inférieur à 2)

*/

const o = [1, 3, 5, 7, 9, 11, 13];
// const o = [2, 4, 6, 8, 10];

const binarySearchLast = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (target > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // Après la boucle, low est l'index du premier élément supérieur à la cible
    // ou égal à la longueur de l'array si tous les éléments sont inférieurs à la cible.
    if (low > 0 && arr[low - 1] < target) {
        return arr[low - 1];
    }

    return null; // Aucun élément inférieur à la cible
}

// console.log(binarySearchLast(o, 2))


/*

Exercice : Trouver la Puissance d'un Nombre

Imaginez que vous devez calculer la puissance n d'un nombre x (c'est-à-dire x^n), mais vous souhaitez le faire de manière plus efficace que la méthode naïve qui utilise des multiplications répétées. Votre tâche est d'implémenter une méthode de recherche binaire pour calculer x^n.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un nombre x et un entier positif n.
Utilisez une approche de recherche binaire ou une méthode de division et de conquête pour calculer x^n.
Retournez le résultat de x^n.
Exemple d'entrée et de sortie :

Entrée : x = 2, n = 10

Sortie : 1024 (car 2^10 = 1024)

Entrée : x = 5, n = 3

Sortie : 125 (car 5^3 = 125)

*/

function power(x, n) {
    if (n === 0) {
        return 1; // La base de la récursion : n'importe quel nombre à la puissance 0 est 1
    }

    // Calculer x^(n/2) de manière récursive
    let halfPower = power(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        // Si n est pair, x^n = (x^(n/2))^2
        return halfPower * halfPower;
    } else {
        // Si n est impair, x^n = x * (x^(n-1/2))^2
        return x * halfPower * halfPower;
    }
}

// // Exemples de test
// console.log(power(2, 10)); // 1024
// console.log(power(5, 3)); // 125

/*
Exercice : Trouver la Capacité Minimale d'un Disque Dur pour Stocker des Fichiers

Imaginez que vous avez un certain nombre de fichiers de tailles différentes à stocker sur un disque dur. Vous voulez trouver la capacité minimale requise pour un disque dur afin de stocker tous ces fichiers. Les tailles des fichiers sont données dans un array, et la capacité des disques durs disponibles est également donnée dans un autre array. Votre tâche est d'utiliser la recherche binaire pour déterminer la plus petite capacité de disque dur qui peut stocker tous vos fichiers.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un array représentant les tailles des fichiers et un array représentant les capacités des disques durs disponibles.
Les deux arrays sont triés en ordre croissant.
Utilisez la recherche binaire pour trouver la plus petite capacité de disque dur dans le deuxième array qui est suffisante pour stocker tous les fichiers du premier array.
Retournez cette capacité minimale. Si aucun disque dur n'est assez grand, retournez null.
Exemple d'entrée et de sortie :

Entrée : tailles des fichiers = [100, 200, 300, 400], capacités des disques durs = [500, 1000, 1500, 2000]

Sortie : 1000 (car un disque dur de 1000 Go est le plus petit qui peut contenir tous les fichiers)

Entrée : tailles des fichiers = [500, 500, 500, 500], capacités des disques durs = [1000, 2000, 3000, 4000]

Sortie : 2000 (car un disque dur de 2000 Go est nécessaire pour contenir tous les fichiers)

*/

const sizeFile = [100, 200, 300, 400];
const sizeHardDisk = [500, 1000, 1500, 2000];

const sizeFile2 = [500, 500, 500, 500];
const sizeHardDisk2 = [500, 1000, 1500, 2000]

const findMaxCap = (file, disk) => {

    let low = 0;
    let high = disk.length -1;
    let allFileSize = file.reduce((acc, curr) => acc+curr);
    
    while(low <= high){

        let mid = Math.floor((low + high) / 2);

        if(allFileSize === disk[mid]){
            return disk[mid];
        }

        if(allFileSize < disk[mid]){
            high = mid -1;
        }else{
            low = mid + 1;
        }
    }
}

/*
const findMaxCap = (file, disk) => {
    let low = 0;
    let high = disk.length - 1;
    let allFileSize = file.reduce((acc, curr) => acc + curr, 0);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (allFileSize <= disk[mid]) {
            // Continuez à chercher dans la partie gauche pour trouver la plus petite capacité suffisante
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    // Vérifiez si la capacité trouvée est suffisante
    if (low < disk.length && disk[low] >= allFileSize) {
        return disk[low];
    }

    return null; // Aucune capacité suffisante trouvée
}

// Exemples de test
const sizeFile = [100, 200, 300, 400];
const sizeHardDisk = [500, 1000, 1500, 2000];
console.log(findMaxCap(sizeFile, sizeHardDisk)); // Devrait retourner la capacité minimale requise

*/

// console.log(findMaxCap(sizeFile, sizeHardDisk));
// console.log(findMaxCap(sizeFile2, sizeHardDisk2));


/*

Exercice : Trouver le Nombre Maximum de Pages qu'un Étudiant Peut Lire

Imaginez que vous êtes en charge d'attribuer des livres à des étudiants pour les lire pendant l'été. Chaque livre a un certain nombre de pages et vous voulez répartir les livres de manière équitable afin qu'aucun étudiant n'ait à lire beaucoup plus de pages que les autres. Votre tâche est de trouver le nombre maximal de pages qu'un étudiant devra lire en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend deux arguments : un array représentant le nombre de pages de chaque livre et un entier représentant le nombre d'étudiants.
Utilisez la recherche binaire pour trouver le nombre maximal de pages qu'un étudiant devra lire, de sorte que tous les livres soient lus et que la charge de travail soit aussi équitable que possible.
Retournez ce nombre maximal de pages.
Exemple d'entrée et de sortie :

Entrée : livres = [100, 200, 300, 400], étudiants = 2
Sortie : 500 (car une répartition équitable des livres pourrait être [100, 400] pour un étudiant et [200, 300] pour l'autre, chacun lisant un total de 500 pages)
*/

function canDistributeBooks(pages, students, maxPages) {
    let studentRequired = 1;
    let currentPageSum = 0;

    for (let page of pages) {
        if (currentPageSum + page > maxPages) {
            studentRequired++;
            currentPageSum = page;
            if (studentRequired > students) return false;
        } else {
            currentPageSum += page;
        }
    }

    return true;
}

function partitionPage(books, students) {
    if (books.length < students) return -1;

    let low = Math.max(...books);
    let high = books.reduce((a, b) => a + b, 0);

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (canDistributeBooks(books, students, mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low; // ou high, à ce stade low et high sont égaux
}

// Exemple de test
console.log(partitionPage([120, 150, 180, 200, 250, 300], 3)); // Devrait afficher la capacité optimale
