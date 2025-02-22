import { createRouter, createWebHistory } from "vue-router";


const routes = [

  {
    path: "/",
    name: "HomeView",
    components: {
      Content: () => import("@/views/HomeView.vue"),
    },
  },
  {
    path: "/:slug",
    name: "PostView",
    components: {
      Content: () => import("@/views/PostView.vue"),
    },
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Se houver uma posição salva (exemplo: botão "Voltar"), mantém a posição
    } else {
      return { top: 0  }; // Sempre volta ao topo ao navegar para uma nova página
    }
  },
});
