function comparesNumberAndString(str,num){
  if(str.length>num){
    return str.substr(0,num-1)+ "\u2026"
  }
    return str;
}
module.exports=comparesNumberAndString