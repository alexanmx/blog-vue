<template>
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
        <h2 class="h4 fst-italic">Posts Recentes</h2>
        <div class="d-flex text-body-secondary pt-3 border-top" v-for="post in posts" :key="post.id">
            <p class="pb-3 mb-0 small lh-sm">
                <a :href="`${post.url}`">
                    <strong class="d-block text-gray-dark">{{ post.titulo }}</strong>
                </a> 
                {{ post.dataPublicacao }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { usePostsRecentes } from '@/composables/useJson';

export default {
    name: 'PostsRecentes',
    setup() {
        const { posts } = usePostsRecentes('postsRecentes');

        return {
            posts
        };
    }
};
</script>