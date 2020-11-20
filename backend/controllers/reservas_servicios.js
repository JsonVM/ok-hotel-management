//usando el servicio de postgres
const servicioPg = require('../services/postgres');

/**
 * Metodo para consultar las reservas de un cliente
 * @param {*} cc la cedula del cliente
 */
let consultarReservasServicios = async (cc) => {
    try {
        let _servicio = new servicioPg()
        let sql = `SELECT reservas_servicios.id, id_servicio, cc_cliente,
        to_char(fecha_inicio, 'YYYY-MM-DD') as fecha_inicio, to_char(fecha_fin, 'YYYY-MM-DD') fecha_fin,
        to_char(reservas_servicios.hora_inicio, 'HH:MM') as hora_inicio, 
        to_char(reservas_servicios.hora_fin, 'HH:MM') as hora_fin, 
        imagen, nombre
        FROM public.reservas_servicios
        inner join servicios on id_servicio = servicios.id
            where cc_cliente = '${cc}'`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false, err: error };
    }
}

/**
 * Metodo para reservar un servicio por el cliente
 * @param {*} reserva_servicio los datos de la reserva
 */
let guardarReservaServicio = async (reserva_servicio)=> {
    try {
        let _servicio = new servicioPg()
        let sql = `INSERT INTO public.reservas_servicios(
            id_servicio, cc_cliente, fecha_inicio, fecha_fin, hora_inicio, hora_fin)
            VALUES (
                '${reserva_servicio.id_servicio}',
                '${reserva_servicio.cc_cliente}',
                '${reserva_servicio.fecha_inicio}',
                '${reserva_servicio.fecha_fin}',
                '${reserva_servicio.hora_inicio}',
                '${reserva_servicio.hora_fin}'
        );`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false };
    }
}

let eliminarReservaServicio = async (id) => {
    try {
      let _servicio = new servicioPg();
      let sql = `DELETE FROM public.reservas_servicios
      WHERE id =${id}`;
      let respuesta = await _servicio.ejecutarSql(sql);
      return respuesta;
    } catch (error) {
      throw { ok: false , err:error};
    }
  };

module.exports = {consultarReservasServicios, guardarReservaServicio, eliminarReservaServicio};