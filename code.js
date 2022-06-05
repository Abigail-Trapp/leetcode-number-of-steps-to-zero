var numberOfSteps = function(num) {
    let result = 0
    for(;num>0;result++){
    // or for(i=0;num>0;result++){}
        if(num % 2){
            num --
        } else{
            num /= 2
        } 
    }
    return result
  };
  console.log(numberOfSteps(14))