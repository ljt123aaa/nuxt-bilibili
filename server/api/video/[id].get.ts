// 视频接口

import video from "@/database/video";

export default defineEventHandler((event) => {
  const { id } = event.context.params || {};
  return video.find((item) => item.bvid === id);
});
