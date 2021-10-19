<template>
    <span
        class="txt"
        :class="[
            {'txt--light' : light},
            {'txt--bold' : bold}
        ]"
        :style="'font-size:' + size + 'px;'"
    >
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'Text',
    props: {
        size: {
            type: Number,
        },
        light: {
            type: Boolean,
            default: false,
        },
        bold: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.txt {
    font-weight: 500;
}
.txt--light {
    font-weight: 300;
}
.txt--bold {
    font-weight: 700;
}
</style>