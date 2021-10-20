<template>
    <div class="text-field__wrap">
        <template v-if="label">
            <strong class="label">{{ label }}</strong>
            <!-- Custom -->
            <slot></slot>
            <!-- // Custom -->
        </template>
        <input
            class="text-field"
        />
    </div>
</template>

<script>
export default {
    name: 'TextInput-Component',
    props: {
        label: {
            type: String,
            default: '인풋 타이틀',
        }
    }
}
</script>

<style scoped>

</style>