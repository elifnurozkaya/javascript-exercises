const fibonacci = function(num) {
    num = +num;

    if(num == 0)
        return 0;
    else if(num<0)
        return "OOPS";
    
    let prev = 0;
    let curr = 1;
    let next;

    for(let i=1;i<num;i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
