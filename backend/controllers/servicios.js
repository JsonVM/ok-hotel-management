//usando el servicio de postgres
const servicioPg = require('../services/postgres');

/**
 * Metodo para insertar un objeto servicio en la base de datos
 * @param {*} servicio objeto que se va a insertar en la base de datos
 */
let guardarServicio = async (servicio)=> {
    try {
        let _servicio = new servicioPg()
        let sql = `INSERT INTO public.servicios
        (nombre, hora_inicio, hora_fin, tipo_servicio, imagen, num_personas)
        VALUES ('${servicio.nombre}',
                '${servicio.hora_inicio}',
                '${servicio.hora_fin}',
                '${servicio.tipo_servicio}',
                '${servicio.imagen}',
                '${servicio.num_personas}'
        );`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false };
    }
}

/**
 * Metodo para consultar todos los servicios que están en la base de datos
 */
let consultarServicios = async () => {
    try {
        let _servicio = new servicioPg()
        let sql = `SELECT servicios.id, hora_inicio, hora_fin, tipo_servicio.nombre as tipo_servicio, imagen,
         num_personas, servicios.nombre FROM public.servicios
        inner join tipo_servicio on tipo_servicio.id = servicios.tipo_servicio`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false, err: error };
    }
}

/**
 * Metodo para consultar un servicio con el id
 */
let consultarUnServicio = async (id) => {
    try {
        let _servicio = new servicioPg()
        let sql = `SELECT * from servicios where id = ${id}`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false, err: error };
    }
}

/**
 * Metodo para tomar la lista de servicios que puede reservar el usuario
 */
let consultarListaServicios = async () => {
    try {
        let _servicio = new servicioPg()
        let sql = `SELECT id as value, nombre as text from servicios`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false, err: error };
    }
}

/**
 * Metodo para traer los tipos de servicio que hay actualmente
 */
let consultarTipoServicio = async () => {
    try {
        let _servicio = new servicioPg()
        let sql = `select id as value,nombre as text from tipo_servicio`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false, err: error };
    }
}

/**
 * Metodo para crear un nuevo tipo de servicio
 * @param {*} tipo_servicio  los valores necesarios para un tipo de servicio en forma de json
 */
let guardarTipoServicio = async (tipo_servicio)=> {
    try {
        let _servicio = new servicioPg()
        let sql = `INSERT INTO public.tipo_servicio(
            nombre, descripcion)
            VALUES('${tipo_servicio.nombre}',
                '${tipo_servicio.descripcion}'
        );`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false };
    }
}

let eliminarServicio = async (id) => {
    try {
      let _servicio = new servicioPg();
      let sql = `DELETE FROM public.servicios
      WHERE id =${id}`;
      let respuesta = await _servicio.ejecutarSql(sql);
      return respuesta;
    } catch (error) {
      throw { ok: false , err:error};
    }
  };

  let modificarServicio = async (servicio, id) => {
    if (servicio.id != id) {
      throw {
        ok: false,
        mensaje: "el id del servicio no corresponde al enviado.",
      };
    }
    try{
        let _servicio = new servicioPg();
        let sql = `UPDATE public.servicios set
        hora_inicio='${servicio.hora_inicio}',
        hora_fin='${servicio.hora_fin}',
        tipo_servicio='${servicio.tipo_servicio}',
        imagen='${servicio.imagen}',
        num_personas=${servicio.num_personas},
        nombre='${servicio.nombre}'
        WHERE id = ${id}`;

        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;

    } catch(error) {
        throw{ok: false ,
        err: error}
    }
  };

module.exports = {guardarServicio, consultarServicios, consultarUnServicio, consultarTipoServicio,
     consultarListaServicios, guardarTipoServicio, eliminarServicio, modificarServicio};