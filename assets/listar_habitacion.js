const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,
  
            //En este arreglo se meten todas las habitaciones
            lista_habitaciones: [
                {
                    id_habitacion: "",
                    tipo_habitacion: "",
                    numero_personas: "",
                    precio: "",
                    descripcion: "",
                    imagen: "",
                }
            ],
            habitacion: {
                id_habitacion: "",
                tipo_habitacion: "",
                numero_personas: "",
                precio: "",
                descripcion: "",
                imagen: "",
            },

            fields: [
                {
                    key: 'id_habitacion',
                    label: 'Número de habitación',
                },
                {
                    key: 'tipo_habitacion',
                    label: 'Tipo',
                },
                {
                    key: 'numero_personas',
                    label: 'Número de personas'
        
                },
                {
                    key: 'precio',
                    label: 'Precio'
                },
                {
                    key: 'descripcion',
                    label: 'Descripción'
                },
                {
                    key: 'imagen',
                    label: 'Imagen'
                }
              
            ],
            show: true
        }

    },
    //cuando se carga la pagina se llama el metodo para listar las habitaciones
    mounted() {
        this.cargarHabitaciones()
    },
    methods: {

        cargarHabitaciones() {
            let url = "http://localhost:3001/habitaciones";
            axios.get(url).then(respuesta => {
                let data = respuesta.data
                
                if (data.ok) {
                    this.lista_habitaciones = data.info
                    console.log("lista: " + this.lista_habitaciones.data)
                }
                this.mensaje = data.mensaje;
                console.log(respuesta);
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });

        },
    }
};