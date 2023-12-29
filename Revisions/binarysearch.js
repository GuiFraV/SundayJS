const my_list = [1, 3, 5, 7, 9];
const target = 3;

const bSearch = (arr, target) => {

    let low = 0;
    let high = arr.length -1;

    while(low <= high){

        let mid = Math.floor((low + high) / 2);

        if(target === arr[mid]){
            return mid;
        }

        if(target < arr[mid]){
            high = mid -1;
        }else{
            low = mid + 1;
        }
    }
}

console.log(bSearch(my_list, target));

