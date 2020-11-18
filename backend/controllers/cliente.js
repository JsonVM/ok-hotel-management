/**
 * Controlador de habitacion
 */

//importar el servicion de postgres
const servicioPg = require("../services/postgres");

/**
 * Guardando el cliente en la base de datos
 * @param {*} cliente datos del cliente en forma de JSON
 */
let guardarCliente = async (cliente)=> {
    try {
        let _servicio = new servicioPg();
        let sql = `INSERT INTO public.clientes(
          cc, nombre, apellidos, correo, celular, telefono)
          VALUES (
              '${cliente.cc}',
              '${cliente.nombre}',
              '${cliente.apellidos}',
              '${cliente.correo}',
              '${cliente.celular}',
              '${cliente.telefono}'
              );`;
        let respuesta = await _servicio.ejecutarSql(sql);
        console.log("se insertó correctamente");
        return respuesta;

    } catch (error) {
        console.log("no se pudo insertar correctamente");
        throw { ok: false, err: error };
    }
};

//consultar todos los clientes
let listarClientes = async () => {
    try {
        let _servicio = new servicioPg();
        let sql = `SELECT cc, nombre, apellidos, correo, celular, telefono from public.clientes`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw { ok: false };
    }
};


//exportando metodos en forma de JSON
module.exports = {
    guardarCliente,
    listarClientes
};