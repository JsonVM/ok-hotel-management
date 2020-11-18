<template>
  <div class="container">
    <div>
      <b-card
        title="Registro del cliente"
        img-alt="Image"
        img-top
        tag="article"
        class="c2"
        border-variant="success"
        v-show="true"
      >
        <b-card-body>
          <b-form action="javascript:void(0)" @submit="registrarCliente()">
            <b-form-group id="input-group-2" label="CC:" label-for="cc">
              <b-form-input
                id="cc"
                v-model="cliente.cc"
                required
                placeholder="Ingrese la cédula"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Nombre:" label-for="nombre">
              <b-form-input
                id="nombre"
                v-model="cliente.nombre"
                required
                placeholder="Ingrese el nombre del cliente"
              ></b-form-input>
            </b-form-group>

             <b-form-group id="input-group-3" label="Apellidos:" label-for="apellidos">
              <b-form-input
                id="apellidos"
                v-model="cliente.apellidos"
                required
                placeholder="Ingrese los apellidos del cliente"
              ></b-form-input>
            </b-form-group>

             <b-form-group id="input-group-3" label="Correo:" label-for="correo">
              <b-form-input
                id="correo"
                v-model="cliente.correo"
                required
                placeholder="Ingrese el correo del cliente"
              ></b-form-input>
            </b-form-group>

             <b-form-group id="input-group-3" label="Celular:" label-for="celular">
              <b-form-input
                id="celular"
                v-model="cliente.celular"
                required
                placeholder="Ingrese el celular del cliente"
              ></b-form-input>
            </b-form-group>

             <b-form-group id="input-group-3" label="Telefono:" label-for="telefono">
              <b-form-input
                id="teléfono"
                v-model="cliente.telefono"
                required
                placeholder="Ingrese el teléfono del cliente"
              ></b-form-input>
            </b-form-group>


              <div class ="mx-auto" style="width: 200px;">
                <b-button type="submit" variant="success">Registrar cliente</b-button>
              </div> 
          </b-form>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/registrar_cliente.js"/>