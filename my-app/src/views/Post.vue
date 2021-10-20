<template>
    <Fragment>
        <Gnb />
        <div class="my-drawer"></div>
        <Container>
            <Box>
                <div class="post__area">
                    <div class="post-title-cover__area">
                        <div
                            class="post-title-cover__img"
                            :style="'background-image: url(@/assets/images/' + img + '.jpeg);'"
                        ></div>
                        <div class="post-title-cover__content">
                            <span class="post-title-cover__txt--category">일상</span>
                            <strong class="post-title-cover__title">{{ title }}</strong>

                            <!-- 블로거 area -->
                            <div class="bloger__area">
                                <div class="profile-img__area">
                                <img class="profile-img" src="https://blogpfthumb-phinf.pstatic.net/MjAyMDAxMTBfMTAy/MDAxNTc4NTg0NTg2NzI2.X-hLsZ1J8wC4nNPpOvcIWJ3pNNYN78PSRYjtev9QNvYg.By_9qe20ri8jFDF3TgPtyMVr1cR8FVP1saS65QXLuccg.PNG.sheeep__/profileImage.png?type=s1" alt="sheep">
                                </div>
                                <div class="text__area">
                                <span class="nick-name">sheep</span>
                                <!-- <div class="bloger_info">
                                    <span class="subject">디자인·퍼블리싱·프론트엔드</span>
                                </div> -->
                                <span class="post-title-cover__txt--date">20분 전</span>
                                </div>
                            </div>
                            <!-- // 블로거 area -->
                        </div>
                    </div>

                    <!-- 컨텐츠 영역 -->
                    <div class="post-content__area">
                        <div class="post-section post-section--txt">
                            <p class="txt--paragraph align--left">
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                            </p>
                            <!-- <Txt :size="16">텍스트 컴포넌트</Txt>
                            <Txt :size="12" bold>텍스트 컴포넌트</Txt>
                            <Txt :size="24" light>텍스트 컴포넌트</Txt> -->
                        </div>
                        <div class="post-section post-section--img">
                            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMTdfMzkg/MDAxNjM0NDQ0NzYxNTUw.HNcumJ1pvobNcTUV9vo0r1tf4ZeFMk-j9M7EAjIu1ZAg.WaW2RFv9_mCWCYOgVaYaEIv0de9lK3kJ-garHk9vT2Ug.JPEG.sheeep__/IMG_9512.JPG?type=w800" alt="">
                        </div>
                        <div class="post-section post-section--txt">
                            <p class="txt--paragraph align--left">
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                                테스트테스트테스트
                            </p>
                        </div>
                        <div class="post-section post-section--img">
                            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMTdfMzkg/MDAxNjM0NDQ0NzYxNTUw.HNcumJ1pvobNcTUV9vo0r1tf4ZeFMk-j9M7EAjIu1ZAg.WaW2RFv9_mCWCYOgVaYaEIv0de9lK3kJ-garHk9vT2Ug.JPEG.sheeep__/IMG_9512.JPG?type=w800" alt="">
                        </div>
                    </div>
                    <!-- // 컨텐츠 영역 -->
                </div>
            </Box>
        </Container>

        <!-- 플로팅 바 -->
        <FloatingBar>
            <div class="button__area">
                <div class="button__area__item">
                    <Button ico="feed-back" txt="반응하기" count="13" />
                    <!-- <Button ico="feed-back-per" txt="반응한 유저 보기" /> -->
                    <Button ico="chat" txt="댓글열기" count="9" @click="onCommentPage()" />
                </div>
                <div class="button__area__item--right">
                    <Button ico="share" txt="공유하기"></Button>
                </div>
            </div>
        </FloatingBar>
        <!-- // 플로팅 바 -->

        <CommentPage v-if="isCommentPage"></CommentPage>
    </Fragment>
</template>

<script>
// import { Fragment } from 'vue-fragment'
import Gnb from '@/components/Gnb'
import FloatingBar from '@/components/FloatingBar'

// pages
import CommentPage from '@/views/CommentPage'

export default {
    name: 'Post',
    components: {
        // Fragment,
        Gnb,
        FloatingBar,
        // pages
        CommentPage,
    },
    data() {
        return {
            title: '제목',
            img: 'img_01',
            isCommentPage: false,
        }
    },
    methods: {
        onCommentPage() {
            this.isCommentPage = !this.isCommentPage
        }
    }
}
</script>

<style>
.post__area {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    overflow: hidden;
    padding-top: 56px;
}
.post-title-cover {}
.post-title-cover__area {
    position: relative;
    margin-bottom: 26px;
}
.post-title-cover__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
    background-color: #bebebe;
}
.post-title-cover__content {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    position: relative;
    margin: 0 auto;
    padding: 80px 16px 30px 16px;
}
.post-title-cover__txt--category {
    margin-bottom: 15px;
    font-size: 13px;
}
.post-title-cover__title {
    font-size: 24px;
}
.post-title-cover__txt--date {
    padding-top: 8px;
    line-height: 12px;
    font-size: 12px;
    letter-spacing: -.5px;
    font-family: Helvetica-Light;
    /* color: #8c8c8c; */
}
</style>
