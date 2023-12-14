const my_list = [1, 3, 5, 7, 9];

function binary_search(list, item){

    // Permet d'avoir un suivi dans quelle partie de la liste nous devons rechercher
    let low = 0; 
    let high = list.length -1;

    while(low <= high){

        let mid = Math.floor((low + high) / 2); // vérifie l'élément du milieu
        let guess = list[mid];

        if(guess === item){
            return mid; // Trouve l'item recherché
        }

        if(guess > item ){ // La réponse est trop haute par rapport à l'item
            high = mid - 1;
        }else{ // La réponse est trop basse par rapport à l'item
            low = mid + 1;
        }

        
    }
    
    return null; // Si l'item n'est pas trouvé retourne null  

}

// console.log(binary_search(my_list, 3))
// console.log(binary_search(my_list, -1))


// 1) Suppose you have a sorted list of 128 names, and you’re searching
// through it using binary search. What’s the maximum number of
// steps it would take?

// 2) Suppose you double the size of the list. What’s the maximum
// number of steps now?

let names = [
    "Emily", "Max", "Isabella", "Ethan", "Sophia", "Alexander", "Mia", "Noah", 
    "Ava", "William", "Olivia", "Liam", "Emma", "Benjamin", "Charlotte", "James", 
    "Amelia", "Lucas", "Harper", "Henry", "Evelyn", "Gabriel", "Abigail", "Matthew", 
    "Luna", "Jackson", "Elizabeth", "Levi", "Ella", "Samuel", "Sofia", "Owen", 
    "Avery", "John", "Scarlett", "Jack", "Emily", "Luke", "Madison", "Jayden", 
    "Chloe", "Dylan", "Layla", "Grayson", "Eleanor", "Carter", "Grace", "Michael", 
    "Nora", "Sebastian", "Zoey", "Daniel", "Penelope", "Aiden", "Riley", "Logan", 
    "Hannah", "David", "Lily", "Joseph", "Addison", "Wyatt", "Lucy", "Leo", "Ellie", 
    "Isaac", "Stella", "Lincoln", "Aubrey", "Jaxon", "Zoe", "Nathan", "Brooklyn", 
    "Ezra", "Hazel", "Nicholas", "Bella", "Julian", "Natalie", "Eli", "Savannah", 
    "Isaiah", "Leah", "Landon", "Samantha", "Mateo", "Violet", "Joshua", "Aurora", 
    "Christopher", "Skylar", "Andrew", "Paisley", "Theodore", "Camila", "Caleb", 
    "Autumn", "Ryan", "Peyton", "Asher", "Taylor", "Nolan", "Aria", "Hudson", 
    "Hailey", "Christian", "Allison", "Colton", "Elena", "Cameron", "Gabriella", 
    "Roman", "Serenity", "Easton", "Kennedy", "Aaron", "Sadie", "Hunter", "Ariana", 
    "Connor", "Genesis",     "Emily", "Max", "Isabella", "Ethan", "Sophia", "Alexander", "Mia", "Noah", 
    "Ava", "William", "Olivia", "Liam", "Emma", "Benjamin", "Charlotte", "James", 
    "Amelia", "Lucas", "Harper", "Henry", "Evelyn", "Gabriel", "Abigail", "Matthew", 
    "Luna", "Jackson", "Elizabeth", "Levi", "Ella", "Samuel", "Sofia", "Owen", 
    "Avery", "John", "Scarlett", "Jack", "Emily", "Luke", "Madison", "Jayden", 
    "Chloe", "Dylan", "Layla", "Grayson", "Eleanor", "Carter", "Grace", "Michael", 
    "Nora", "Sebastian", "Zoey", "Daniel", "Penelope", "Aiden", "Riley", "Logan", 
    "Hannah", "David", "Lily", "Joseph", "Addison", "Wyatt", "Lucy", "Leo", "Ellie", 
    "Isaac", "Stella", "Lincoln", "Aubrey", "Jaxon", "Zoe", "Nathan", "Brooklyn", 
    "Ezra", "Hazel", "Nicholas", "Bella", "Julian", "Natalie", "Eli", "Savannah", 
    "Isaiah", "Leah", "Landon", "Samantha", "Mateo", "Violet", "Joshua", "Aurora", 
    "Christopher", "Skylar", "Andrew", "Paisley", "Theodore", "Camila", "Caleb", 
    "Autumn", "Ryan", "Peyton", "Asher", "Taylor", "Nolan", "Aria", "Hudson", 
    "Hailey", "Christian", "Allison", "Colton", "Elena", "Cameron", "Gabriella", 
    "Roman", "Serenity", "Easton", "Kennedy", "Aaron", "Sadie", "Hunter", "Ariana", 
    "Connor", "Genesis",
];

let sortedNames = names.sort(); // trie de la liste des noms par ordre alphabétique)

function numberOfSteps(list){

    let low = 0; 
    let high = list.length -1;
    let steps = 0;

    while(low <= high){

        let mid = Math.floor((low + high) / 2); 
        let guess = list[mid];

        if(low === high){
            break; 
        }

        if(mid >= low ){ 
            high = mid - 1;
        }else{ 
            low = mid + 1;
        }

        steps++;
        
    }
    
    return steps;  

}


// console.log(numberOfSteps(sortedNames));



/* Exercice : Trouver le Premier et le Dernier Index d'un Élément dans une Liste Triée

Imaginez que vous avez une liste triée d'entiers, qui peut contenir plusieurs instances du même nombre. Par exemple, la liste pourrait être [1, 2, 4, 4, 4, 5, 6, 6]. Votre tâche est de trouver le premier et le dernier index d'un élément spécifique dans cette liste en utilisant la recherche binaire.

Instructions :

Écrivez une fonction en JavaScript qui prend en entrée une liste triée d'entiers et un entier cible.
Utilisez la recherche binaire pour trouver le premier index de cet élément dans la liste. Si l'élément n'est pas présent, retournez -1.
Utilisez la recherche binaire pour trouver le dernier index de cet élément dans la liste. Si l'élément n'est pas présent, retournez -1.
La fonction doit retourner un objet ou un tableau contenant les deux indices. */


function findFirstAndLastIndex(list, target) {
    let first = findIndex(list, target, true);
    let last = findIndex(list, target, false);
    return [first, last];
}

function findIndex(list, target, findFirst) {
    let low = 0;
    let high = list.length - 1;
    let index = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        console.log(`Iteration - Low: ${low}, High: ${high}, Mid: ${mid}, Guess: ${guess}`);

        if (guess === target) {
            index = mid;
            if (findFirst) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return index;
}

// Exemple d'utilisation :
let list = [1, 2, 4, 4, 4, 5, 6, 6];
let target = 4;
console.log("First and Last Index: ", findFirstAndLastIndex(list, target));
