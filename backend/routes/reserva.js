
const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/reserva");

router.get("/reserva", (req, res) => {
    _controlador
      .consultarReserva()
      .then(respuestaDB => {
        let registros = respuestaDB.rows;
        res.send({ ok: true, info: registros, mensaje: "reservas consultadas" });
      })
      .catch(error => {
        res.send(error);
      });
  });


router.post("/reserva", (req, res) => {
  try {
    let reserva = req.body;
    _controlador.validarReserva(reserva);
    //_controlador.validarCedula(reserva);

    _controlador.guardarReserva(reserva).then(respuestaDB => {
        res.send({ ok: true, mensaje: "reserva guardada", info: reserva});
      })
      .catch(error => {
        res.send(error);
      });

  } catch (error) {
    res.send(error);
  }
});

module.exports = router; 