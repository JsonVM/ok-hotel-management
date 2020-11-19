const { Router } = require('express');
const router = Router();
const _controlador = require("../controllers/servicios");

/**
 * Ruta para poder hacer get en el api (consultar los servicios)
 */
router.get('/servicios', (req, res) =>{
    _controlador.consultarServicios().then(respuestaDB => {
        let registros = respuestaDB.rows;
        res.send({ ok: true, info: registros, mensaje: "servicios consultados correctamente" });
    }).catch(error => {
        res.send(error);
    });
});

/**
 * ruta para omar la lista de los servicios que hay
 */
router.get('/lista-servicios', (req, res) =>{
  _controlador.consultarListaServicios().then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "servicios consultados correctamente" });
  }).catch(error => {
      res.send(error);
  });
});

/**
 * Ruta para poder hacer un get al api del tipo de los servicios
 */
router.get('/tipo-servicio', (req, res) =>{
  _controlador.consultarTipoServicio().then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "tipo de servicios consultados correctamente" });
  }).catch(error => {
      res.send(error);
  });
});

/**
 * Ruta para poder hacer el post en el api (insertar un tipo de servicio)
 */
router.post("/tipo-servicio", (req, res) => {
  try {
    let tipo_servicio = req.body;
    _controlador.guardarTipoServicio(tipo_servicio).then(respuestaDB => {
      res.send({ok: true, mensaje: "tipo servicio guardado correctamente", info: tipo_servicio});
    }).catch(error => {
      res.send(error.response);
    });
  } catch (error) {
    res.send(error);
  }
});

/**
 * Ruta para poder hacer el post en el api (insertar un servicio)
 */
router.post("/servicios", (req, res) => {
    try {
      let servicio = req.body;
      _controlador.guardarServicio(servicio).then(respuestaDB => {
        res.send({ok: true, mensaje: "servicio guardado correctamente", info: servicio});
      }).catch(error => {
        res.send(error.response);
      });
    } catch (error) {
      res.send(error);
    }
  });

module.exports = router;