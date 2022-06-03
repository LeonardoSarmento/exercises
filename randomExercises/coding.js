/*function acharDias(time) {
    let tempo = 0;
    let days = 1;
    for (let i = 0; i <= time.length; i++) {
        if ((tempo + time[i]) <= 3) {
            tempo = tempo + time[i];

        } else {
            tempo = time[i];
            days++;
        }
    }
    return console.log(days);
}*/
function acharDias(time) {
    /*let arr = new Map();
    let tempo = 0;
    for (let i = 0; i < time.length; i++) {
            tempo = tempo + time[i];
            if (((arr[i]>=arr[i-1])) || (tempo < 3)){
                arr.push(tempo);
            } else {
                arr.shift(tempo);
                arr.push(tempo);
                tempo = 0;
            }
            console.log(arr);
    }*/
    console.log(time.reduceRight(function(a, b) {
        let arr = new Map();
        if ((a + b)<=3){
            
        } ;
        return console.log(arr)
      }));
      
    /*return console.log(arr.length);*/
}

function main() {
    let time = [1.01, 1.99, 1.32, 1.4];
    acharDias(time);
}
main();