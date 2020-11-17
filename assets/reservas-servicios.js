const axios = require('axios');

export default {
  data() {
    return {
      reserva_servicio: {
            cc_cliente:"",
            nombre:"",
            id_servicio:"",
            descripcion: "",
            fecha_inicio: "",
            fecha_fin: "",
            imagen:"",
            hora_inicio:"",
            hora_fin:""
      },

      cc: "",

      fields: ["cc_cliente", "nombre", "descripcion", "fecha_inicio", "fecha_fin", "imagen"],

      //aqui se almacenan las reservas de servicios del cliente en forma de lista
      lista_reservas_servicios: [{}],
      
      id_servicio:  [
        {value: null, text:"seleccione el servicio"}/** ,
        { value: "1", text: "Entretenimiento" },
        { value: "2", text: "Ocio" },
        { value: "3", text: "Evento" },
        { value: "4", text: "Relax" },
        { value: "5", text: "Alimentacion" }*/
    ],

      show: true
    }
  },

  /**
   * se ejecuta cuando se carga la pagina
   */
  mounted() {
    this.cargarServicios();
  },
  
  methods: {   

    /**
     * Se inserta el servicio en la base de datos con los datos suministrados
     * desde el formulario
     */
    crearReservaServicio() {
      this.lista_reservas_servicios.push(this.reserva_servicio);
      let direccion = "http://localhost:3001/reservas-servicios";
      axios
        .post(direccion, this.reserva_servicio)
        .then((response) => {
          console.log("La reserva del servicio fue agregado correctamente");
          alert("La reserva del servicio fue agregado correctamente");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("No se pudo agregar la reserva del servicio " + " ---Error: " + error + "---");
        });

      this.vacear();
    },

    /**
     * vacea las variables del objeto
     */
    vacear(){
        this.reserva_servicio = {
            cc_cliente:"",
            nombre:"",
            descripcion: "",
            fecha_inicio: "",
            fecha_fin: "",
            imagen:"",
            id_servicio:""
      };

    },
    /**
     *cargar todos los servicios de la DB y listarlos
     */
    cargar() {
      let url = "http://localhost:3001/reservas-servicios/"+this.cc;
      axios.get(url).then(respuesta => {
        let data = respuesta.data
        if (data.ok) {
          this.lista_reservas_servicios = data.info
          console.log(this.lista_reservas_servicios)
        }
        this.mensaje = data.mensaje;
        console.log(respuesta);
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error")
      });
    },

    cargarServicios(){

      let url = "http://localhost:3001/lista-servicios";
      axios.get(url).then(respuesta => {
        let data = respuesta.data
        if (data.ok) {
          this.id_servicio = data.info
          console.log(this.id_servicio)
        }
        this.mensaje = data.mensaje;
        console.log(respuesta);
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error")
      });
    }
  }
};