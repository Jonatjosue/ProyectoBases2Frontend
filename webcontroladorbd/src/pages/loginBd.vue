<template>
  <div class="mt-5 container d-flex justify-content-center align-items-center">
    <div class="card p-4 shadow" style="width: 100%; max-width: 400px">
      <h2 class="text-center mb-4">Iniciar sesión</h2>

      <!-- Formulario de login -->
      <form @submit.prevent="handleLogin">
        <!-- Correo electrónico -->
        <div class="mb-3">
          <label for="email" class="form-label">Usuario</label>
          <input
            type="text"
            id="email"
            v-model="usuario"
            required
            class="form-control"
            placeholder="Tu usuario aqui ..."
          />
        </div>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ roleNombreSeleccionado !== null ? roleNombreSeleccionado : 'Selecciona el Rol' }}
          </button>
          <ul class="dropdown-menu">
            <li v-for="role in roles" :key="role.roleId">
              <a class="dropdown-item" @click="obtieneRole(role.roleId, role.roleNombre)">
                {{ role.roleNombre }}
              </a>
            </li>
          </ul>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="form-control"
            placeholder="********"
          />
        </div>

        <!-- Botón de login -->
        <button type="submit" class="btn btn-primary w-100" @click="initLogin">Iniciar sesión</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      usuario: '',
      password: '',
      roles: [],
      roleIdSeleccionado: null,
      roleNombreSeleccionado: null,
    }
  },
  created() {
    this.obtieneRoles()
  },
  methods: {
    async obtieneRoles() {
      try {
        const result = await this.$api.get('/Roles')
        this.roles = result.data
      } catch (error) {
        console.log(error)
      }
    },
    async initLogin () {
      try {
        const result = await this.$api.post('/Login', {
          Usuario: this.usuario,
          idRole: this.roleIdSeleccionado,
          parametro1: this.password,
        })
        console.log(result)
        this.usuario = null
        this.roleIdSeleccionado = null
        this.password = null
        console.log(result.data.success)
        if(result.data.success){
          localStorage.setItem('user', JSON.stringify(result.data))
          console.log('login exitoso')
          this.$router.push('/mainPagina')
        } else {
          this.usuario = null
          this.roleIdSeleccionado = null
          this.password = null
          alert('Usuario o contraseña incorrectos')
        }

      } catch( error) {
          console.log(error)
          this.usuario = null
          this.roleIdSeleccionado = null
          this.password = null
          alert('Usuario o contraseña incorrectos')
      }
    },
    obtieneRole(m,n) {
      this.roleIdSeleccionado = m
      this.roleNombreSeleccionado = n
    },
    handleLogin() {

    },
  },
}
</script>
