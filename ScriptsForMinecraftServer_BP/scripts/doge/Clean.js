
/* ---------------------------------------- *\
 *  Name        :  DogeLake Cleaner         *
 *  Description :  清理垃圾 集中到固定地点       *
 *  Version     :  1.1.0                    *
 *  Author      :  ENIAC_Jushi              *
\* ---------------------------------------- */

import { system, world, ScriptEventCommandMessageAfterEvent, Player } from "@minecraft/server";
import { Config } from "../data/Config";
import { Command } from "../core/Command";
import { Permission } from "../core/Permission";

/**
 * 垃圾清理到固定地点的一排箱子内，一个箱子装满则放入下一个箱子
 * 箱子上有牌子，记录垃圾进入箱子的时段
 * 若所有箱子均已装满，则从头开始
 */
class Clean {
  static _instance = undefined;
  static getInstance() {
    if (!Clean._instance) {
      this._instance = new Clean();
    }
    return this._instance;
  }

  /**
   * 获取箱子的起点
   */
  getStartPoint() {

  }

  /**
   * 开始清理
   */
  start() {

  }
}

function registerCommand(){
  Command.register("clean", Permission.OP, Clean.start, "开始扫地");
}

registerCommand();