let nome = 'Luiz';

function falaNome(){
    console.log(nome)
}

function usaFalaNome(){
    nome = 'Otavio';
    falaNome();
}
usaFalaNome();

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} ${this.sobrenome} está ${assunto}.`;
        }
    };
}
const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = criaPessoa('Maria', 'Joaquina');
console.log(p2.fala('falando sobre JS'));



