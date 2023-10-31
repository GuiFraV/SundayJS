function isPalindrome(str){

    let isPal = true;


    for(let i = 0; i< str.length; i++){

        if(str[i] !== str[str.length -1 -i]){
            isPal = false;
        }

    }

    return isPal 

}

console.log(isPalindrome('kayasdfsdfsdfsdfsdfk'))