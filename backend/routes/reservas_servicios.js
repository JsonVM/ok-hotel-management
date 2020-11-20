const { Router } = require('express');
const router = Router();
const _controlador = require("../controllers/reservas_servicios");

/**
 * Ruta para poder hacer get en el api (consultar los servicios)
 */
router.get('/reservas-servicios/:cc', (req, res) =>{
    let cc = req.params.cc;
    _controlador.consultarReservasServicios(cc).then(respuestaDB => {
        let registros = respuestaDB.rows;
        res.send({ ok: true, info: registros, mensaje: "servicios consultados correctamente" });
    }).catch(error => {
        res.send(error);
    });
});

/**
 * Consultar una reserva de servicio
 */
router.get('/reserva-servicio/:id', (req, res) =>{
  let id = req.params.id;
  _controlador.consultarUnaReservaServicio(id).then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "reserva de servicio consultado correctamente" });
  }).catch(error => {
      res.send(error);
  });
});

/**
 * Ruta para poder hacer el post en el api (insertar una reserva de servicio)
 */
router.post("/reservas-servicios", (req, res) => {
    try {
      let reserva_servicio = req.body;
      _controlador.guardarReservaServicio(reserva_servicio).then(respuestaDB => {
        res.send({ok: true, mensaje: "servicio guardado correctamente", info: reserva_servicio});
      }).catch(error => {
        res.send(error.response);
      });
    } catch (error) {
      res.send(error);
    }
  });

  /**
 * Eliminar una reserva de servicio
 */
router.delete("/reservas-servicios/:id", (req, res) => {
  let id = req.params.id;
  _controlador
    .eliminarReservaServicio(id)
    .then((respuestaDB) => {
      res.send({ ok: true, info: {}, mensaje: "servicio eliminado correctamente" });
    })
    .catch((error) => {
      res.send(" Ocurrió un error: "+ error);
    });
});

/**
 * Modificar una reserva de servicio
 */
router.put("/reservas-servicios/:id", (req, res) => {
  let id = req.params.id;
  let reserva_servicio = req.body;
  _controlador
    .modificarReservaServicio(reserva_servicio, id)
    .then((respuestaDB) => {
      res.send({ ok: true, mensaje: "la reserva de servicio ha sido modificada correctamente", info: respuestaDB });
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;