<template>
  <!-- <Fragment> -->
    <button type="button" class="button" :class="{'button--ico' : ico}">
      <span class="button__cont">
        <slot name="content">
          {{ defaultContent }}
        </slot>
        <template v-if="ico">
          <i class="ico" :class="'ico--' + ico">{{ txt }}</i>
        </template>
      </span>
    </button>
  <!-- </Fragment> -->
</template>

<script>
export default {
  name: 'Button',
  props: {
    ico: {
      type: String,
      default: '',
    },
    txt: {
      type: String,
      default: '버튼명',
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
