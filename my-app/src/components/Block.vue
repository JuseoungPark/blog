<template>
    <div class="block">
        <slot name="content">{{ content }}</slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.block {
    position: relative;
    margin-top: 7px;
}
</style>