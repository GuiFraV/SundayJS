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

const liste = [1, 3, 5, 7, 9, 11];

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

const l = [4, 5, 6, 1, 2, 3]
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

console.log(findMind([3, 4, 5, 6, 1, 2]))

