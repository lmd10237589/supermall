<template>
    <TabBar>
      <TabBarItem path="/home" activecolor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/shouye.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/shouye1.svg">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/fenlei.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/fenlei1.svg">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/gouwuche.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/gouwuche1.svg">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/wode.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/wode1.svg">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
 name: 'MainTabBar',
 components: {
    TabBar,
    TabBarItem,
  }
}

</script>

<style scoped>

</style>