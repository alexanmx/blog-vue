import { ref, onMounted } from 'vue';

export function useMenu() {
  const menuCabecalho = ref<Array<{ id: number; nome: string; url: string; }>>([]);
  const menuRodape= ref<Array<{ id: number; nome: string; url: string; }>>([]);
  const dadosSite = ref<{ titulo: string; descricao: string; } | null>(null);

  const fetchMenu = async () => {
    const response = await fetch("/data/menu.json");
    const data = await response.json();
    menuCabecalho.value = Array.isArray(data.menuCabecalho) ? data.menuCabecalho : [];
    menuRodape.value = Array.isArray(data.menuRodape) ? data.menuRodape : [];
    dadosSite.value = data.dadosSite || null;
  };

  onMounted(fetchMenu);

  return { menuCabecalho, menuRodape, dadosSite };
}

export function usePostsRecentes() {
    const postsRecentes = ref<Array<{ id: number; nome: string; url: string; }>>([]);
  
    const fetchMenu = async () => {
      const response = await fetch("/data/posts.json");
      const data = await response.json();
      postsRecentes.value = Array.isArray(data.postsRecentes) ? data.postsRecentes : [];
    };
  
    onMounted(fetchMenu);
  
    return { postsRecentes };
  }