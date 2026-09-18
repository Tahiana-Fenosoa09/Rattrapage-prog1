// exo 2 , 2.3

function nombreUn(T){
    const arraySize = T.length - 1
    let count = 0 ;

    for(let i = 0; i <= arraySize ; i++){
        if(T[i] == 1){
            count = count + 1;
        }
    }

    return count;
}

console.log(nombreUn([0,0,1,1]))
