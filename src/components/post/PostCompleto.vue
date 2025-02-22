<template>
    <div class="d-sm-flex position-relative my-5 me-5">
        <img :src="postCompleto.titulo" class="flex-shrink-0 me-3" :alt="postCompleto.alt" width="200">
        <div class="pe-5 me-5">
            <h5 class="mt-0">{{ postCompleto.titulo }}</h5>
            <p>{{ postCompleto.resumo }}</p>
            <p>{{ postCompleto.dataPublicacao }}</p>
            <a :href="postCompleto.url" class="stretched-link">Go somewhere</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PostCard',
    props: {
        postCompleto: {
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
    },
    
});
</script>