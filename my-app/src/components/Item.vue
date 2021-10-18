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
.item {
    position: relative;
    margin: 1px;
}
.item__img {
}
.item__content {
    display: flex;
    flex-flow: column wrap;
}
.item__content__title {
    display: block;
    line-height: 23px;
    font-size: 17px;
    font-weight: 600;
    word-break: normal;
}
.item__content__txt {
    margin-top: 8px;
    line-height: 20px;
    font-size: 14px;
    color: #676767;
}
.item__content__desc {
    display: block;
    margin-top: 8px;
}
.item__content__date {
    line-height: 16px;
    font-size: 13px;
    color: #979797;
}
</style>