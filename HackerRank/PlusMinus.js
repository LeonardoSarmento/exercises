function plusMinus(arr) {
    let acima=0;
    let abaixo=0;
    let zero=0;
    console.log(arr.length)
    for(let n=0; n<arr.length; n++){
      if(arr[n]>0){
          acima++;
      } else if (arr[n]==0){
          zero++;
     } else {
         abaixo++;
     }
    }
    console.log((acima/arr.length).toFixed(6));
    console.log((abaixo/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}