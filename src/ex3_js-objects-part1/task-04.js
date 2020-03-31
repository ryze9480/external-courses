function checkAndAddProperty(str,obj){
 if(!(str in obj)){
   Object.assign(obj, {[str]: 'new'}); 
 } 
 return obj;
}

module.exports=checkAndAddProperty