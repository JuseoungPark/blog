<template>
    <Fragment>
        <Gnb transparent />
        <Cover count="2" countTotal="3333" title="기록" />
        <div class="my-drawer"></div>
        <Container>
            <Block>
                <Box space>
                    <div class="introduce__area">
                        <strong class="introduce__title">소개</strong>
                        <p class="introduce__content">듣는 것을 쓰는 사람</p>
                    </div>
                </Box>
            </Block>
            <Block>
                <Box>
                    <div class="post__area__title">
                        <strong class="post__title">전체글</strong>
                        <div class="view-type-btn__area">
                            <Button ico="photo" txt="사진만 보기" @click="typePhotoList" />
                            <Button ico="list" txt="목록형 보기" @click="typeList" />
                            <Button ico="card" txt="카드형 보기" @click="typeCardList" />
                        </div>
                    </div>
                    <List :photo="photo" :typeList="list" :card="card" />
                </Box>
            </Block>
        </Container>
        <Navigation />
    </Fragment>
</template>

<script>
// import { Fragment } from 'vue-fragment'
import Gnb from '@/components/Gnb'
import Cover from '@/components/Cover'
import List from '@/components/List'

export default {
    name: 'Home',
    components: {
        // Fragment,
        Gnb,
        Cover,
        List,
    },
    data() {
        return {
            photo: true,
            list: false,
            card: false,
        }
    },
    methods: {
        typePhotoList() {
            this.photo = true
            this.list = false
            this.card = false
        },
        typeList() {
            this.photo = false
            this.list = true
            this.card = false
        },
        typeCardList() {
            this.photo = false
            this.list = false
            this.card = true
        },
    }
}
</script>

<style>
.my-drawer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 2130;
    overflow: hidden;
    width: 0px;
    height: 100%;
    visibility: hidden;
}
</style>
