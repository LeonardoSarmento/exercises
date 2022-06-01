function validateError(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros');

        if (typeof arr !== 'object')
            throw new TypeError('Arr precisa ser de um tipo object');

        if (typeof num !== 'number')
            throw new TypeError('Num precisa ser de um tipo number');

        if (arr.length !== num) throw new RangeError('Tamanho Inválido!');

        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Esse erro é um ReferenceErro');
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('Esse erro é um TypeError');
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log('Esse erro é um RangeError');
            console.log(e.message);
        } else {
            console.log('Tipo de erro não esperado:' + e);
        }
    }
}
console.log(validateError([]));