
/* ---------------------------------------- *\
*  Name        :  生物数量控制                *
*  Description :  分类统计生物数量并清理        *
*  Version     :  1.0.0                     *
*  Author      :  ENIAC_Jushi               *
\* ---------------------------------------- */

import { Player, system, world } from "@minecraft/server";
import { Command } from "../core/Command";
import { Permission } from "../core/Permission";
import * as MCUI from "@minecraft/server-ui";


/**
 * 开始统计和清理任务
 * @param {Player} player
 */
export function entityClean(player){
  let m = new Map();
  // 统计数量
  for (let entity of player.dimension.getEntities({"excludeTypes": ["player"]})) {
    let amount = m.get(entity.typeId);
    if (amount === undefined) {
      m.set(entity.typeId, 1);
    } else{
      m.set(entity.typeId, amount + 1);
    }
  }
  if (m.size === 0) {
    return;
  }

  // 排序
  let arr = Array.from(m);
  arr.sort((a,b)=>{
    return b[1] - a[1];
  });

  // 发送表单
  const form = new MCUI.ActionFormData();
  form.title("实体列表");
  for (let data of arr) {
    form.button(`${data[1]} | ${data[0]}`);
  }
  // 清除
  form.show(player).then((response) => {
    if(response.canceled || response.selection === undefined) return;

    const form2 = new MCUI.ActionFormData();
    form2.title("处理方式");
    form2.button(`remove`);
    form2.button(`kill`);
    form2.button("tp")
    form2.show(player).then((response2) => {
      player.sendMessage(`${response2.selection}`);
      if(response2.canceled || response2.selection === undefined) return;
      switch(response2.selection){
        case 0: {
          let entities = player.dimension.getEntities({"type": arr[response.selection][0]});
          for(let en of entities){
            en.remove();
          }
        }; break;
        case 1: player.runCommand(`kill @e[type=${arr[response.selection][0]}]`); break;
        case 2: player.runCommand(`tp @s @e[c=1,type=${arr[response.selection][0]}]`); break;
      }
    });
  });
}
/**
 *
 * @param {Player} player
 */
export function temp(player){
  let ens = player.dimension.getEntities({"type": "dogelake:grid_blue"});
  for(let en of ens){
    let res = `${en.typeId} (${en.location.x}, ${en.location.z}, ${en.location.z})\n`
    res += `doge:depth | ${en.getProperty("doge:depth")}\n`;
    res += `doge:direction | ${en.getProperty("doge:direction")}\n`;
    res += `doge:alpha | ${en.getProperty("doge:alpha")}\n`;
    player.sendMessage(res);
  }


  ens = player.dimension.getEntities({"type": "dogelake:grid_red"});
  for(let en of ens){
    let res = `${en.typeId} (${en.location.x}, ${en.location.z}, ${en.location.z})\n`
    res += `doge:depth | ${en.getProperty("doge:depth")}\n`;
    res += `doge:direction | ${en.getProperty("doge:direction")}\n`;
    res += `doge:alpha | ${en.getProperty("doge:alpha")}\n`;
    player.sendMessage(res);
  }

  ens = player.dimension.getEntities({"type": "dogelake:moon_blue"});
  for(let en of ens){
    let res = `${en.typeId} (${en.location.x}, ${en.location.z}, ${en.location.z})\n`
    res += `doge:depth | ${en.getProperty("doge:depth")}\n`;
    res += `doge:direction | ${en.getProperty("doge:direction")}\n`;
    res += `doge:alpha | ${en.getProperty("doge:alpha")}\n`;
    res += `doge:x | ${en.getProperty("doge:x")}\n`;
    res += `doge:z | ${en.getProperty("doge:z")}\n`;
    res += `doge:scale | ${en.getProperty("doge:scale")}\n`;
    player.sendMessage(res);
  }

  ens = player.dimension.getEntities({"type": "dogelake:galaxy_blue"});
  for(let en of ens){
    let res = `${en.typeId} (${en.location.x}, ${en.location.z}, ${en.location.z})\n`
    res += `doge:depth | ${en.getProperty("doge:depth")}\n`;
    res += `doge:direction | ${en.getProperty("doge:direction")}\n`;
    res += `doge:alpha | ${en.getProperty("doge:alpha")}\n`;
    player.sendMessage(res);
  }
}
function registerCommand(){
  Command.register("en", Permission.OP, entityClean, "清理实体");
}

registerCommand();

/**
 * 处死统计 铁傀儡
 */

var iron_start;
var iron_amount = 0;
function killStatistics(){
  Command.register("en_i", Permission.OP,
    /**
     * @param {Player} player
     */
    (player)=>{
      iron_start = new Date().getTime();

      world.afterEvents.entityDie.subscribe((ev)=>{
        iron_amount++;
      }, {"entityTypes": ["minecraft:iron_golem"]});

      // 每分钟计算速度
      system.runInterval(()=>{

        let time = ((new Date().getTime() - iron_start) / 60000);
        player.sendMessage(`Total: ${iron_amount} | Time: ${time.toFixed(1)}(min) | Avg: ${(iron_amount/time).toFixed(1)}`);
      }, 200);
    },
    "铁傀儡生成统计");
}
killStatistics();