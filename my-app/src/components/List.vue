<template>
    <div class="list__area">
        <ul class="list" :class="[{'list--photo' : photo}, {'list--list' : typeList}, {'list--card' : card}]">
            <Item
                v-for="(item, idx) in list"
                :key="idx"
                :item="item"
            ></Item>
        </ul>
    </div>
</template>

<script>
import Item from './Item.vue'

export default {
    components: {
        Item
    },
    props: {
        photo: {
            type: Boolean,
            default: false,
        },
        typeList: {
            type: Boolean,
            default: false,
        },
        card: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            list: [
                {
                    id: '0',
                    title: 'Sample1',
                    txt: '솰라솰라',
                    date: '2021-09-02',
                    img: 'https://dummyimage.com/200/F6A9A9/464660'
                },
                {
                    id: '1',
                    title: '소외된 모두 왼 발을 한 보 앞으로 그 다음은 오른발의 차례 눈 앞을 향해 행진 전인권의 열정 we 마칭? 불구대천수의 원수는 니 자신 타인의 비웃음도 너의 동의 없인 nothing 없을 무 니 눈꺼풀을 덮은 신기루 제 3의 눈을 떠라 so you can see through',
                    txt: '솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라',
                    date: '2021-09-21',
                    img: 'https://dummyimage.com/200/FFBF86/464660'
                },
                {
                    id: '2',
                    title: 'Sample3',
                    txt: '솰라솰라',
                    date: '2021-10-05',
                    img: 'https://dummyimage.com/200/FFF47D/464660'
                },
                {
                    id: '3',
                    title: 'Sample4',
                    txt: '솰라솰라',
                    date: '2021-10-18',
                    img: 'https://dummyimage.com/200/C2F784/464660'
                },
            ]
        }
    }
}
</script>

<style scoped>
</style>