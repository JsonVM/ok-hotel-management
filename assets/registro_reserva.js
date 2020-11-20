const axios = require('axios');

export default {
  data() {
    return {
      reserva: {
            cedula:"",
            id_habitacion:this.$route.query.param,
            fechaEntrada: "",
            fechaSalida: "",
      },

    }
  },

  /**
   * se ejecuta cuando se carga la pagina
   */
  mounted() {
    console.log(this.$route.query.param);
},
  methods: {   
    /**
     * Se inserta el servicio en la base de datos con los datos suministrados
     * desde el formulario
     */
    crearReserva() {
        let url = "http://localhost:3001/reserva"
        axios.post(url, this.reserva).then((response) => {
            // handle success
            console.log(response);
          }).catch((error) => {
            // handle error
            console.log(error);
          });
        }
    },


     listarReserva() {

        let url = "http://localhost:3000/reserva";
        axios.get(url).then((response) => {
            let paginas = response.data.info;
            let data = "";
            let data1 = "";
            for (let i = 0; i < paginas.length; i++) {
              let data = paginas[i];
              
                data1 += "<tr>"
                data1 += `<td>${data.nombre}</td>`
                data1 += `<td>${data.apellido}</td>`
                data1 += `<td>${data.email}</td>`
                data1 += `<td>${data.telefono}</td>`
                data1 += `<td>${data.celular}</td>`
                data1 += `<td>${data.cedula}</td>`
                data1 += `<td>${data.fechaEntrada}</td>`
                data1 += `<td>${data.fechaSalida}</td>`
                data1 += `<td>${data.cantPersonas}</td>`

                data1 += "<tr>"
                console.log(data1);
                document.getElementById("lista_reservas").innerHTML = data1;
            }
            
          })
          .catch((error) => {
            console.log(error);
          });
      }
  }
