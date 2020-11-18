<template>
  <div class="container">
    <div>
      <b-card
        title="Insertar Habitación"
        img-alt="Image"
        img-top
        tag="article"
        class="c2"
        border-variant="success"
        v-show="true"
      >
        <b-card-body>
          <b-form
            action="javascript:void(0)"
            @submit="crearSuEntidadDeDominio()"
          >
            
            <b-form-group
              id="in-numeroHabi"
              label="Número de Habitación"
              label-for="numeroHabi"
            >
              <b-form-input
                id="id_habitacion"
                v-model="habitacion.id_habitacion"
                required
                placeholder=""
                type="number"
              ></b-form-input>
            </b-form-group>

        
              <label for="inputState">Tipo de habitación</label>
              <select
                id="tipo_habitacion"
                required
                class="form-control"
                v-model="habitacion.tipo_habitacion"
              >
                <option>Doble</option>
                <option>Sencilla</option>
                <option>VIP</option>
                <option>Precidencial</option>
              </select>
  

            <label for="inputState">Número de personas</label>
            <select
              id="numero_personas"
              required
              class="form-control"
              v-model="habitacion.numero_personas"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <b-form-group id="in-precio" label="Precio" label-for="precio">
              <b-form-input
                id="precio"
                v-model="habitacion.precio"
                required
                placeholder=""
                type="number"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="in-descripcion"
              label="Descripción"
              label-for="descripcion"
            >
              <b-form-input
                id="descripcion"
                v-model="habitacion.descripcion"
                required
                placeholder=""
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="in-imagen" label="Imagen" label-for="imagen">
              <b-form-input
                id="imagen"
                v-model="habitacion.imagen"
                required
                placeholder=""
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="outline-success"
              >Insertar</b-button
            >
          </b-form>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>
<style>
h1 {
  font-family: font92889;
  color: blue;
  font-size: 50px;
}
</style>

<script src="@/assets/insertar_habitacion.js" />