<template>
    <aside class="my-5">
        <PostsRecentes />
    </aside>
</template>

<script lang="ts">
import PostsRecentes from '@/components/post/PostsRecentes.vue';

export default {
    name: 'BarraLateral',
    components: {
        PostsRecentes
    }
};
</script>