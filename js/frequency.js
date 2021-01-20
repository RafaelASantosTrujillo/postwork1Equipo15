/*
Escribir una función`frequency` que recibe un string como argumento.Esta función debe contar la frecuencia o el número
de veces que se repite cada carácter.El resultado debe mostrarse en un objeto donde las propiedades sean los
caracteres, y los valores sean la frecuencia.Los resultados deben ordenarse ascendentemente por los caracteres y no la
frecuencia.
*/
function frequency(string) {
    var obj = {};
    var array = [];
    var chars = string.split("");
    chars.forEach((element) => {
        obj[element] = (obj[element] || 0) + 1;
    });
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        array.push([keys[i], obj[keys[i]]]);
    }
    array.sort();
    var obj = {};
    for (var keys in array) {
        var key = array[keys];
        obj[key[0]] = key[1];
    }
    return obj;
}
console.log("Función frequency")
console.log("Test 1:", frequency("cccbbbaaa"));
// {a: 3, b: 3, c: 3}
console.log("Test 2:", frequency("www.bedu.org"));
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log("Test 3:", frequency("john.doe@domain.com"));
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
