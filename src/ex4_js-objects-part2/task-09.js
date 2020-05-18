function insertWord(str,word,num){
  let result=str.split(" ");
  result.splice(num+1,0,word)
  return result.join(" ")
}
module.exports=insertWord