
import UsersManagers from "./practica.js";

const usuario = async () => {
    const manager = new UsersManagers();

    await manager.crearUsuario({
        nombre: 'Coder',
        apellido: 'house',
        edad: 75275,
        curso: 'backend'
    });

    const usuarios = await manager.consultarUsuarios();
    console.log('Usuarios registrados con exito:', usuarios);
};

usuario();