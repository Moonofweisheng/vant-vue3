<template>
  <!-- 轮播开始 -->
  <van-swipe v-if="goodsInfo.swipeList.length > 0" :autoplay="3000" indicator-color="#ffffff" class="home-swipe">
    <van-swipe-item v-for="(image, index) in goodsInfo.swipeList" :key="index">
      <van-image height="230px" width="375px" fit="cover" :src="image" />
    </van-swipe-item>
  </van-swipe>
  <!-- 轮播结束 -->
  <div class="description">
    <div class="name">
      <span>{{ goodsInfo.name }} </span>
      <span class="weight">{{ goodsInfo.weight }}</span>
    </div>
    <div class="detail">
      {{ goodsInfo.description }}
    </div>
    <div class="price">
      <div>
        原价 <span style="font-size:18px">￥</span> <span>{{ goodsInfo.oldPrice }} </span>
      </div>
      <div class="newPrice">
        <span>会员价￥</span> <span style="margin-left:2px">{{ goodsInfo.newPrice }}</span>
      </div>
    </div>
  </div>
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
</template>
<script src="./GoodsDetail.ts" lang="ts"></script>
<style lang="less" scoped>
.description {
  display: flex;
  flex-direction: column;
  width: 375px;
  box-sizing: border-box;
  padding: 12px;
  color: #333333;
  font-size: 22px;
  font-weight: 700;
  .name {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .weight {
      margin-left: 12px;
    }
  }
  .detail {
    margin-top: 6px;
    color: #c5c3c3;
    font-size: 18px;
    font-weight: 400;
  }
  .price {
    margin-top: 8px;
    line-height: 1;
    display: flex;
    flex-direction: column;
    color: #fe6263;
    font-size: 26px;
    .newPrice {
      color: #3cb963;
      font-size: 18px;
    }
    span {
      display: inline-block;
    }
  }
}
</style>
