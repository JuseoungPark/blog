<template>
  <div class="container">
    <div v-if="innerContainer" class="inner-container">
      <slot></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    innerContainer: {
      type: Boolean,
      default: false,
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
.container {
  /* display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  height: 100%; */
  background-color: #f6f6f6;
}
.inner-container {
  flex: 1;
  padding: 0 18px;
}
</style>
