<template>
  <div class="container">
    <div>
      <b-img src="../components/logo_habitaciones.png" fluid alt="Responsive image" width="150" height="150"></b-img>
      <h1 class="title">
         HABITACIONES
      </h1>
      <div class="links">
        <a
          href="insertar_habitacion"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Insertar Habitación
        </a>
        <a
          href= "listar_habitacion"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Todas las Habitaciones
        </a>
        <a
          href= "listar_habitacion_disponible"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Habitaciones Disponibles
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
