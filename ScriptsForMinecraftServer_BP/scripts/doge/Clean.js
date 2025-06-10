
/* ---------------------------------------- *\
 *  Name        :  DogeLake Cleaner         *
 *  Description :  清理垃圾 传送到最近的玩家. *
 *  Version     :  1.0.0                    *
 *  Author      :  ENIAC_Jushi              *
\* ---------------------------------------- */

import { system, world, ScriptEventCommandMessageAfterEvent, Player } from "@minecraft/server";
import { Config } from "../data/Config";
import { Command } from "../core/Command";
import { Permission } from "../core/Permission";
import * as MCUI from "@minecraft/server-ui";

var isCleaning = false;
/**
 * 初始化
 * /scoreboard objectives add item_amount dummy item_amount
 * /scoreboard players set target_value item_amount 100
 */
world.getDimension("overworld").runCommand(`scoreboard objectives add item_amount dummy item_amount`);
world.getDimension("overworld").runCommand(`scoreboard players set target_value item_amount ${Config.ITEMMAX-2}`);

// 扫描 一分钟一次
system.runInterval(()=>{
  let dim = world.getDimension("overworld");
  dim.runCommand("scoreboard players set value item_amount 0");
  dim.runCommand(`execute as @e[type=item,c=${Config.ITEMMAX + 1}] run scoreboard players add value item_amount 1`);
  dim.runCommand("execute if score value item_amount > target_value item_amount run scriptevent doge:clean");
}, 1200);

/**
 * 开始扫地任务
 * @param {ScriptEventCommandMessageAfterEvent} event
 */
export function startClean(event){
  world.sendMessage({"rawtext":[{"text":"「§6読経するヤマビコ ~ 幽谷 響子§f」 距离清理掉落物还有§c 5 §fs"}]});

  system.runTimeout(()=>{
    //// 清理到最近的玩家 / 清除
    // let dimensions = [world.getDimension("overworld"), world.getDimension("nether"), world.getDimension("the_end")];
    // for(let dimension of dimensions){
    //     let items = dimension.getEntities({"type":"item"});
    //     for(let item of items){
    //         let player = dimension.getPlayers({"location": item.location, "closest": true})[0];
    //         if(player===undefined) break;

    //         if(player.hasTag("doge:kill_clean")){
    //             item.remove();
    //         }
    //         else{
    //             item.teleport(player.location);
    //         }
    //     }
    // }
    //// 清理到一定范围内最近的玩家，其它清除
    let dimension = world.getDimension("overworld")
    dimension.runCommand("execute as @e[type=item] at @s run tp @p[r=32,tag=!doge:kill_clean");
    system.runTimeout(()=>{
      dimension.runCommand("kill @e[type=item]");
      //dimension.runCommand("execute as @e[type=item] at @s run tp @p");
      world.sendMessage({"rawtext":[{"text":"§a* 已清理掉落物 *"}]});
    }, 5);
  }, 100);
}

const cleanDoc = "\n  传送: 掉落物距离您最近时，将会传送到脚下。\n  消除: 掉落物距离您最近时, 将会被直接消除。\n  注意: 管理员不会赔偿因消除模式而被清除的物品。若打开消除模式,则代表您自愿承受由此带来的一切损失！"
/**
 * 开始扫地任务
 * @param {Player} player
 */
export function switchCleanType(player){
  if(player===undefined) return;

  let killMode = player.hasTag("doge:kill_clean");

  const form = new MCUI.ActionFormData();
  form.title("切换扫地模式");
  if(killMode){
    form.body(cleanDoc + "\n\n  当前模式：消除\n\n");
    form.button("传送模式");
  }
  else{
    form.body(cleanDoc + "\n\n  当前模式：传送\n\n");
    form.button("消除模式");
  }


  form.show(player).then((response) => {
    if(response.canceled || response.selection === undefined) return;
    if(killMode){
      player.removeTag("doge:kill_clean");
    }
    else{
      player.addTag("doge:kill_clean");
    }
  });
}

function registerCommand(){
  Command.register("clean", Permission.OP, startClean, "开始扫地");
  Command.register("clean_type", Permission.Any, switchCleanType, "切换扫地模式");
}

registerCommand();