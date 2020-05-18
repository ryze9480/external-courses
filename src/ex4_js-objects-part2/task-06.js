function getFirstUppercaseLetter(str){
  let result=str.split(" ");
  for(let i=0;i<result.length;i++){
    result[i]=result[i][0].toUpperCase()+result[i].slice(1)
  };
  return result.join(" ")
}
module.exports=getFirstUppercaseLetter