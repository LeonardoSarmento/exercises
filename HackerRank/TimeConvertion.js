function timeConversion() {

    let data = new Date();
    
    return console.log(data.toTimeString('pt-BR', {hour12: false}));

}
