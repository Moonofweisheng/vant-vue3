<template>
  <van-search v-model="keyWord" placeholder="请输入搜索关键词" />
  <van-sidebar v-model="siderInfo.activeKey" @change="siderInfo.doChange">
    <van-sidebar-item v-for="(item, index) in siderInfo.channelList" :key="index" :title="item.title" />
  </van-sidebar>
</template>
<script src="./Channel.ts" lang="ts"></script>
