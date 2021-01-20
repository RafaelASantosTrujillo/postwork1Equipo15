/*
Escribir una función llamada deepEqual que reciba dos argumentos y retorne true si son
el mismo valor o si son objetos con las mismas propiedades, en este último caso los
valores de las propiedades deben ser comparados con una llamada recursiva de deepEqual.
Usando el operador typeof puedes determinar si ambas variables son objetos, de ser así
se debe llamar nuevamente deepEqual para comparar las propiedades de dichos objetos, 
en caso contrario solo es necesario revisar si ambas variables son estrictamente 
iguales.
La función Object.keys() es útil para obtener las propiedades de los objetos.
 */
function deepEqual(a, b) {
    if (typeof(a) === "object" && typeof(b)==="object"){
        var aKeys = Object.keys(a).sort();
        var bKeys = Object.keys(b).sort();
        if(!deepEqual(aKeys.length, bKeys.length)) {
            return false;
        }
        for(let i = 0; i < aKeys.length; i++) {
            if(!deepEqual(aKeys[i], bKeys[i])) {
                return false;
            }
            if(!deepEqual(a[aKeys[i]], b[aKeys[i]])) {
                return false;
            }
        }
        return true;
    }else if (a === b){
        return true
    }else{
        return false
    }
}
var john = {
    firstName: "John",
    lastName: "Doe",
};
console.log("Función deepEqual")
console.log("Test 1:", deepEqual(1, 1)); // true
console.log("Test 2:", deepEqual(1, "1")); // false
console.log("Test 3:", deepEqual(john, john)); // true
console.log("Test 4:", deepEqual(john, { firstName: "John", lastName: "Doe" })); // true
console.log("Test 5:", deepEqual(john, { firstName: "John" })); // false