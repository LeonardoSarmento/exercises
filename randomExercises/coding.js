/*function acharDias(duracoes) {
    let tempo = 0;
    let diasAssitidos = 1;
    for (let i = 0; i <= duracoes.length; i++) {
        if ((tempo + duracoes[i]) <= 3) {
            tempo = tempo + duracoes[i];

        } else {
            tempo = duracoes[i];
            diasAssitidos++;
        }
    }
    return console.log(diasAssitidos);
}*/
function acharDias(duracoes) {
    /*let arr = new Map();
    let tempo = 0;
    for (let i = 0; i < duracoes.length; i++) {
            tempo = tempo + duracoes[i];
            if (((arr[i]>=arr[i-1])) || (tempo < 3)){
                arr.push(tempo);
            } else {
                arr.shift(tempo);
                arr.push(tempo);
                tempo = 0;
            }
            console.log(arr);
    }*/
    console.log(duracoes.reduceRight(function(a, b) {
        let arr = new Map();
        if ((a + b)<=3){
            
        } ;
        return console.log(arr)
      }));
      
    /*return console.log(arr.length);*/
}

function main() {
    let duracoes = [1.01, 1.99, 1.32, 1.4];
    acharDias(duracoes);
}
main();