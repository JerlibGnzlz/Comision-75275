/* ------------------------ DESCOMENTAR TODO LO QUE SE QUIERE PROBAR CADA EJEMPLO ------------------------ */

/* -------------------------------------------------------------------------- */
// Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), 
// consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
// Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)
/* -------------------------------------------------------------------------- */

const productos = [
    {
        manzanas: 5,
        naranjas: 3,
        platanos: 2
    },
    {
        manzanas: 2,
        naranjas: 4,
        kiwis: 1
    },
    {
        platanos: 3,
        kiwis: 2,
        fresas: 1
    }, {
        yucas: 3,
        kiwis: 2,
        fresas: 1
    }
]

const sumarFrutas = productos.reduce((acc, fruta) => {
    Object.keys(fruta).forEach(producto => {
        /* ------------------------ DESCOMENTAR PARA PROBAR ------------------------ */

        // console.log('fruta:', producto, fruta[producto]);
        return acc[producto] = (acc[producto] ?? 0) + fruta[producto];
    })
    return acc;
}, {});
/* ------------------------ DESCOMENTAR PARA PROBAR ------------------------ */

// console.table(sumarFrutas);



/* -------------------------------------------------------------------------- */
/* ----------------------------- UTILIZANDO MAP ----------------------------- */
/* -------------------------------------------------------------------------- */

const numeros = [1, 2, 3, 4];

const duplicarNumero = (num) => {
    return num * 2;
}

const numerosDuplicados = numeros.map(duplicarNumero);

/* ------------------------ DESCOMENTAR PARA PROBAR ------------------------ */

// console.log(numerosDuplicados);

/* -------------------------------------------------------------------------- */
/* --------------------------- clase TicketManager -------------------------- */
/* -------------------------------------------------------------------------- */

// Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
// La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
// Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
// Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
// nombre
// lugar
// precio (deberá agregarse un 0.15 del valor original)
// capacidad (50 por defecto)
// fecha (hoy por defecto)
// El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.

class TicketManager {
    #precioBaseDeGanancia = 0.15;
    constructor() {
        this.eventos = [];
        this.id = 1;
    }

    getEventos() {
        return this.eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        const nuevoEvento = {
            id: this.id++,
            nombre,
            lugar,
            precio: precio + precio * this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: []
        };
        this.eventos.push(nuevoEvento);
        console.log(` Evento "${nombre}" agregado con éxito.`);
    }

    agregarUsuario(idEvento, idUsuario) {
        const evento = this.eventos.find(e => e.id === idEvento);

        if (!evento) {
            console.log(" Error: El evento no existe.");
            return;
        }
        if (evento.participantes.includes(idUsuario)) {
            console.log("El usuario ya está registrado en este evento.");
            return;
        }

        evento.participantes.push(idUsuario);
        console.log(` Usuario ${idUsuario} agregado al evento "${evento.nombre}".`);
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        const eventoOriginal = this.eventos.find(e => e.id === idEvento);
        if (!eventoOriginal) {
            console.log(" Error: El evento no existe.");
            return;
        }

        const nuevoEvento = {
            ...eventoOriginal,
            id: this.id++,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            participantes: []
        };

        this.eventos.push(nuevoEvento);
        console.log(` Evento "${eventoOriginal.nombre}" ahora está en gira en ${nuevaLocalidad} el ${nuevaFecha}.`);
    }
}

const manager = new TicketManager();

/* ------------------------ DESCOMENTAR PARA PROBAR ------------------------ */

// manager.agregarEvento("Concierto Rock", "Madrid", 100);
// manager.agregarEvento("Festival de Jazz", "Barcelona", 80);

// console.log(manager.getEventos());

// manager.agregarUsuario(1, 101);
// manager.agregarUsuario(1, 102);
// manager.agregarUsuario(1, 101);

// manager.ponerEventoEnGira(1, "Valencia", "2024-06-15");

// console.log(manager.getEventos());

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* ----------- // Definición de las funciones básicas Con Callback ---------- */
/* -------------------------------------------------------------------------- */

const sumar = (a, b) => {
    return a + b;
};

const restar = (a, b) => {
    return a - b;
};

const multiplicar = (a, b) => {
    return a * b;
};

const dividir = (a, b) => {
    return a / b;
};

// Función "operacion" que recibe un callback
const operacion = (a, b, callback) => {
    return resultado = callback(a, b);
}
/* ------------------------ DESCOMENTAR PARA PROBAR ------------------------ */

// console.log("Suma:", operacion(10, 5, sumar));
// console.log("Resta:", operacion(10, 5, restar));
// console.log("Multiplicación:", operacion(10, 5, multiplicar));
// console.log("División:", operacion(10, 5, dividir));



/* -------------------------------------------------------------------------- */
/* ------------------- UTILIZANDO PROMESAS CON THEN CATCH ------------------- */
/* -------------------------------------------------------------------------- */


const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve("Operación completada con éxito then catch");
        } else {
            reject("Algo salió mal con then catch");
        }
    }, 2000);
});
/* ------------------------ DESCOMENTAR PARA PROBAR ------------------------ */

miPromesa
    .then((resultado) => {
        // console.log(resultado);
    }).catch((error) => {
        // console.error(error);
    })

/* -------------------------------------------------------------------------- */
/* -------------------- UTLIZANDO PROMESAS CON TRY CATCH -------------------- */
/* -------------------------------------------------------------------------- */

const miPromesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve("Operación completada con éxito con try catch");
        } else {
            reject("Algo salió mal try catch");
        }
    }, 3000);
});

try {
    miPromesa1
        /* ------------------------ DESCOMENTAR PARA PROBAR ------------------------ */

        .then((resultado) => {
            // console.log(resultado);
        })
        .catch((error) => {
            // console.error(error);
        })
} catch (error) {
    // console.log(error)
}


/* -------------------------------------------------------------------------- */
/* ------------------- UTLIZANDO PROMESAS CON ASYNC AWAIT ------------------- */
/* -------------------------------------------------------------------------- */

const miPromesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = false;
        if (exito) {
            resolve("Operación completada con éxito con async await");
        } else {
            reject("Algo salió mal con async await");
        }
    }, 3000);
});

const promesaAsync = async () => {
    try {
        /* ------------------------ DESCOMENTAR PARA PROBAR ------------------------ */
        const resultado = await miPromesa2
        // console.log(resultado)
    } catch (error) {
        // console.log(error)
    }
}

promesaAsync()

/* -------------------------------------------------------------------------- */
/* -------------------- Calculadora positiva con promesas ------------------- */
/* -------------------------------------------------------------------------- */


// Definir función suma:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
// En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
// En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos
// Definir función resta:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
// En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
// En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”


// RESPUESTA:



const suma = (a, b) => {

    let validarCero = () => {
        if (a === 0 || b === 0) {
            return "Operación innecesaria";
        }
    }

    let validarNegativo = () => {
        if (a + b < 0) {
            return "La calculadora solo puede devolver valores positivos";
        }
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (validarCero() || validarNegativo()) {
                reject(validarCero() || validarNegativo());
            } else {
                resolve(a + b);
            }
        }, 2000);
    })
}


const resta = (a, b) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a === 0 || b === 0) {
                reject("Operación innecesaria");
            } else if (a - b < 0) {
                reject("La calculadora solo puede devolver valores positivos");
            } else {
                resolve(a - b);
            }
        }, 2000);
    })
}


/* ------------------------ DESCOMENTAR PARA PROBAR ------------------------ */

// suma(0, 5)
//     .then((resultado) => {
//         console.log(`La resta ha sido exitosa. Resultado: ${resultado}`);
//     }).catch((error) => {
//         console.log(error);
//     })

// suma(10, 10)
//     .then((resultado) => {
//         console.log(`La suma ha sido exitosa. Resultado: ${resultado}`);
//     }).catch((error) => {
//         console.log(error);
//     })


// suma(-10, -10)
//     .then((resultado) => {
//         console.log(`La suma ha sido exitosa. Resultado: ${resultado}`);
//     }).catch((error) => {
//         console.log(error);
//     })


/* ------------------------ DESCOMENTAR PARA PROBAR ------------------------ */

// resta(0, 5)
//     .then((resultado) => {
//         console.log(`La resta ha sido exitosa. Resultado: ${resultado}`);
//     }).catch((error) => {
//         console.log(error);
//     })

// resta(-3, -3)
//     .then((resultado) => {
//         console.log(`La resta ha sido exitosa. Resultado: ${resultado}`);
//     }).catch((error) => {
//         console.log(error);
//     })

// resta(2, 3)
//     .then((resultado) => {
//         console.log(`La resta ha sido exitosa. Resultado: ${resultado}`);
//     }).catch((error) => {
//         console.log(error);
//     })

/* -------------------------------------------------------------------------- */
/* ---- Calculadora con promesas utlizando async/await y try catch ------- */
/* -------------------------------------------------------------------------- */

//     Definir una función multiplicación:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
// Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
// Definir la misma función división utilizada en esta clase.
// Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch

// RESPUESTA:


const multiplicacion = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                reject("La calculadora solo puede devolver valores positivos");
            } else {
                resolve(a * b);
            }
        }, 2000);
    })
}

const division = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                reject("La calculadora solo puede devolver valores positivos");
            } else {
                resolve(a / b);
            }
        }, 2000);
    })
}

const calculos = async () => {
    try {
        const resultado = await multiplicar(4, 4);
        console.log(`La multiplicación ha sido exitosa. Resultado: ${resultado}`);
        const resultado2 = await dividir(2, 5);
        console.log(`La división ha sido exitosa. Resultado: ${resultado2}`);
    } catch (error) {
        console.log(error);
    }
}
/* ------------------------ DESCOMENTAR PARA PROBAR ------------------------ */
// calculos()