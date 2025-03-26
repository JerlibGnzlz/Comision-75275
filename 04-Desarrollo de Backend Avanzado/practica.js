/*
!
/* --------------------------------------1----------------------------------- */

// Crear un servidor con el módulo nativo de nodejs “http”. Setear una respuesta que contenga el mensaje “¡Mi primer hola mundo desde backend!” 
// El servidor debe escuchar en el puerto 8080.  (Correr con nodemon)
// Probar el servidor desde el navegador.
// Hacer algún cambio en código y corroborar que se reinicie automáticamente.


// import http from "http"


// const app = http.createServer((request, response) => {
//     response.end("Saludos a todos")
// })

// app.listen(4000, () => {
//     console.log("servidor corriendo en el puerto http://localhost:4000")
// })


/*
!
/* --------------------------------------2----------------------------------- */

/**
 Estructurar un servidor basado en express, el cual escuche peticiones en el puerto 8080
 Realizar una función para el método GET en la ruta ‘/saludo’, el cual responderá con “¡Hola a todos, pero ahora desde express!”
 Ejecutar con nodemon y probar en el navegador el endpoint generado
 * ? APARTIR DE ACA ESTAREMOS UTILIZANDO ESTE MISMO SERVIDOR PARA TODOS LOS EJERCICIOS YA CON EXPRESS EN ESTA CLASE
 */

import express from "express"
const app = express()

/**
* ? Para poder recibir objetos en el body de la request
*/
app.use(express.json())


app.get("/saludos", (req, res) => {
    res.send("saludos a todos desde express en coderhouse")
})



/*
!
/* --------------------------------------3----------------------------------- */

// Crear un proyecto basado en express js, el cual cuente con un servidor que escuche en el puerto 8080. Además de configurar los siguientes endpoints:

// El endpoint del método GET a la ruta  ‘/bienvenida’ deberá devolver un html con letras en color azul, en una string, dando la bienvenida.
// El endpoint del método GET a la ruta ‘/usuario’ deberá devolver un objeto con los datos de un usuario falso: {nombre, apellido,edad, correo}

app.get("/bienvenido", (req, res) => {
    res.send(`<p style ="color:blue">Bienvenidos a la comision de coderhouse</p>`)
})


app.get("/usuario", (req, res) => {
    res.status(201).json({
        id: 2,
        nombre: "jerlib",
        apellido: "gnzlz",
        edad: 30
    })
})


/*
!
/* --------------------------------------4----------------------------------- */
//Caso práctico de uso de "params"
// Dado un arreglo de objetos de tipo usuario, realizar un servidor en express
//  que permita obtener dichos usuarios.
// La ruta raíz ‘/’ debe devolver todos los usuarios
// la ruta /:userId debe devolver sólo al usuario con dicho Id.


const arrayUsuarios = [
    {
        id: 1,
        nombre: "jerlib",
        apellido: "gnzlz",
        genero: "masculino",
        edad: 20
    },
    {
        id: 2,
        nombre: "jorge",
        apellido: "gnzlz",
        genero: "masculino",
        edad: 30
    },
    {
        id: 3,
        nombre: "josefa",
        apellido: "gnzlz",
        genero: "femenino",
        edad: 40
    },
    {
        id: 4,
        nombre: "fabiana",
        apellido: "gnzlz",
        genero: "femenino",
        edad: 50
    },
    {
        id: 5,
        nombre: "julieta",
        apellido: "gnzlz",
        genero: "femenino",
        edad: 22
    },
    {
        id: 6,
        nombre: "juliana",
        apellido: "gnzlz",
        genero: "femenino",
        edad: 22
    }
]


/**
 * ? Tiene que descomentarlo o comentar para que funcione o no pise mas adelante
 * ?  las rutas raiz ("/") que apuntan al mismo Array COMO por ejemplo el de genero*/

// app.get("/", (req, res) => {
//     res.send(arrayUsuarios)
// })

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


app.get("/usuario/:id", (req, res) => {

    const { id } = req.params

    try {
        const usuario = arrayUsuarios.find(user => user.id === Number(id))

        if (!usuario) {
            return res.status(404).json({ error: "usuario no encontrado" })
        } else {

            res.json(usuario)
        }

    } catch (error) {
        console.log(error)
    }

})


/*
!
/* --------------------------------------5----------------------------------- */
// Caso práctico de uso de "req.query"
// Dado un arreglo de objetos de tipo usuario, vamos a hacer un filtro por género

// La ruta raíz ‘/’ debe devolver todos los usuarios, pero ahora colocaremos
//  un query param con ?, indicando que queremos un género específico. 
// En caso de enviarlo sin query, debe devolver a todos los usuarios.


app.get("/", (req, res) => {

    const { genero } = req.query

    if (!genero || !["masculino", "femenino"].includes(genero)) {
        return res.status(400).json({ error: "genero no valido" })
    }

    const resultado = arrayUsuarios.filter(user => user.genero === genero)
    res.json(resultado)

})

/*
!
// /* --------------------------------------6----------------------------------- */
// Dada la frase: “Frase inicial”, realizar una aplicación que contenga un servidor en express,
//  el cual cuente con los siguientes métodos: 

// GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa

// GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ 
// contenga la palabra hallada en la frase en la posición dada (considerar que la primera palabra es la #1).

// POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al final de la frase. 
// Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ la posición 
// en que se agregó dicha palabra.

// PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y reemplaza en la frase 
// aquella hallada en la posición dada. Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra,
//  y en el campo ‘anterior’ la anterior.

// DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada
//  (considerar que la primera palabra tiene posición #1).

// Utilizar POSTMAN para probar funcionalidad thunderClient, y probar en el navegador las distintas rutas.




const array = ["Frase Inicial"]

app.get("/api/frases", (req, res) => {
    res.status(200).json(array)
})

app.post("/api/palabra", (req, res) => {

    const { palabra } = req.body

    if (!palabra) {
        res.status(400).json({ error: "falta la palabra" })
    }
    const nuevaPalabra = array.push(palabra)

    res.status(201).json({ message: "palabra agregada", nuevaPalabra })
})

app.put("/api/palabra/:pos", (req, res) => {

    const { pos } = req.params
    const { palabra } = req.body


    if (!palabra || !pos) {
        return res.status(400).json({ error: "falta la palabra" })
    }

    if (isNaN(pos)) {
        return res.status(400).json({ message: "La posición debe ser un número" })
    }

    const indice = Number(pos) - 1
    array[indice] = palabra


    res.status(200).json({ message: "palabra actualizada", palabra })
})


app.delete("/api/palabra/:pos", (req, res) => {
    try {
        const { pos } = req.params

        if (!pos || pos.length === 0 && pos < 0) {
            return res.status(400).json({ message: "Falta la posición" })
        }

        if (isNaN(pos)) {
            return res.status(400).json({ message: "La posición debe ser un numero" })
        }
        const eliminar = array.splice(pos, 1)

        if (eliminar.length === 0) {
            return res.status(404).json({ message: "Palabra no encontrada" })
        }

        res.json({ message: "palabra eliminada", eliminar })

    } catch (error) {
        console.log(error)
    }
})

app.listen(8080, () => {
    console.log("servidor corriendo en el puerto http://localhost:8080")
})

