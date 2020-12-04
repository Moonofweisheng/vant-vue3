<template>
  <div class="flash-card">
    <img class="flash-card-img" :src="saleItem.image" @click.stop="doClick" />
    <span class="flash-card-txt">{{ saleItem.name }}</span>
  </div>
</template>
<script lang="ts" src="./FlashCard.ts"></script>
<style lang="less" scoped>
.flash-card {
  width: 100px;
  padding: 12px;
  &-img {
    width: 100px;
    height: 100px;
    border: none;
    outline: none;
  }
  &-txt {
    font-size: 12px;
    color: #666666;
  }
}
</style>
