/* 
    Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
    By starting with 1 and 2, the first 10 terms will be:

        1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

    By considering the terms in the Fibonacci sequence whose values do not
    exceed four million, find the sum of the even-valued terms. 
 */

 const FiboSequence=(num)=>{
    
    let sequence=[1,2]
    
    while (sequence.slice(-1)[0] <= num) {
        sequence.push(sequence.slice(-2)[0]+ sequence.slice(-1)[0])
    }
    return sequence.slice(0,-1)
}
const sumOfEvenValues=(num)=>{
    return FiboSequence(num).reduce((accum,current)=>{
        return !(current % 2) ? current+accum : accum
    },0)
}
//console.log(sumOfEvenValues(4000000))
module.exports=sumOfEvenValues