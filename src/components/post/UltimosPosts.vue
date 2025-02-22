<template>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
</template>

<script lang="ts">
import { usePostsRecentes } from '@/composables/useJson';
import PostCard from './PostCard.vue';

export default {
    name: 'UltimosPosts',
    components: {
        PostCard
    },
    setup() {
        const { posts } = usePostsRecentes('ultimosPosts');

        return {
            posts
        };
    }
};
</script>