const Calculator= {
  result: 0,
  add: function (a=0){
    if(typeof a==="number"&&!Number.isNaN(a)){
      Calculator.result+=a   
    }
    return Calculator.add
  },
  subtract: function(a=0){
   if(typeof a==="number"&&!Number.isNaN(a)){
     Calculator.result-=a;
   }
   return Calculator.subtract
  },
  divide: function(a=1){
   if(typeof a==="number"&&!Number.isNaN(a)){
     Calculator.result/=a;
  }
   return Calculator.divide
   },
  multiply: function(a=1){
   if(typeof a==="number"&&!Number.isNaN(a)){
     Calculator.result*=a;    
   }
   return Calculator.multiply
  },
  getResult: function(){
    return Calculator.result
  },
  reset: function(){
   Calculator.result=0
  },
}

 module.exports=Calculator