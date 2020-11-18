<template>
  <div class="container">
    <div>
       <b-img src="../components/logo_servicios.PNG" fluid alt="Responsive image"></b-img>
      <div class="links">
        <a
          href="ver_servicios"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Ver servicios
        </a>
        <a
          href="registrar_servicio"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          registrar servicio
        </a>
        <a
          href="reservas_servicios"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          ver reservas servicios
        </a>
        <a
          href="reservar_servicio"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          reservar servicio
        </a>

        <a
          href="insertar_tipo_servicio"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          registrar tipo servicio
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