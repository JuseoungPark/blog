<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
  },
  data() {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  background-color: #f6f6f6;
}
</style>
