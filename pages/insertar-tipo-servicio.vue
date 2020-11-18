<template>
  <div class="container">
    <div>
      <b-card
        title="Agregar un tipo de servicio"
        img-alt="Image"
        img-top
        tag="article"
        class="c2"
        border-variant="success"
        v-show="true"
      >
        <b-card-body>
          <b-form action="javascript:void(0)" @submit="crearTipoServicio()">
            <b-form-group id="input-group-2" label="Nombre:" label-for="nombre">
              <b-form-input
                id="nombre"
                v-model="tipo_servicio.nombre"
                required
                placeholder="Ingrese el nombre del tipo de servicio"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Descripción:" label-for="descripcion">
              <b-form-input
                id="descripcion"
                v-model="tipo_servicio.descripcion"
                required
                placeholder="Ingrese el nombre del tipo de servicio"
              ></b-form-input>
            </b-form-group>

              <div class ="mx-auto" style="width: 200px;">
                <b-button type="submit" variant="success">Registrar tipo servicio</b-button>
              </div> 
          </b-form>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/insertar-tipo-servicio.js"/>