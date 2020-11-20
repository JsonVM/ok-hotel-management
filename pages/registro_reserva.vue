<template>
  <div class="container">
    <div>
      <b-card
        title="Reserva"
        img-alt="Image"
        img-top
        tag="article"
        class="c2"
        border-variant="success"
        v-show="true"
      >
        <b-card-body>
          <b-form action="javascript:void(0)" @submit="crearReserva()">

            <b-form-group id="input-group-2" label="Cédula:" label-for="cc">
              <b-form-input
                id="cc"
                v-model="reserva.cedula"
                required
                placeholder="Ingrese la cédula"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="fecha inicio:" label-for="fecha_inicio">
              <b-form-datepicker
                id="fecha_inicio"
                v-model="reserva.fechaEntrada"
                required
                placeholder="Ingrese la fecha de inicio"
              ></b-form-datepicker>
            </b-form-group>

            <b-form-group id="input-group-4" label="fecha finalización:" label-for="fecha_fin">
              <b-form-datepicker
                id="fecha_fin"
                v-model="reserva.fechaSalida"
                required
                placeholder="Ingrese la fecha de salida"
              ></b-form-datepicker>
            </b-form-group>
              

              <div class ="mx-auto" style="width: 200px;">
                <b-button type="submit" variant="outline-success">Realizar reserva </b-button>
              </div> 

          </b-form>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/registro_reserva.js"/>