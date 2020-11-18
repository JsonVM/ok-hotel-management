/**
 * Aquì se encuentran el metodo para insertar la habitación
 */
const axios = require('axios');
//import config from "./config/index";
export default {
    data() {
        return {
            enEdicion: false,
            
            //objeto para guardar las habitaciones 
            habitacion: {
                id_habitacion: "",
                tipo_habitacion: "",
                numero_personas: "",
                precio: "",
                descripcion: "",
                imagen: "",
                estado:"disponible",
                acciones: true
            },
             show: true
            
        }

    },
    methods: {
        //metodo para guardar una habitación nueva
        crearSuEntidadDeDominio() {
            console.log("habitacion: " + this.habitacion)
            axios.post("http://localhost:3001/habitacion", this.habitacion).then((response) => {
                console.log(this.habitacion) 
                console.log("Habitación agregada correctamente");
                alert("la habitación fue registrada correctamente")
                console.log(response);

                })
                .catch((error) => {
                    alert("la habitación no se pudo registrar correctamente")
                console.log(error);
                });
                this.habitacion= {
                    id_habitacion: "",
                    tipo_habitacion: "",
                    numero_personas: "",
                    precio: "",
                    descripcion: "",
                    imagen: "",
                    acciones: true
                  };

        },
    }

};