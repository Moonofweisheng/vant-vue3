<template>
  <div class="home">
    <div class="headerbg"></div>
    <div class="header">
      <!-- 地址开始 -->
      <div class="header-address">
        <van-icon color="#ffffff" name="location" size="22px" />
        <text class="header-address-detail">上海市闵行区浦江镇世博家园十二街坊</text>
        <van-icon color="#ffffff" name="arrow-down" size="18px" />
      </div>
      <!-- 地址结束 -->
      <van-search
        v-model="search.keyWord"
        clearable
        shape="round"
        background="0"
        placeholder="请输入搜索关键词"
        @search="search.doSearch"
      />
    </div>
    <!-- 轮播开始 -->
    <van-swipe v-if="info.swipe.length > 0" :autoplay="3000" indicator-color="#ffffff" class="home-swipe">
      <van-swipe-item v-for="(image, index) in info.swipe" :key="index">
        <van-image height="150px" width="351px" fit="cover" :src="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播结束 -->

    <!-- 类别开始 -->
    <van-grid :column-num="4">
      <van-grid-item v-for="(value, index) in info.channel" :key="index" :icon="value.image" :text="value.txt" />
    </van-grid>
    <!-- 类别结束 -->
    <div class="flash">
      <div class="flash-header">
        <div class="flash-header-left">
          <div class="flash-header-left-divide"></div>
          <span class="flash-header-left-title">限时抢购</span>
          <van-count-down :time="info.flashSale.time">
            <template #default="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <span class="flash-header-right">更多</span>
      </div>
      <div class="flash-body">
        <flash-card
          v-for="(item, index) in info.flashSale.saleList"
          :key="index"
          :sale-item="item"
          @click="doFlashClick"
        ></flash-card>
      </div>
    </div>
  </div>
</template>
<script src="./Home.ts" lang="ts"></script>
<style lang="less" scoped>
.home {
  position: relative;
  background: #ffffff;
  .headerbg {
    position: absolute;
    z-index: 0;
    height: 200px;
    width: 375px;
    background: linear-gradient(#00bb4e, #00db67);
  }
  .header {
    position: relative;
    z-index: 2;
    padding-top: 8px;
    &-address {
      height: 40px;
      box-sizing: border-box;
      padding: 0 12px;
      display: flex;
      align-items: center;
      &-detail {
        display: block;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #ffffff;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
  .home-swipe {
    position: relative;
    margin: 0 auto;
    width: 351px;
    border-radius: 12px;
  }
  .flash {
    width: 100%;
    margin-top: 14px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    &-header {
      width: 100%;
      height: 32px;
      flex: 0 0 auto;
      box-sizing: border-box;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-left {
        display: inline-flex;
        align-items: center;
        &-title {
          color: #2b2b2b;
          font-size: 20px;
          font-weight: 600;
          margin-right: 6px;
        }
        &-divide {
          margin-right: 6px;
          height: 18px;
          width: 4px;
          background: linear-gradient(#00bb4e, #00db67);
        }
      }
      &-right {
        color: #3dc95c;
        font-size: 14px;
      }
      .colon {
        display: inline-block;
        margin: 0 4px;
        color: #333333;
      }
      .block {
        display: inline-block;
        width: 22px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: #333333;
      }
    }
    &-body {
      flex: 1 1 auto;
      overflow-x: auto;
      display: flex;
    }
  }
}
</style>
