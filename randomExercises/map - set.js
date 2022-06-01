const myMap = new Map()

console.log(myMap.set('apple',10));
console.log(myMap.get('apple'));
console.log(myMap.delete('apple'));
console.log(myMap.get('apple'));

/* Map and Set training*/

// Set - get a new sorted array in which no numbers are repeated from another array

const meuArray=[30,30,40,5,60,60,85,555,22,555,21,257];

function valoresUnicos(arr){
    let mySet = new Set(arr);

    return [...mySet];
}
console.log(valoresUnicos(meuArray.sort((a,b)=> a-b)));

// Map - get a list of admins from an array

function getAdmins(map){
    let admins = [];
    for ([key,value] of map){
        if (value === 'admin'){
            admins.push(key);
        }
    }
    return admins;
}
let usuarios = new Map();
usuarios.set('Luiz','admin')
usuarios.set('João','admin')
usuarios.set('Maria','user')
usuarios.set('Rosa','admin')
usuarios.set('Silvia','owner')

console.log(getAdmins(usuarios));