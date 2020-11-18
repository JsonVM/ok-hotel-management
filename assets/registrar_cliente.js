/**
 * Aquì se encuentran el metodo para insertar el cliente
 */
const axios = require('axios');
//import config from "./config/index";
export default {
    data() {
        return {
            enEdicion: false,
            
            //objeto para guardar los lcientes
            cliente: {
                cc: "",
                nombre: "",
                apellidos: "",
                correo: "",
                celular: "",
                telefono: "",
                acciones: true
            },
             show: true
            
        }

    },
    methods: {
        //metodo para guardar un cliente nuevo
        registrarCliente() {
            axios.post("http://localhost:3001/cliente", this.cliente).then((response) => {
                console.log(this.cliente) 
                alert("El cliente fue registrado correctamente")
                console.log(response);

                })
                .catch((error) => {
                    alert("El cliente no se pudo registrar correctamente")
                console.log(error);
                });
                this.cliente = {
                    cc: "",
                    nombre: "",
                    apellidos: "",
                    correo: "",
                    celular: "",
                    telefono: "",
                    acciones: true
                  };

        },
    }

};