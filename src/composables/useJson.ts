import { ref, onMounted } from "vue";

export function useMenu() {
  const menuCabecalho = ref<Array<{ id: number; nome: string; url: string }>>(
    []
  );
  const menuRodape = ref<Array<{ id: number; nome: string; url: string }>>([]);
  const dadosSite = ref<{ titulo: string; descricao: string; } | null>(null);

  const fetchMenu = async () => {
    const response = await fetch("/data/menu.json");
    const data = await response.json();
    menuCabecalho.value = Array.isArray(data.menuCabecalho)
      ? data.menuCabecalho
      : [];
    menuRodape.value = Array.isArray(data.menuRodape) ? data.menuRodape : [];
    dadosSite.value = data.dadosSite || null;
  };

  onMounted(fetchMenu);

  return { menuCabecalho, menuRodape, dadosSite };
}

// Retorna o posts para o módulo da home e da barra lateral
export function usePostsRecentes(key: 'postsRecentes' | 'ultimosPosts') {
    const posts = ref<
      Array<{
        id: number;
        titulo: string;
        resumo: string;
        thumbnail: string;
        alt: string;
        url: string;
        dataPublicacao: string;
      }>
    >([]);
  
    const fetchMenu = async () => {
      const response = await fetch("/data/posts.json");
      const data = await response.json();
      posts.value = Array.isArray(data[key]) ? data[key] : [];
    };
  
    onMounted(fetchMenu);
  
    return { posts };
  }




// Retorna o post
export function usePost() {
  const post = ref<{ 
    id: number;
    titulo: string;
    resumo: string;
    thumbnail: string;
    alt: string;
    url: string;
    dataPublicacao: string;
  } | null>(null);

  const fetchPost = async (fileName: string) => {
    try {
      console.log(`Buscando post em: /data/posts/${fileName}.json`); // Log para depuração

      const response = await fetch(`/data/posts/${fileName}.json`);

      if (!response.ok) {
        throw new Error(`Erro ao buscar o arquivo: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Dados recebidos:', data); // Verificar saída no console
      post.value = data;
    } catch (error) {
      console.error('Erro ao buscar o post:', error);
      post.value = null;
    }
  };

  return { post, fetchPost };
}
