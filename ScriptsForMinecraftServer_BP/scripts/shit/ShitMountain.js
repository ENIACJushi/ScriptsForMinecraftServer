import { world } from "@minecraft/server";

export class ShitMountain {
  /**
   * 因为 LL 插件改了事件拦截机制，导致聊天消息被一个插件拦截后，另一个插件就监听不到了
   * 所以在这里统一拦截掉，由称号插件负责服内信息播报
   */
  static cancelChat() {
    world.beforeEvents.chatSend.subscribe(event=>{
      event.cancel = true;
    })
  }
}