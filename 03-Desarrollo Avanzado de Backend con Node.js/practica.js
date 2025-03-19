/*
!
 /* --------------------------------------1----------------------------------- */




// Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20.
//  Indicar por consola la finalización de esta operación con un mensaje.
// Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado
//  a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

// Nota: Considerar que esta operación debe realizarse de forma asíncrona.


const geberarNumeros = () => {
    return new Promise((resolve, reject) => {
        const conteo = {}

        for (let i = 0; i < 10000; i++) {
            const numero = Math.floor(Math.random() * 20) + 1
            conteo[numero] = (conteo[numero] ?? 0) + 1
        }
        resolve(conteo)
    })
}

// geberarNumeros()
//     .then((conteo) => console.log("Numeros aleatorios:", conteo))
//     .catch((error) => console.log(error))


/*
 !
 /* --------------------------------------2----------------------------------- */


// ¿Cómo lo hacemos? Se creará una clase “UsersManager” que permitirá guardar usuarios en un atributo estático.
//  El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto.
//  Utilizar el módulo nativo crypto.
// El manager debe contar con los siguientes métodos:
// El método “Crear usuario” debe recibir un objeto con los campos:
// Nombre
// Apellido
// Nombre de usuario
// Contraseña
// El método debe guardar un usuario en un atributo estático llamado “Usuarios”, recordando que la contraseña debe estar hasheada por seguridad

// El método “Mostrar Usuarios” imprimirá en consola todos los usuarios almacenados.
// El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.



import { createHmac } from 'node:crypto';

class UsersManager {
    static usuarios = [];

    static hashPassword(password) {
        const hash = createHmac('sha256', password)
            .update(password)
            .digest('hex');
        return hash;
    }

    static crearUsuario({ nombre, apellido, username, password }) {
        const usuario = {
            nombre,
            apellido,
            username,
            password: this.hashPassword(password)
        };

        this.usuarios.push(usuario);
        console.log(`Usuario ${nombre} creado exitosamente.`);
    }

    static mostrarUsuarios() {
        if (!this.usuarios) {
            console.log("No hay usuarios registrados.");
            return;
        }
        console.log("Lista de usuarios:", this.usuarios);
    }

    static validarUsuario(nombre, password) {
        const usuario = this.usuarios.find(user => user.nombre === nombre);

        if (!usuario) {
            console.log("❌ Error: Usuario no encontrado.");
            return;
        }

        const passwordHasheada = this.hashPassword(password);
        if (usuario.password === passwordHasheada) {
            console.log("✅ Logueado correctamente.");
        } else {
            console.log("❌ Error: Contraseña incorrecta.");
        }
    }
}

// UsersManager.crearUsuario({ nombre: "Jerlib", apellido: "Gnzlz", username: "jerlibGnzlz", password: "jerlib123" });
// UsersManager.crearUsuario({ nombre: "backend", apellido: "modulo", username: "coderh", password: "CoderHouse123" });
// UsersManager.crearUsuario({ nombre: "Coder", apellido: "House", username: "coderh", password: "CoderHouse123" });
// UsersManager.mostrarUsuarios();
// UsersManager.validarUsuario("Jerlib", "jerlib123");
// UsersManager.validarUsuario("backend", "jerlib123");
// UsersManager.validarUsuario("coder", "CoderHouse123");



/*
 !
 /* --------------------------------------3----------------------------------- */


// Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).

// Debe contar con una variable que almacene la fecha actual (utilizar moment())
// Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).
// Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());
// Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el método diff()
// Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al correr el programa.



import moment from 'moment';

const fechaActual = moment();
const fechaNacimiento = moment('1990-11-16', 'YYYY-MM-DD');

if (fechaNacimiento.isValid()) {
    const diasPasados = fechaActual.diff(fechaNacimiento, 'days');
    // console.log(`Han pasado ${diasPasados} dias desde mi nacimiento.`);
} else {
    // console.log('La fecha de nacimiento no es valida.')
}


/*
 !
 /* --------------------------------------4----------------------------------- */


// Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual.
//  Posteriormente leer el archivo y mostrar el contenido por consola. 
// Utilizar el módulo fs y sus operaciones de tipo callback.


import { writeFile, readFile } from 'fs';

const fechaHoraActual = moment()

writeFile('fechaHora.txt', `Fecha y hora actual: ${fechaHoraActual}`, 'utf8', (err) => {
    if (err) {
        console.log("Error al escribir el archivo:", err);
        return;
    }

    readFile('fechaHora.txt', 'utf8', (err, data) => {
        if (err) {
            // console.log("Error al leer el archivo:", err);
            return;
        }
        // console.log("Contenido del archivo callback:", data);
    });
});


/*
 !
 /* --------------------------------------5----------------------------------- */



// import fs from 'fs';

const fecha = async () => {

    const fechaHora = moment()

    await fs.writeFile('fechaHoraasync.txt', `Fecha y hora actual: ${fechaHora}`, 'utf8', (err) => {
        if (err) {
            console.log("Error al escribir el archivo:", err);
            return;
        }

        fs.readFile('fechaHoraasync.txt', 'utf8', (err, data) => {
            if (err) {
                // console.log("Error al leer el archivo:", err);
                return;
            }
            // console.log("Contenido del archivo async:", data);
        });
    });
}

// fecha()

/*
 !
 /* --------------------------------------6----------------------------------- */


//TODO: Esta misma importacion la pueden Utilizar para los siguientes ejercicios [import fs from "fs/promises"]

import fs from "fs/promises"


const infoPackage = async () => {
    const filePackageJson = await fs.readFile('package.json', 'utf8');
    try {

        const formatoObjeto = JSON.parse(filePackageJson);
        // const fileSize = filePackageJson.length;
        const fileSize = await fs.stat("package.json");


        const info = {
            objetoInfo: filePackageJson,
            contenidoObj: formatoObjeto,
            size: fileSize
        };

        console.log("Objeto info:", info);

        const infoJsonStr = JSON.stringify(info, null, 2);
        await fs.writeFile('info.json', infoJsonStr, 'utf8');

        console.log("Objeto info guardado en 'info.json'.");
    } catch (error) {
        console.error("Ocurrió un error:", error);
        throw new Error("No se pudo procesar el archivo correctamente.");
    }
}

// infoPackage();


/*
 !
 /* --------------------------------------7----------------------------------- */


// Cómo lo hacemos? Se creará una clase que permita gestionar usuarios usando fs.promises,
//  éste deberá contar sólo con dos métodos: Crear un usuario y consultar los usuarios guardados.

// El Manager debe vivir en una clase en un archivo externo llamado UsersManager.js (Como el realizado en la clase pasada).
// El método “Crear usuario” debe recibir un objeto con los campos:
// Nombre
// Apellido
// Edad
// Curso
// El método debe guardar un usuario en un archivo “Usuarios.json”, deben guardarlos dentro de un arreglo, ya que se trabajarán con múltiples usuarios
// El método “ConsultarUsuarios” debe poder leer un archivo Usuarios.json y devolver el arreglo correspondiente a esos usuarios

// import fs from "fs/promises";

class UsersManagers {
    constructor() {
        this.file = 'Usuarios.json';
    }

    crearUsuario = async (usuario) => {
        let usuarios = [];
        try {
            const data = await fs.readFile(this.file, 'utf-8');
            usuarios = JSON.parse(data);
        } catch (error) {
            console.log(error.message);
        }

        usuarios.push(usuario);

        await fs.writeFile(this.file, JSON.stringify(usuarios, null, 2));
        console.log('Usuario creado con exito:', usuario);
    };

    consultarUsuarios = async () => {
        try {
            const data = await fs.readFile(this.file, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            // return [];
            console.log(error)
        }
    };
}

export default UsersManagers;


//TODO: PARA HACER ESTE EJERCICIO DEBERÁS LLAMAR AL ARCHIVO usuario.js con [node --watch usuario.js]

//Exitos 