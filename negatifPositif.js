// exo 1

function negatifPositif(arr){
    const negatif = [];
    const positif = [];
    const finalArray = [];


    for(let i = 0 ; i <= arr.lenght - 1 ; i++){
        if(arr[i] <= 0){
            negatif.push(arr[i]);
        }else{
            positif.push(arr[i]);
        }
    }

    for(let i = 0 ; i <= negatif.lenght - 1 ; i++){
        finalArray.push(arr[i]);
    }

    for(let i = 0 ; i <= positif.lenght - 1 ; i++){
        finalArray.push(arr[i]);
    }

    return finalArray;
}

console.log(negatifPositif([[3, -1, 0, 4, -2, 5, -3]]));
