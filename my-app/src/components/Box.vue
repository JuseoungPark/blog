<template>
    <div class="box" :class="{'box--space' : space}">
        <slot name="content">{{ content }}</slot>
    </div>
</template>

<script>
export default {
    name: 'Box',
    props: {
        space: {
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style scoped>
.box {
    flex: 1;
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #eaeaea;
    background-color: #ffffff;
}
.box--space {
    padding: 20px 16px;
}
</style>