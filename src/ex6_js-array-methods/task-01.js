function slicePolyfill(array,begin=0,end=array.length){
  let start
  let finish
  if(begin<0){
    start=array.length+begin
  }
    else{
    start=begin
    }
  
  if(end<0){
    finish=array.length+end
  }
    else{
    finish=end
    }
  let result=[];
  for( let i=start;i<finish;i++){
    result.push(array[i]);
  }
  return result
}

module.exports=slicePolyfill