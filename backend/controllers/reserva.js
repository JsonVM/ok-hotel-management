const ServicioPg = require("../services/postgres");
let _servicio = new ServicioPg();
let validarReserva = reserva => {
  if (!reserva) {
    throw {
      ok: false,
      mensaje: "Toda la información es obligatoria."
    };
  }

  if (!reserva.cedula) {
    throw { ok: false, mensaje: "La fecha de entrada es obligatoria." };
  }
  if (!reserva.fechaSalida) {
    throw { ok: false, mensaje: "La fecha de salida es obligatoria" };
  }
  if (!reserva.fechaEntrada) {
    throw { ok: false, mensaje: "La fecha de entrada es obligatoria." }; 
  }

};


let guardarReserva = async (reserva) => {
  try {
    let sql = `INSERT INTO reservas_habitaciones(
      id_habitacion, cc_cliente, fecha_entrada, fecha_salida)
       VALUES (
           '${reserva.id_habitacion}',
           '${reserva.cedula}',
           '${reserva.fechaEntrada}',
           '${reserva.fechaSalida}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    sql = `UPDATE public.habitaciones
    SET estado="ocupada"
    WHERE id_habitacion = ${reserva.id_habitacion};`
    return respuesta;

} catch (error) {
    throw{ok: false};
}};

let consultarReserva = async () => {
  let sql = `SELECT * FROM reservas_habitaciones`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

module.exports = { validarReserva, guardarReserva, consultarReserva };
