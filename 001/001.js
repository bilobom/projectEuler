/*
    If we list all the natural numbers below 10 that are multiples of 3 or 5,
    we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000. 
*/
const sumOfMult=(num)=>{
    
    if(num < 1) return num
    if(!(num %3) || !(num %5)) {
        //console.log('multiple of 3 or 5',num)
        return num + sumOfMult(num-1)
        
    }
    //console.log('not multiple of 3 or 5',num)
    return sumOfMult(num-1)
}
const getResult =(num)=>{
    return sumOfMult(num-1)
}

//console.log(getResult(1000))
module.exports=getResult
