<template>
  <Banner>
    <BannerItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </BannerItem>
  </Banner>
</template>

<script>
import { Banner, BannerItem } from "components/common/banner/index";

export default {
  name: 'HomeBanner',
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    Banner,
    BannerItem
  },
}

</script>

<style scoped></style>