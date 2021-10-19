<template>
  <div class="blog__cover">
    <div class="cover__content">
      <div class="cover__title-area">
        <div class="cover__count-area">
          <span class="cover__count">오늘 {{ count }}</span>
          <i class="dot"></i>
          <span class="cover__count">전체 {{ countTotal }}</span>
        </div>
        <h2 class="cover__title">{{ title }}</h2>
      </div>

      <!-- 블로거 area -->
      <div class="bloger__area">
        <div class="profile-img__area">
          <img class="profile-img" src="https://blogpfthumb-phinf.pstatic.net/MjAyMDAxMTBfMTAy/MDAxNTc4NTg0NTg2NzI2.X-hLsZ1J8wC4nNPpOvcIWJ3pNNYN78PSRYjtev9QNvYg.By_9qe20ri8jFDF3TgPtyMVr1cR8FVP1saS65QXLuccg.PNG.sheeep__/profileImage.png?type=s1" alt="sheep">
        </div>
        <div class="text__area">
          <span class="nick-name">sheep</span>
          <div class="bloger_info">
            <span class="subject">디자인·퍼블리싱·프론트엔드</span>
          </div>
        </div>
      </div>

      <!-- 버튼 area -->
      <div class="button__area">
        <Button ico="share" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    count: {
      type: Number,
      default: 0,
    },
    countTotal: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '블로그 이름을 입력해주세요',
    },
  },
  data() {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog__cover {
  display: flex;
  align-items: flex-end;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 430px;
  background-position: 50%;
  background-size: cover;
  background-color: #bebebe;
  background-image: url(../assets/cover.png);
}
.blog__cover::before {
  position: absolute;
  top: 0; left: 0;
  z-index: 0;
  width: inherit; height: inherit;
  background-image: linear-gradient(180deg, rgba(0,0,0,.3), rgba(0,0,0,.22) 40%, rgba(0,0,0,.6));
  content: '';
}

.cover__count-area {
  display: inline-flex;
  align-items: center;
}
.cover__content {
  flex: 1;
  z-index: 10;
  padding: 0 16px;
  transform: translateZ(0);
}
.cover__title-area {
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
}
.cover__title {
  padding: 6px 0 0 0;
  font-size: 28px;
  line-height: 38px;
  text-shadow: 0 1px 2px rgb(0 0 0 / 15%);
  color: #ffffff;
  -webkit-line-clamp: 3;
}
.cover__count {
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
}
.button__area {
  padding: 12px 0 30px 0;
}
.button__area .button--ico {
  position: absolute;
  right: 16px;
  bottom: 46px;
}
</style>
