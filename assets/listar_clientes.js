const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,
  
            //En este arreglo se meten todos los clientes
            lista_clientes: [
                {
                    cc: "",
                    nombre: "",
                    apellidos: "",
                    correo: "",
                    celular: "",
                    telefono: "",
                }
            ],
            cliente: {
                cc: "",
                nombre: "",
                apellidos: "",
                correo: "",
                celular: "",
                telefono: "",
                
            },

            fields: [
                {
                    key: 'cc',
                    label: 'Cédula',
                },
                {
                    key: 'nombre',
                    label: 'Nombre',
                },
                {
                    key: 'apellidos',
                    label: 'Apellidos'
        
                },
                {
                    key: 'correo',
                    label: 'Correo'
                },
                {
                    key: 'celular',
                    label: 'Celular'
                },
                {
                    key: 'telefono',
                    label: 'Teléfono'
                }
            ],
            show: true
        }

    },
    //cuando se carga la pagina se llama el metodo para listar los clientees
    mounted() {
        this.cargarClientes()
    },
    methods: {

        cargarClientes() {
            let url = "http://localhost:3001/clientes";
            axios.get(url).then(respuesta => {
                let data = respuesta.data
                
                if (data.ok) {
                    this.lista_clientes = data.info
                    console.log("lista: " + this.lista_clientes.data)
                }
                this.mensaje = data.mensaje;
                console.log(respuesta);
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });

        },
    }
};