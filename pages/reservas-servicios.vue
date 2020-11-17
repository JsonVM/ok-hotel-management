<template>
  <div class="container_index">
    <div>
      <b-card
        title="Lista de servicios usuario"
        img-alt="Image"
        img-top
        tag="article"
        class="c2"
        v-show="true"
      >
        <b-card-body>
            <b-form action="javascript:void(0)" @submit="cargar()">
                <b-form-group id="input-group-2" label="Cedula:" label-for="cedula">
                <b-form-input
                    id="cedula"
                    v-model="cc"
                    required
                    placeholder="Ingrese su cédula"
                ></b-form-input>
                </b-form-group>
            </b-form>
            
            <b-table small responsive hover :items="lista_reservas_servicios" :fields="fields">
            </b-table>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/reservas-servicios.js"/>
<style src="../css/estilos.css" />