<template>
  <div class="container">
    <div>
       <b-img src="../components/logo_verde.PNG" fluid alt="Responsive image" width="600px" height="400"></b-img>
      <div class="links">
        <a
          href="menu_clientes"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Menú clientes
        </a>
        <a
          href="menu_servicios"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Menú servicios
        </a>
        <a
          href="menu_habitaciones"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Menú habitaciones
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
