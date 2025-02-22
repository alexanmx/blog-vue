<template>
    <footer class="container border-top py-3">
        <p class="h5">{{ dadosSite?.titulo }}</p>
        <ul class="list-unstyled d-flex align-items-start flex-column flex-md-row gap-3">
            <li class="" v-for="(item, index) in menuRodape" :key="index">
                <a class="text-decoration-none fw-bold link-secondary" :href="item.url">{{ item.nome }}</a>
            </li>
        </ul>
        <p class="text-secondary small">Copyright © 2025 Biologia Marinha SP. Todos os direitos reservados.</p>
    </footer>
</template>

<script lang="ts">
import { PropType } from 'vue';

export default {
    name: 'RodapeSite',
    props: {
        dadosSite: {
            type: Object as PropType<{ titulo: string; descricao: string; } | null>,
            default: () => null
        },
        menuRodape: {
            type: Object,
            required: true,
            default: () => ({})
        }
    }
};
</script>