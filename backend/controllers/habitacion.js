/**
 * Controlador de habitacion
 */

//importar el servicion de postgres
const servicioPg = require("../services/postgres");

/**
 * Guardando el mantenimineto en la base de datos
 * @param {*} habitacion datos del mantenimiento en forma de JSON
 */
let guardarSuEntidadDeDominio = async (habitacion) => {
    try {
        let _servicio = new servicioPg();
        let sql = `INSERT INTO public.habitaciones(
          id_habitacion, tipo_habitacion, numero_personas, precio, descripcion, imagen)
          VALUES (
              '${habitacion.id_habitacion}',
              '${habitacion.tipo_habitacion}',
              '${habitacion.numero_personas}',
              '${habitacion.precio}',
              '${habitacion.descripcion}',
              '${habitacion.imagen}'
              );`;
        let respuesta = await _servicio.ejecutarSql(sql);
        console.log("se insertó correctamente");
        return respuesta;

    } catch (error) {
        console.log("no se pudo insertar correctamente");
        throw { ok: false, err: error };
    }
};

//consultar todas las habitaciones
let listarSuEntidadDeDominio = async () => {
    try {
        let _servicio = new servicioPg();
        let sql = `SELECT id_habitacion, tipo_habitacion, numero_personas, precio, descripcion, imagen from public.habitaciones`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw { ok: false };
    }
};

//exportando metodos en forma de JSON
module.exports = {
   guardarSuEntidadDeDominio,
   listarSuEntidadDeDominio
};