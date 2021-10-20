<template>
  <button
    class="button"
    :class="[
      {'button--ico' : ico},
      {'button--line' : line},
      {'button--solid' : solid},
      {'button--primary' : primary},
    ]"
  >
    <span class="button__cont">
      <template v-if="ico">
        <i class="ico" :class="'ico--' + ico">{{ txt }}</i>
      </template>
      <template v-if="count">
        <span class="count">{{ count }}</span>
      </template>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    line: {
      type: Boolean,
      default: false,
    },
    solid: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    ico: {
      type: String,
    },
    txt: {
      type: String,
      default: '버튼 성격',
    },
    count: {
      type: Number,
      default: 0,
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
