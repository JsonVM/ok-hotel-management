<template>
  <div class="container_index">
    <div>
      <b-card
        title="Lista de servicios"
        img-alt="Image"
        img-top
        tag="article"
        class="c2"
        v-show="true"
      >
        <b-card-body>
            <b-table small responsive hover :items="lista_servicios" :fields="fields">
              <template v-slot:cell(imagen)="row">
                  <div>
                      <b-button size="sm" @click="cargarImagen(row)" variant="outline-success">imagen</b-button>
                  </div>
              </template>
            </b-table>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/registrar_servicio.js"/>
<style src="../css/estilos.css" />