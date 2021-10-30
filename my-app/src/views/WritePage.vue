<template>
    <Content>
        <Header title="글쓰기">
            <template v-slot:left>
                <Button txt="취소" />
            </template>
            <template v-slot:btn-area>
                <Button v-if="txt.length > 0" txt="저장" />
                <Button txt="등록" :disabled="txt.length == 0" style="margin-left: 8px;" />
            </template>
        </Header>
        <Container>
            <div class="write__wrap" :class="{'write__wrap--focus' : isFloationBar}">
                <div class="write__title__wrap">
                    <QuillEditor
                        v-model="title.content"
                        :options="title.options"
                        :disabled="title.disabled"
                        @focus="onTakePhoto()"
                        @blur="onTakePhoto()"
                    />
                    <div id="my-title" v-show="isTakePhoto">
                        <!-- <Button ico="photo" txt="사진, 동영상 불러오기" /> -->
                        <button class="ql-image"></button>
                    </div>
                </div>
                <div class="write__txt__wrap">
                    <QuillEditor
                        v-model="content.content"
                        :options="content.options"
                        :disabled="content.disabled"
                        @focus="isFloationBar = !isFloationBar"
                        @blur="isFloationBar = !isFloationBar"
                    />
                </div>
            </div>
            <!--
                * Guide

                * 테마
                ** snow, bubble

                * 추가 기능 연장 옵션
                ** essential, minimal, full
            -->
        </Container>

        <FloatingBar :class="{'floating-bar--unpinned' : !isFloationBar}">
            <div class="button__area" id="my-content">
                <button class="ql-align"></button>
                <button class="ql-image"></button>
                <!-- But you can also add your own -->
                <Button id="custom-button" ico="sticker" txt="스티커 선택" />
                <!-- <Button ico="camera" txt="사진 선택" /> -->
            </div>
            <!-- <template ></template> -->
        </FloatingBar>
    </Content>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            value: '',
            txt: '',
            isTakePhoto: false,
            isFloationBar: false,
            // edit option
            title: {
                content: 'title',
                options: {
                    debug: 'title',
                    modules: {
                        toolbar: '#my-title'
                    },
                    placeholder: '제목',
                    thema: 'full',
                },
                disabled: false,
            },
            content: {
                content: 'content',
                options: {
                    debug: 'content',
                    modules: {
                        toolbar: '#my-content'
                    },
                    placeholder: '내용을 입력하세요',
                },
                disabled: false,
            },
        }
    },
    watch: {
    },
    methods: {
        keyPress(e) {
            var text = e.target.value;
            console.log(text);
        },
        onTakePhoto() {
            this.isTakePhoto = !this.isTakePhoto
        },
    }
}
</script>

<style>
.write__wrap {
    background-color: #ffffff;
}
.write__title__wrap {
    display: flex;
    position: relative;
    margin: 0 16px;
    border-bottom: 1px solid #e5e5e5;
}
.write__title__wrap .text-field {
    padding: 0 50px 0 0;
}
.write__title__wrap .button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
.write__txt__wrap {
    display: flex;
    flex-flow: column wrap;
    margin-top: 24px;
}
.write__txt__wrap.focus {
    min-height: 100vh;
}
.comment__wrap {
    display: flex;
    flex-flow: column wrap;
    min-height: 100%;
    margin-top: 55px;
    background-color: #ffffff;
}
.comment__wrap--empty {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

}
.comment__wrap--empty .comment__text {
    line-height: 21px;
    font-size: 15px;
    color: #a9a9a9;
}

.comment__list {
    border-bottom: 1px solid #e2e2e2;

}
.comment__item {
    border-top: 1px solid #e2e2e2;
}
.comment__box {}
.comment__content {}
/* default는 guest */
.comment__box--reply {
    margin: 0 16px;
    border-top: 1px solid #ededed;
}
.comment__box--host {
    background-color: #fcfff9;
}

.comment__box .comment__content {
    padding: 18px 16px 12px 16px;

}
.comment__box--reply .comment__content {
    margin: 0 -16px;
    padding: 18px 16px 12px 16px;
    background-color: #f7f7f7;
}
.comment__box--host .comment__content {
    background-color: #fcfff9;
}
.comment__box--reply .comment__text__wrap,
.comment__box--reply .comment__info {
    margin-left: 16px;
}
.comment__box--reply:not(:nth-child(2)) .comment__user {
    margin-left: 16px;
}

.comment__user-info {
    display: flex;
    align-items: top;
    justify-content: flex-start;
}
.comment__user-info .ico--reply {
    margin-right: 8px;
}
.comment__user-info .tag--primary {
    margin-left: 8px;
}
.comment__user {
    font-size: 15px;
}
.comment__text__wrap {
    margin-top: 8px;
}
.comment__text {
    display: inline;
    font-size: 15px;
    word-break: break-all;
    word-wrap: break-word;
}
.coment__tag {
    display: inline;
    margin-right: 8px;
    padding: 0 4px;
    font-size: 14px;
    background-color: #e1e1e1;
}
.comment__info {
    display: flex;
    align-items: center;
    margin-top: 4px;
}
.comment__info__date {
    display: inline-block;
    font-size: 13px;
    color: #999;
}
.comment__info .button {
    flex: none;
    margin-left: auto;
}

.ico--reply {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-width: 0 0 1px 1px;
    border-style: solid;
    border-color: #4c4c4c;
    text-indent: -9999px;
    font-size: 0;
    background: 0 0;
}
.tag--primary {
    display: inline-block;
    border: 1px solid #7E21B9;
    border-radius: 12px;
    padding: 0 8px;
    line-height: 17px;
    font-style: normal;
    font-size: 11px;
    color: #7E21B9;
}
</style>