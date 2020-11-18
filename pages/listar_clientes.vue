<template>
  <div>
    <h1>Clientes</h1>
    <div>
      <b-card-body>
        <b-table
          responsive
          hover
          :items="lista_clientes"
          
          :fields="fields"
          head-variant="dark"
        >
        </b-table>
      </b-card-body>
    </div>
  </div>
</template>

<script src="@/assets/listar_clientes.js" /> 