<template>
    <div class="d-sm-flex position-relative my-5 me-5">
        <img :src="post.thumbnail" class="flex-shrink-0 me-3" :alt="post.alt" width="200">
        <div class="pe-5 me-5">
            <h5 class="mt-0">{{ post.titulo }}</h5>
            <p>{{ post.resumo }}</p>
            <p>{{ post.dataPublicacao }}</p>
            <a :href="post.url" class="stretched-link">Go somewhere</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PostCard',
    props: {
        post: {
            type: Object,
            required: true,
            default: () => ({
                id: 0,
                titulo: '',
                resumo: '',
                thumbnail: '',
                alt: '',
                dataPublicacao: '',
                url: ''
            })
        }
    }
});
</script>