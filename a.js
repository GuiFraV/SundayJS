const vote = ['y','y','y','n','y','y','y','n','y','y','y','n','n',,'n','n',,'n','n','n','n']
const x = vote.reduce((compteur, curr) => {

    if(compteur[curr]){
        compteur[curr]++
    }else{
        compteur[curr] = 1
    }

    return compteur;

}, {});

console.log(x);