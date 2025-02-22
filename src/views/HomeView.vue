<template>
    <ConteudoSite>
        <UltimosPosts />
    </ConteudoSite>
</template>

<script lang="ts">
import ConteudoSite from '@/components/layout/ConteudoSite.vue';
import UltimosPosts from '@/components/post/UltimosPosts.vue';

export default {
    name: 'HomeView',
    components: {
        ConteudoSite,
        UltimosPosts
    }
};
</script>