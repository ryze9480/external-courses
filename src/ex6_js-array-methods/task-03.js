function polyfillEvery(array,callback){
  let result=true;
  for(let i=0;i<array.length;i++){
    if(!callback(array[i],i,array)){
    result=false;
    }
    break;
   }
  return result
 }

module.exports=polyfillEvery