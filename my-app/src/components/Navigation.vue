<template>
  <FloatingBar>
    <ul class="navigation">
      <li class="navigation__item">
        <!-- <Button ico="write" txt="글쓰기" /> -->
        <Button txt="글쓰기" />
      </li>
      <li class="navigation__item">
        <Button ico="alarm" txt="내소식 보기" />
      </li>
    </ul>
</FloatingBar>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
  },
  data() {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navigation {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navigation__item {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
</style>
