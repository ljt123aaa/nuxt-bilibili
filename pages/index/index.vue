<script setup lang="ts">
import type { VideoItem } from '@/types/video';

// useHead({
//   meta: [
//     // 设置referrer策略为no-referrer
//     { name: 'referrer', content: 'no-referrer' },
//   ],
// });

// useFetch获取频道列表数据，data是响应式数据，可以直接用于界面渲染
const { data: channelList } = await useFetch('/api/channel');

const { data: videoList } = await useFetch('/api/video/video');

const list = ref<VideoItem[]>([]);
const loading = ref(false);
const finished = ref(false);

let page = 1;
let pageSize = 20;
// van-list组件的onLoad事件，用于加载更多数据，下拉触底也会触发这个事件
const onLoad = () => {
  loading.value = true;

  // 根据当前页码获取数据
  const data = videoList.value?.slice((page - 1) * pageSize, page * pageSize) as VideoItem[];
  list.value.push(...data);
  page++;
  loading.value = false;
  if (videoList.value?.length === list.value.length) {
    finished.value = true;
    loading.value = false;
  }
};
// 首次加载数据，主动请求20条数据，方便SEO抓取数据
onLoad();
</script>

<template>
  <!-- 公共头部 -->
  <Header />
  <!-- 频道模块 -->
  <van-tabs>
    <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
  </van-tabs>
  <!-- 视频列表 -->
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <div class="video-list">
      <VideoList v-for="item in list" :key="item.bvid" :item="item"/>
    </div>
  </van-list>

</template>

<style lang="scss" scoped>
// 视频列表
.video-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 5px;
}
</style>