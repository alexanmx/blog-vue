<template>
    <ConteudoSite>
        <ChildremSlot />
    </ConteudoSite>
</template>

<script lang="ts">
import ConteudoSite from '@/components/layout/ConteudoSite.vue';
import ChildremSlot from '@/components/post/ChildremSlot.vue';

export default {
    name: 'HomeView',
    components: {
        ConteudoSite,
        ChildremSlot
    }
};
</script>