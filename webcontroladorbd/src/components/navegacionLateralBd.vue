<template>
  <section>
    <div class="d-flex mt-2">
  <!-- Sidebar -->
  <nav v-if="!abrirNav" class="bg-light border-end p-3" style="width: 250px; height: 80vh;">
    <div class="m-0 p-0 d-flex justify-content-between">
      <h4   >Bases</h4>
      <button @click="abrirNav = !abrirNav"   type="button" class="btn btn-primary btn-sm"> {{'Cerrar <'}} </button>
    </div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">Probar Conexion</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Bases</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Configuración</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-danger" href="#">Salir</a>
      </li>
    </ul>
  </nav>
    <button  v-if="abrirNav" @click="abrirNav = !abrirNav"  type="button" class="btn btn-secondary  btn-sm" >></button>

  <!-- Contenido principal -->
  <div class="form-floating mx-2"  style="height: 80vh; width: 100%;">
  <textarea v-model="valorTextArea" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 80vh; width: 100%;resize: none;" ></textarea>
  <label for="floatingTextarea2">Aqui Sql ..</label>
  </div>
</div>


  </section>
</template>
<script>
export default {
  data(){
    return{
      abrirNav: false,
      valorTextArea: null,
    }
  },
}
</script>
