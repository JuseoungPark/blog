<template>
    <div class="content">
        <Header title="댓글" count="users.length">
            <template v-slot:count>
                <!-- <span class="header__title--count">{{ this.comments[0].users.length + this.comments[1].users.length }}</span> -->
                <Txt size="18" marginLeft="4" bold primary>{{ this.comments[0].users.length + this.comments[1].users.length }}</Txt>
            </template>
            <template v-slot:btn-area>
                <Button line>글보기</Button>
            </template>
        </Header>
        <div class="edit__wrap">
            <ul class="comment__list">
                <li
                    v-for="(item, key) in comments"
                    :key="key"
                    class="comment__item"
                >
                    <div
                        v-for="(user, idx) in item.users"
                        :key="idx"
                        class="comment__box"
                        :class="[
                            {'comment__box--reply' : idx > 0},
                            {'comment__box--host' : user.host}
                        ]"
                    >
                        <div class="comment__content">
                            <div class="comment__user-info">
                                <i v-if="idx == 1" class="ico--reply">대댓글</i>
                                <strong class="comment__user">{{ user.nickname }}</strong>
                                <i v-if="user.host" class="tag--primary">주인장</i>
                            </div>
                            <div class="comment__text__wrap">
                                <span v-if="user.tag_name" class="coment__tag">@{{ user.tag_name }}</span>
                                <p class="comment__text" v-html="user.text"></p>
                            </div>
                            <div class="comment__info">
                                <span class="comment__info__date">{{ user.date }}</span>
                                <Button line>답글</Button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <FloatingBar>
            <div class="comment-input__wrap" :class="{'comment-input__wrap--expending' : isFocusInput}">
                <input type="text" v-model="inputComment" class="text-field" @focus="focusInput()" @blur="focusInput()" :placeholder="isFocusInput ? '@를 입력하면 유저를 테그할 수 있어요.' : '댓글을 입력해주세요.'" />
                <template v-if="isFocusInput">
                    <div class="button__area">
                        <Button ico="sticker" txt="스티커 선택" />
                        <Button ico="camera" txt="사진 선택" />
                        <Button ico="secret" txt="비밀글 선택" />
                    </div>
                </template>
                <Button solid primary :disabled="inputComment.length == 0">등록</Button>
            </div>
        </FloatingBar>
    </div>
</template>

<script>
import FloatingBar from '@/components/FloatingBar'

export default {
    components: {
        FloatingBar
    },
    data() {
        return {
            reply: true,
            host: true,
            comments: [
                {
                    users: [{
                        nickname: '방문객',
                        text: '안녕하세요?',
                        date: '2021-10-20 14:16'
                    },
                    {
                        host: true,
                        nickname: 'sheeep',
                        tag_name: '방문객',
                        text: '누구세요',
                        date: '2021-10-21 06:42'
                    }],
                },
                {
                    users: [{
                        nickname: '유저2',
                        text: '재밌네요',
                        date: '2021-10-20 14:17'
                    },
                    {
                        nickname: '유저1',
                        text: '잘 만들었어요 잘 만들었어요 잘 만들었어요 잘 만들었어요 잘 만들었어요 잘 만들었어요 잘 만들었어요 잘 만들었어요 잘 만들었어요',
                        date: '2021-10-20 14:21'
                    },
                    {
                        nickname: '유저1',
                        text: '잘 만들었어요',
                        date: '2021-10-20 14:21'
                    },
                    {
                        nickname: '유저1',
                        text: '잘 만들었어요',
                        date: '2021-10-20 14:21'
                    },
                    {
                        host: true,
                        nickname: 'sheeep',
                        text: '자꾸 달지 마세요',
                        date: '2021-10-20 14:21'
                    },
                    {
                        nickname: '유저1',
                        text: '잘 만들었어요',
                        date: '2021-10-20 14:21'
                    },
                    {
                        nickname: '유저1',
                        text: '잘 만들었어요',
                        date: '2021-10-20 14:21'
                    }],
                }
            ],
            inputComment: '',
            isFocusInput: false,
            disabled: true,
        }
    },
    methods: {
        focusInput() {
            this.isFocusInput = !this.isFocusInput
        }
    }
}
</script>

<style scoped>
.content {
    position: absolute;
    top: 0; right: 0;
    z-index: 4000;
    width: 100%;
    /* min-height: 100%; */
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