function polyfillEvery(array,callback){
  let result=false;
  for(let i=0;i<array.length;i++){
    if(callback(array[i],i,array)){
    result=true;
      break;
    }
    
   }
  return result
}

module.exports=polyfillSome