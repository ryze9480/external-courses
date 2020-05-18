function checkPrototypeProperty(str,obj){ 
  if(!obj.hasOwnProperty(str)){
   return obj[str] 
  }
  return undefined
}
 module.exports=checkPrototypeProperty