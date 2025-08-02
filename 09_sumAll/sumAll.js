const sumAll = function(first, second) {
    if(first !== Math.floor(Number(first)) || second !== Math.floor(Number(second)) || first<0 || second<0)
        return 'ERROR';

    if(first > second){
        let temp = second;
        second = first;
        first = temp;
    }

    const numbers = [];
    let differ = second-first;
    for(let i=0;i<= differ;i++){
        numbers[i] = first;
        first++;
    } 

    const sumOfAll = numbers.reduce((sum,item)=> {return sum+item;});
    return sumOfAll;
    
};

// Do not edit below this line
module.exports = sumAll;
