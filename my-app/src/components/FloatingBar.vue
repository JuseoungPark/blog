<template>
    <div class="floating-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'floating-bar',
    // props: {
    //     off: {
    //         type: Boolean,
    //         default: false,
    //     }
    // },
}
</script>

<style>
.floating-bar {
    display: flex;
    align-items: center;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2115;
    min-height: 44px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    border-top: 1px solid #e5e6e8;
    font-size: 0;
    color: #000;
    background-color: #ffffff;
    transform: translate(0,0);
    transition: transform .4s;
}
.floating-bar--unpinned {
    transform: translateY(100%);
}
</style>