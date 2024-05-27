<script setup lang="ts">
// 设置seo的优化
useSeoMeta({
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  description: '哔哩哔哩(bilibili.com)是国内知名的视频弹幕网站,这里有及时的动漫新番,活跃的ACG氛围,有创意的Up主。大家可以在这里找到许多欢乐。',
  keywords: '哔哩哔哩,bilibili,bilibili.com,哔哩哔哩弹幕网,弹幕网,弹幕,b站,bilibili弹幕,弹幕网站,弹幕网',
  referrer: 'no-referrer'
});
// let active = ref(0);
</script>

<template>
  <div>
    <!-- Nuxt页面路由相当于vue-router的RouterLink -->
    <!-- <NuxtLink to="/">首页</NuxtLink>
    <NuxtLink to="/video">视频页</NuxtLink> -->

    <!-- <van-tabs v-model:active="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs> -->

    <!-- Nuxt页面路由相当于vue-router的RouterView -->
    <!-- 缓存10级页面，提升用户体验 -->
    <NuxtPage :keepalive="{ max: 10 }" />
  </div>
</template>

<style lang="scss">
// 基础样式
@import './assets/styles/base.scss';
// 字体图标
@import './assets/styles/iconfont.scss';

:root {
  --van-primary-color: #fb7299 !important;
  --van-back-top-background: #fbfbfb !important;
  --van-back-top-text-color: #666 !important;
}
</style>