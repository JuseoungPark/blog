<template>
    <div class="header">
        <slot name="left"></slot>
        <template v-if="backBtn">
            <Button ico="back-to-page" txt="뒤로가기" @click="closed" />
        </template>
        <template v-if="takeBack">
            <Button txt="취소" @click="closed" />
        </template>
        <div class="header__title__area">
            <strong class="header__title">{{ title }}</strong>
            <slot name="count"></slot>
        </div>
        <slot name="btn-area">{{ content }}</slot>
    </div>
</template>

<script>
export default {
    name: 'Header-Component',
    props: {
        backBtn: {
            type: Boolean,
            default: false,
        },
        takeBack: {
            type: Boolean,
            default: false,
        },
        closed: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '타이틀',
        },
        count: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
        }
    },
}
</script>

<style>
.header {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3000;
    height: 55px;
    padding: 0 16px;
    border-bottom: 1px solid #ebebeb;
    background-color: #ffffff;
}
.header__title__area {
    margin: 0 auto;
}
.header__title {
    font-size: 17px;
}
.header__title--count {
    display: inline-block;
    margin-left: 8px;
}
</style>