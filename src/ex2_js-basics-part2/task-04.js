function compareElements(arr){
  if(arr.length<2){
    return "elements are not correct"
  }
  let result=false;
  for(i=1;i<arr.length;i++){
    if(arr[0]!==arr[i]){
      result=false;
      break
    }
    else{
      result=true;
      continue
    }
  }
 return result
}

module.exports=compareElements