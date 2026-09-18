// exo 1

import { echanger } from "./echanger";

function negatifPositif(arr){
    const arraySize = arr.lenght - 1;


    for(let i = 0 ; i <= arraySize ; i++){
        if(!(arr[i+1] > arraySize)){
            if(arr[i] >= 0 && arr[i+1] < 0){
                echanger(arr,arr[i],arr[i+1]);
            }
        }
    }
    return finalArray;
}

console.log(negatifPositif([[3, -1, 0, 4, -2, 5, -3]]));
