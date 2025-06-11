/**
 * 其他设置
 */
export const Config = {
  // 生存飞行区
  flyArea: [
    {
      "name": "",
      "dimension": "minecraft:overworld",
      "start": [951, -2715],
      "end": [4604, 5628]
    }
  ],
  // 和平区域
  peaceArea: [
    {
      "dimension": "minecraft:overworld",
      "start": [951, -2715],
      "end": [4604, 5628]
    }
  ],
  // AFK等待时间 秒
  AFKTime: 120,
  // 答题设置
  QAInterval: [600, 720], // 从一题结束到下一题开始的时间区间（秒）
  QATimeout: 60, // 答题限时
  // 掉落物清理设置
  clean: {
    itemMax: 192, // 掉落物清理阈值
    recycleBin: {
      start: [-89, -59, -72], // 起点
      size: [10, 5, 0], // 大小，因为是一面箱子，所以必须有一个方向为 0
    }
  }
}