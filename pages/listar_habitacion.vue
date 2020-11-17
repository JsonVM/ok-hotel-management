<template>
  <div>
    <h1>Habitaciones</h1>
    <div>
      <b-card-body>
        <b-table
          responsive
          hover
          :items="lista_habitaciones"
          
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
        </b-table>
      </b-card-body>
    </div>
  </div>
</template>

<script src="@/assets/listar_habitacion.js" /> 