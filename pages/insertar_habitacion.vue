<template>

<div>
 <b-card>
   <b-card-body>
    <h1>Insertar Habitación</h1>
    <b-form action="javascript:void(0)" @submit="crearSuEntidadDeDominio()">
      <div class="form-row">
        <div class="form-group col-md-2">
          <b-form-group id="in-numeroHabi" label="Número de Habitación" label-for="numeroHabi">
                <b-form-input
                id="id_habitacion"
                v-model="habitacion.id_habitacion"
                required
                placeholder=""
                type="number"
                ></b-form-input>
          </b-form-group>
        </div>
        <div class="form-group col-md-2">
          <label for="inputState">Tipo de habitación</label>
            
            <select id="tipo_habitacion" required class="form-control" v-model="habitacion.tipo_habitacion">
            <option>Doble</option>
            <option>Sencilla</option>
            <option>VIP</option>
            <option>Precidencial</option>
          </select>
        </div>
      </div>

  <div class="form-row">
        <div class="form-group col-md-2">
          <label for="inputState">Número de personas</label>
            <select id="numero_personas" required class="form-control" v-model="habitacion.numero_personas">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </div>
        <div class="form-group col-md-2">
          <b-form-group id="in-precio" label="Precio" label-for="precio">
                <b-form-input
                id="precio"
                 v-model="habitacion.precio"
                required
                placeholder=""
                type="number"
                ></b-form-input>
          </b-form-group>
        </div>
  </div>

    <div class="form-row">
      <div class="form-group col-md-4">
          <b-form-group id="in-descripcion" label="Descripción" label-for="descripcion">
                <b-form-input
                id="descripcion"
                v-model="habitacion.descripcion"
                required
                placeholder=""
                type="text"
                ></b-form-input>
          </b-form-group>
      </div>
    </div>

      <div class="form-group col-md-4">
          <b-form-group id="in-imagen" label="Imagen" label-for="imagen">
                <b-form-input
                id="imagen"
                v-model="habitacion.imagen"
                required
                placeholder=""
                type="text"
                ></b-form-input>
          </b-form-group>
      </div>

       <b-button type="submit" variant="primary" >Insertar</b-button>

    
  </b-form>
   </b-card-body>
 </b-card> 
</div>
</template>
<style>

h1{
    font-family: font92889;
    color:blue;
    font-size: 50px;

}
</style>

<script src="@/assets/insertar_habitacion.js" />