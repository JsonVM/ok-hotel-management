<template>
  <div class="container">
    <div>
      <b-card
        title="Agregar un servicio"
        img-alt="Image"
        img-top
        tag="article"
        class="c2"
        border-variant="success"
        v-show="true"
      >
        <b-card-body>
          <b-form action="javascript:void(0)" @submit="crearServicio()">
            <b-form-group id="input-group-2" label="Nombre:" label-for="nombre">
              <b-form-input
                id="nombre"
                v-model="servicio.nombre"
                required
                placeholder="Ingrese el nombre del servicio"
              ></b-form-input>
            </b-form-group>
            
            <b-form-group id="input-group-100" label="Hora inicio:" label-for="hora_inicio">
              <b-form-timepicker
                id="hora_inicio"
                v-model="servicio.hora_inicio"
                required
                placeholder="Ingrese la hora de inicio"
              ></b-form-timepicker>
            </b-form-group>

            <b-form-group id="input-group-200" label="Hora finalización:" label-for="hora_fin">
              <b-form-timepicker
                id="hora_fin"
                v-model="servicio.hora_fin"
                required
                placeholder="Ingrese la hora de finalizacion"
              ></b-form-timepicker>
            </b-form-group>
           
              <div>
                <div class="mt-3">Número máximo de personas: </div>
                <b-form-radio-group
                  v-model="servicio.num_personas"
                  :options="opciones_cantidad_personas"
                  class="mb-3"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
                  button-variant="outline-success"
                ></b-form-radio-group>
              </div>

            <b-form-group label= "Tipo de servicio:">
              <div>
                <b-form-select v-model="servicio.tipo_servicio" :options="tipo_servicio"></b-form-select>
                <b-button variant="success">Agregar tipo de servicio</b-button>
              </div>
            </b-form-group>
            <div>
            <b-form-group  id="input-group-5" label="Imagen del servicio:" label-for="imagen">
              <b-container class="bv-example-row">
                <b-row>
                  <b-col>
                    <div>
                      <b-form-file
                        id="imagen"
                        v-model="imagen"
                        :state="Boolean(imagen)"
                        placeholder="Seleccione una imagen del servicio por favor"
                        drop-placeholder="Insertar el archivo aquí"
                      ></b-form-file>
                    </div>
                  </b-col>
                  <b-col>
                    <b-button @click="subirImagen()" variant="success">cargar imagen</b-button>
                  </b-col>
                </b-row>
              </b-container>
            </b-form-group>
            </div>

             <div class="mx-auto" style="width: 300px;">
              <b-card
                id="card-img"
                title="Imagen servicio"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
              <b-card-body>
                <b-img id="im" src="" fluid alt="Imagen" variant="success"></b-img> 
               <b-progress :value="progreso" :max="100" show-progress animated variant="success"  ></b-progress>
              </b-card-body>
              </b-card>
            </div>

              <div class ="mx-auto" style="width: 200px;">
                <b-button type="submit" variant="success">Registrar servicio</b-button>
              </div> 
          </b-form>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/registrar-servicio.js"/>