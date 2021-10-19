<template>
  <button type="button" class="button" :class="{'button--ico' : ico}">
    <span class="button__cont">
      <slot></slot>
      <template v-if="ico">
        <i class="ico" :class="'ico--' + ico">{{ txt }}</i>
      </template>
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    ico: {
      type: String,
    },
    txt: {
      type: String,
      default: '버튼 성격',
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

</style>
