const ServicioPg = require("../services/postgres");
let _servicio = new ServicioPg();
let validarReserva = reserva => {
  if (!reserva) {
    throw {
      ok: false,
      mensaje: "Toda la información es obligatoria."
    };
  }

  if (!reserva.fechaEntrada) {
    throw { ok: false, mensaje: "La fecha de entrada es obligatoria." };
  }
  if (!reserva.fechaSalida) {
    throw { ok: false, mensaje: "La fecha de salida es obligatoria" };
  }
  if (!reserva.cantPersonas) {
    throw { ok: false, mensaje: "La cantidad de personas es obligatoria" };
  }
  if (!reserva.nombre) {
    throw { ok: false, mensaje: "El nombre es obligatorio" };
  }
  if (!reserva.apellido) {
    throw { ok: false, mensaje: "El apellido es obligatorio" };
  }
  if (!reserva.email) {
    throw { ok: false, mensaje: "El email es obligatorio" };
  }
  if (!reserva.telefono) {
    throw { ok: false, mensaje: "El teléfono es obligatorio" };
  }
  if (!reserva.celular) {
    throw { ok: false, mensaje: "El celular es obligatorio." };
  }
  if (!reserva.cedula) {
    throw { ok: false, mensaje: "La cédula es obligatoria" };
  }

  
};
let guardarReserva = async (reserva) => {
  try {
    let sql = `INSERT INTO registros(
      nombre, apellido, email, telefono, celular, cedula, "fechaEntrada", "fechaSalida", "cantPersonas")
       VALUES (
           '${reserva.nombre}',
           '${reserva.apellido}',
           '${reserva.email}',
           '${reserva.telefono}',
           '${reserva.celular}',
           '${reserva.cedula}',
           '${reserva.fechaEntrada}',
           '${reserva.fechaSalida}',
           ${reserva.cantPersonas});`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;

} catch (error) {
    throw{ok: false};
}};

let consultarReserva = async () => {
  let sql = `SELECT * FROM registros`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

module.exports = { validarReserva, guardarReserva, consultarReserva };