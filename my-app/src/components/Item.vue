<template>
    <li class="item">
        <img class="item__img" :src="item.img" />
        <div class="item__content">
            <strong class="item__content__title">
                <span class="ell--2">{{ item.title }}</span>
            </strong>
            <p class="item__content__txt">
                <span class="ell--2">{{ item.txt }}</span>
            </p>
            <div class="item__content__desc">
                <span class="item__content__date">{{ item.date }}</span>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name : 'list-item',
    props : {
        item : Object,
    },
}
</script>

<style scoped>
</style>