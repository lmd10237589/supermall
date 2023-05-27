<template>
  <a-carousel autoplay>
    <slot></slot>
  </a-carousel>
</template>

<script>
export default {
  name: 'Banner',
}

</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 195px;
  line-height: 195px;
  background: #364d79;
  /* overflow: hidden; */
}

.ant-carousel :deep(.slick-slide img) {
  width: 100%;
}
</style>