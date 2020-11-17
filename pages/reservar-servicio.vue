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
          <b-form action="javascript:void(0)" @submit="crearReservaServicio()">

            <b-form-group id="input-group-2" label="Cédula:" label-for="cc">
              <b-form-input
                id="cc"
                v-model="reserva_servicio.cc_cliente"
                required
                placeholder="Ingrese la cédula"
              ></b-form-input>
            </b-form-group>

            <b-form-group label= "Servicio:">
              <div>
                <b-form-select v-model="reserva_servicio.id_servicio" :options="id_servicio"></b-form-select>
              </div>
            </b-form-group>

            <b-form-group id="input-group-3" label="fecha inicio:" label-for="fecha_inicio">
              <b-form-datepicker
                id="fecha_inicio"
                v-model="reserva_servicio.fecha_inicio"
                required
                placeholder="Ingrese la fecha de inicio"
              ></b-form-datepicker>
            </b-form-group>

            <b-form-group id="input-group-4" label="fecha finalización:" label-for="fecha_fin">
              <b-form-datepicker
                id="fecha_fin"
                v-model="reserva_servicio.fecha_fin"
                required
                placeholder="Ingrese la fecha de salida"
              ></b-form-datepicker>
            </b-form-group>
            
            <b-form-group id="input-group-5" label="hora inicio:" label-for="hora_inicio">
              <b-form-timepicker
                id="hora_inicio"
                v-model="reserva_servicio.hora_inicio"
                required
                placeholder="Ingrese la hora de inicio"
              ></b-form-timepicker>
            </b-form-group>

            <b-form-group id="input-group-5" label="hora finalización:" label-for="hora_fin">
              <b-form-timepicker
                id="hora_fin"
                v-model="reserva_servicio.hora_fin"
                required
                placeholder="Ingrese la hora de finalización"
              ></b-form-timepicker>
            </b-form-group>

              <div class ="mx-auto" style="width: 200px;">
                <b-button type="submit" variant="success">Realizar reserva de servicio</b-button>
              </div> 

          </b-form>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/reservas-servicios.js"/>