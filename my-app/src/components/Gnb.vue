<template>
  <div
    class="gnb"
    :class="[
      { 'gnb--transparent' : transparent },
      { 'gnb--unpinned' : scrolled },
    ]"
    v-on="handleScroll"
  >
    <h1 class="logo">Blog</h1>
    <Button>
      <strong class="gnb__page-title ell">기록</strong>
    </Button>
    <div class="gnb__tool">
      <button type="button" class="button button--ico">
        <span class="button__cont">
          <i class="ico ico--search">이 블로그 검색</i>
        </span>
      </button>
      <button type="button" class="button button--ico">
        <span class="button__cont">
          <i class="ico ico--mymenu">MY메뉴 열기</i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gnb',
  props: {
    transparent: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      limitPosition: 56,
      scrolled: false,
      lastPosition: 0
    }
  },
  methods: {
    handleScroll() {
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true;
        // move up!
      } 
      
      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
        // move down
      }
      
      this.lastPosition = window.scrollY;
      // this.scrolled = window.scrollY > 28;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gnb {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 56px;
  background-color: #fff;
}
.gnb .logo {
    padding: 0 10px;
    font-size: 18px;
}
.gnb--transparent {
  background-color: transparent;
}
.gnb--transparent .logo {
  color: #ffffff;
}
.gnb--transparent .gnb__page-title {
  display: none;
}

.gnb__page-title {
  margin: 0 20px;
  font-size: 17px;
  font-weight: 700;
}

.gnb__tool {
  flex: none;
  display: inline-flex;
  align-items: center;
  /* margin-left: auto; */
}
.gnb__tool .button--ico {
  padding: 10px;
}
</style>
