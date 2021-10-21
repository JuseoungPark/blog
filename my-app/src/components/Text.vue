<template>
    <span
        class="txt"
        :class="[
            {'txt--light' : light},
            {'txt--bold' : bold},
            {'txt--primary' : primary},
        ]"
        :style="
            'font-size:' + size + 'px;' +
            'margin-left:' + marginLeft + 'px;'
        "
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
        marginLeft: {
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
        primary: {
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
.txt--primary {
    color: #7E21B9;
}
</style>