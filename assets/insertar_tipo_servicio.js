const axios = require('axios');

export default {
  data() {
    return {
      tipo_servicio: {
            id:"",
            nombre:"",
            descripcion: ""
      },

      fields: ["id","nombre", "descripcion"],

      lista_tipo_servicios: [{}],
    }
  },

  /**
   * se ejecuta cuando se carga la pagina
   */
  mounted() {
  },
  
  methods: {   

    /**
     * Se inserta el servicio en la base de datos con los datos suministrados
     * desde el formulario
     */
    crearTipoServicio() {
      this.lista_tipo_servicios.push(this.tipo_servicio);
      let direccion = "http://localhost:3001/tipo-servicio";
      axios
        .post(direccion, this.tipo_servicio)
        .then((response) => {
          console.log("el tipo servicio fue agregado correctamente");
          alert("El tipo servicio fue agregado correctamente");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("No se pudo agregar el tipo de servicio " + " ---Error: " + error + "---");
        });

      this.vacear();
    },

    /**
     * vacea las variables del objeto
     */
    vacear(){
        this.tipo_servicio = {
            id:"",
            nombre:"",
            descripcion:""
      };
    }
    
  }
};