// exo 2 , 2.1

export function echanger(tableau,indexPremier,indexDeuxieme){
    const arraySize = tableau.length - 1;

    for(let i = 0 ; i <= arraySize ; i++){
        if(tableau[i] === indexPremier){
            // index du premier devient celui du deuxieme et vis versa 
            tableau.splice(indexDeuxieme,1);
            tableau.push(tableau[i],indexDeuxieme);
        }else if( tableau[i] === indexDeuxieme){
            tableau.splice(indexPremier,1);
            tableau.push(tableau[i],indexPremier);
        }
    }

    return tableau;
}