<template>
    <div class="card shadow">
        <div class="card-body">
            <h5 class="card-title">Posts Recentes</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="post in postsRecentes" :key="post.id">
                <a :href="`${post.url}`" class="fw-bold link-secondary link-underline link-underline-opacity-0">{{ post.nome }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { usePostsRecentes } from '@/composables/useJson';

export default {
    name: 'PostsRecentes',
    setup() {
        const { postsRecentes } = usePostsRecentes();

        return {
            postsRecentes
        };
    }
};
</script>

<style scoped>

</style>