<template>
  <div>
    <h1>Habitaciones Disponibles</h1>
    <div>
      <b-card-body>
        <b-table
          responsive
          hover
          :items="lista_habitaciones_disponibles"
          :fields="fields"
          head-variant="dark"
        >
          <template id="imgs" v-slot:cell(imagen)="imagen">
            <div>
              <b-img
                :src="imagen.item.imagen"
                width="150px"
                height="150px"
              ></b-img>
            </div>
          </template>
          <template v-slot:cell(acciones)="row">
            <div>
              <b-button
                size="sm"
                @click="cargarMantenimientosEditar(row)"
                block
                variant="outline-success"
                class="mr-2"
                >Reservar</b-button
              >
            </div>
          </template>
        </b-table>
      </b-card-body>
    </div>
  </div>
</template>

<script src="@/assets/listar_habitacion_disponible.js" /> 