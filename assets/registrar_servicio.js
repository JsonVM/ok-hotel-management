const axios = require('axios');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/api-jheyson/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'pwb2m8es'; 


export default {
  data() {
    return {
      servicio: {
            id:"",
            nombre:"",
            hora_inicio:"",
            hora_fin:"",
            num_personas: "",
            tipo_servicio: null,
            imagen: ""
      },

      imagen: null,

      opciones_cantidad_personas: [
          { item: '1', name: '1' },
          { item: '2', name: '2' },
          { item: '3', name: '3' },
          { item: '4', name: '4' },
          { item: '5', name: '5' },
          { item: '10', name: '10' },
          { item: '15', name: '15' },
          { item: '20', name: '20' }
        ],

      tipo_servicio:  [
        {value: null, text:"seleccione el tipo de servicio"}/** ,
        { value: "1", text: "Entretenimiento" },
        { value: "2", text: "Ocio" },
        { value: "3", text: "Evento" },
        { value: "4", text: "Relax" },
        { value: "5", text: "Alimentacion" }*/
    ],

      fields: ["id","nombre", "hora_inicio", "hora_fin", "num_personas","tipo_servicio", "imagen"],

      //aqui se almacenan los servicios en forma de lista
      lista_servicios: [{}],

      //para la progress bar
      progreso:0,
    show: true
    }
  },

  /**
   * se ejecuta cuando se carga la pagina
   */
  mounted() {
    this.cargar();
    this.cargarTipoServicios();
  },
  
  methods: {   

    /**
     * asigna a un boton el link de la imagen correspondiente
     * @param {*} item es el row de una tabla en le interfaz grafica donde se muestran los servicios 
     */
    cargarImagen({item}){
        let serv = this.lista_servicios.find(servicio => servicio.id == item.id);
        let url = serv.imagen;
        window.open(url, "Imagen", "width=1080, height=720");
    },

    /**
     * Se sube la imagen seleccionada al servicio de cloudinary
     */
    subirImagen() {
      const IMG = document.getElementById('im');
      //const IMG_UPLOAD_BAR = document.getElementById('prog');
      const formData = new FormData();

      formData.append('file', this.imagen);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      axios.post(CLOUDINARY_URL, formData, {
        headers:{
          'content-type':'multipart/form-data' 
        },
        onUploadProgress(e){
          this.progreso = Math.round(e.loaded * 100)/e.total;
          console.log(this.progreso);
          //IMG_UPLOAD_BAR.setAttribute('value', progress);
        }
      }).then((response) => {
        console.log("Imagen agregada");
        console.log(response);
        this.servicio.imagen = response.data.secure_url;
        IMG.src = response.data.secure_url;
      })
      .catch((error) =>{
        console.log("Hubo un error");
        console.log(error);
      })
    },

    /**
     * Se inserta el servicio en la base de datos con los datos suministrados
     * desde el formulario
     */
    crearServicio() {
      this.lista_servicios.push(this.servicio);
      let direccion = "http://localhost:3001/servicios";
      axios
        .post(direccion, this.servicio)
        .then((response) => {
          console.log("El servicio fue agregado correctamente");
          alert("El servicio fue agregado correctamente");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("No se pudo agregar el servicio " + " ---Error: " + error + "---");
        });

      this.vacear();

    },

    /**
     * vacea las variables del objeto
     */
    vacear(){
        this.servicio = {
          id:"",
          nombre:"",
          hora_inicio:"",
          hora_fin:"",
          num_personas: "",
          tipo_servicio: null,
          imagen: ""
      }
      this.imagen = null;
    },
    /**
     *cargar todos los servicios de la DB y listarlos
     */
    cargar() {
      let url = "http://localhost:3001/servicios";
      axios.get(url).then(respuesta => {
        let data = respuesta.data
        if (data.ok) {
          this.lista_servicios = data.info
          console.log(this.lista_servicios)
        }
        this.mensaje = data.mensaje;
        console.log(respuesta);
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error")
      });
    },

    cargarTipoServicios(){
      //this.tipo_servicio = null;

      let url = "http://localhost:3001/tipo-servicio";
      axios.get(url).then(respuesta => {
        let data = respuesta.data
        if (data.ok) {
          this.tipo_servicio = data.info
          console.log(this.tipo_servicio)
        }
        this.mensaje = data.mensaje;
        console.log(respuesta);
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error")
      });
    },

    eliminarServicio({item}) {
      let i = item.id;
      let direccion = "http://localhost:3001/servicios/" + i;
      axios
        .delete(direccion)
        .then((response) => {
          console.log("reserva eliminada correctamente");
          alert("reserva eliminada correctamente");
          this.cargar();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};