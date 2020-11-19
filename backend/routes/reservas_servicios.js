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

module.exports = router;