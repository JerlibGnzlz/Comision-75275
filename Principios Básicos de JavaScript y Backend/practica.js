console.log(1)
console.log("practica");
console.log(undefined)
console.log(true)
console.log(false)
console.log([1, 2, 3])
console.log(
    {
        a: 1,
        b: 2,
        c: 3
    })



// let nombre = "juan"
let edad = 20
let precio = 200
const peliculas = ["Matrix", "Gladiator", "The lord of the rings", "el resplandor", "Hobbit"]
const series = ["Prison Break", "breaking bad", "Cobra Kai"]


edadIncrementada = ++edad
console.log(edadIncrementada)

console.log(series)

series.push("Narcos")
console.log(series)


let nombre = "Ismael"

nombre = "Gonzalo"
console.log(nombre);


const arreglo = [1, 2, 3]

arreglo[0] = 100

arreglo[arreglo.length - 1] = 200

console.log(arreglo)


/**
 * IMPERATIVO SERIA EL PASO A PASO DE UN PROCEDIMENTO
 */
const mostrarLista = (array) => {

    if (array.length === 0) {
        console.log("La lista esta vacia")
    } else {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i])
        }
    }
}

/**
 * DECLAREATIVO SERIA LO QUE HACE UN METODO POR NOSOTROS
 */

const mostrarLista1 = (array) => {

    if (array.length === 0) {
        console.log("La lista esta vacia")
    } else {
        array.forEach(element => {
            console.log(element)
        });
    }
}

mostrarLista(["uno", "dos", "tres"])


class Contador {
    constructor(nombre) {
        this.nombre = nombre
        this.contador = 0
    }

    static contadorGlobal = 0

    getResponsable() {
        return console.log(`El responsable es: ${this.nombre}`)
    }

    contar() {
        this.contador++
        Contador.contadorGlobal++
    }

    getCuentaIndividual() {
        return console.log(`el contador de ${this.nombre} es: ${this.contador}`)
    }


    getCuentaGlobal() {
        return console.log(`El contador global es: ${Contador.contadorGlobal}`)
    }
}

const contador1 = new Contador("Ismael")
const contador2 = new Contador("jerlib")

contador1.contar()
contador1.contar()
contador1.contar()


contador2.contar()
contador2.contar()
contador2.contar()
contador2.contar()

contador1.getResponsable()
contador2.getResponsable()

console.log(contador1.getCuentaIndividual())
console.log(contador2.getCuentaIndividual())
console.log(contador1.getCuentaGlobal())


