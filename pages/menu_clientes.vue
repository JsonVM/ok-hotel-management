<template>
  <div class="container">
    <div>
      <b-img src="../components/logo_usuario.jpg" fluid alt="Responsive image" width="100" height="100"></b-img>
      <h1 class="title">
         CLIENTES
      </h1>
      <div class="links">
        <a
          href="registrar_cliente"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Insertar cliente
        </a>
        <a
          href= "listar_clientes"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Todos los clientes
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
  font-weight: 100;
  font-size: 50px;
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