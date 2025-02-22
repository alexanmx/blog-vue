<template>
    <ConteudoSite>
        <PostCompleto :postCompleto="post" v-if="post"/>
    </ConteudoSite>
</template>

<script lang="ts">
import ConteudoSite from '@/components/layout/ConteudoSite.vue';
import PostCompleto from '@/components/post/PostCompleto.vue';
import { onMounted } from 'vue';
import { usePost } from '@/composables/useJson';
import { useRoute } from 'vue-router';

export default {
    components: {
        ConteudoSite,
        PostCompleto
    },
  setup() {
    const route = useRoute(); // Pega o slug da URL
    const { post, fetchPost } = usePost();
    
    onMounted(() => {
        const slug = route.params.slug as string; // Obtém o slug

      fetchPost(slug); // Define qual post carregar (sem .json)
    });

    return { post };
  }
};
</script>