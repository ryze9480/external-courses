function getCount(str){
  let array=str.split("");
  let result={};
  for(let i=0;i<array.length;i++){
    let count=0;
    for(let j=0;j<array.length;j++){
      if(array[i]===array[j]){
        count++;  
      } 
    }
    result[array[i]]=count;
  }
 for( let key in result){
   console.log("character "+ key +" is found " +result[key]+" time");
 }
  return undefined;
}
module.exports=getCount