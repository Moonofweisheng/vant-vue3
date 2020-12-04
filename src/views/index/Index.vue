<template>
  <div class="index">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/channel" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script src="./Index.ts" lang="ts"></script>
<style lang="less" scoped>
.index {
  padding-bottom: 50px;
}
</style>
