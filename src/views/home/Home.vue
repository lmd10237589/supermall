<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  components: {
    NavBar
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    }).catch(err => {
      console.log(err)
    })
  }
}

</script>

<style>
.home-nav {
  background-color: var(--colour-tint);
  color: #fff;
}
</style>