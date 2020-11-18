const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,
  
            //En este arreglo se meten todas las habitaciones
            lista_habitaciones_disponibles: [
                {
                    id_habitacion: "",
                    tipo_habitacion: "",
                    numero_personas: "",
                    precio: "",
                    descripcion: "",
                    imagen: "",
                    estado:"",
                }
            ],
            habitacion_disponible: {
                id_habitacion: "",
                tipo_habitacion: "",
                numero_personas: "",
                precio: "",
                descripcion: "",
                imagen: "",
                estado:"",
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
                },
                {
                    key: 'estado',
                    label: 'Estado'
                },
                {
                    key: 'acciones',
                    label:'Opciones',
                    class: 'center'
                    
        
                }
              
            ],
            show: true
        }

    },
    //cuando se carga la pagina se llama el metodo para listar las habitaciones
    mounted() {
        this.cargarHabitacionesDisponibles()
    },
    methods: {

        cargarHabitacionesDisponibles() {
            let url = "http://localhost:3001/habitaciones_diponibles";
            axios.get(url).then(respuesta => {
                let data = respuesta.data
                
                if (data.ok) {
                    this.lista_habitaciones_disponibles = data.info
                    console.log("lista: " + this.lista_habitaciones_disponibles.data)
                }
                this.mensaje = data.mensaje;
                console.log(respuesta);
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });

        },
    }
};