function additionNumber(number1,number2){
  if(typeof number1 ==="number"&&typeof number2 === "number"&&!Number.isNaN (number1)&&!Number.isNaN (number2)){ 
    return Number((number1+number2).toFixed(3));
  }
  return undefined
}
module.exports=additionNumber