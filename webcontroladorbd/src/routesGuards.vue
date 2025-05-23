<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const routes = [
      { path: '/loginBd', name: 'loginBd', component: () => import('@/pages/loginBd.vue') },
      {
        path: '/mainPagina',
        name: 'mainPagina',
        component: () => import('@/pages/mainPagina.vue'),
        meta: { requiresAuth: true }, // esta ruta requiere autenticación
      }
    ]

    router.beforeEach((to, from, next) => {
      if (to.meta.requiresAuth && !isUserAuthenticated()) {
        // redirige a la página de login
        next({ name: 'loginBd' });
      } else {
        // si el usuario está autenticado y la ruta no requiere autenticación, permite el acceso
        next();
      }
    });

    const isUserAuthenticated = () => {
      return !!localStorage.getItem('user'); // verifica si hay un usuario autenticado en el localStorage
    };
  },
};
</script>
