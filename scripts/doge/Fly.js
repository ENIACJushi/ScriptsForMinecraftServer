import { Player } from "@minecraft/server";
import { Config } from "../data/Config";

/**
 * 玩家加入事件
 * @param {Player} player 
 */
export function playerJoinEvent(player){
    system.runTimeout(()=>{
        let areaName = inFlyArea(player);
        if(areaName !== undefined){
            enableFly(player);
            player.sendMessage(`[Doge] 当前处于飞行区, 已打开飞行模式。`);
            player.setDynamicProperty("dogefly", areaName);
        }
        else{
            disableFly(player);
            player.sendMessage(`[Doge] 当前不处于飞行区, 已关闭飞行模式。`);
            player.setDynamicProperty("dogefly");
        }
    },60);
}

system.runInterval(()=>{
    for(let player of world.getPlayers({"gameMode": GameMode.survival})){
        let nowArea = player.getDynamicProperty("dogefly");
        let areaName = inFlyArea(player);
        if(nowArea === undefined){
            // 不能飞
            // 若玩家在区域内，则设为飞行
            if(areaName !== undefined){
                enableFly(player);
                player.sendMessage(`[Doge] 进入飞行区 ${areaName}, 已打开飞行模式。`);
                player.setDynamicProperty("dogefly", areaName);
            }
        }
        else{
            // 能飞
            // 若玩家在区域外，则取消飞行
            if(areaName === undefined){
                disableFly(player);
                player.sendMessage(`[Doge] 离开飞行区 ${nowArea}, 已关闭飞行模式。`);
                player.setDynamicProperty("dogefly");
            }
        }
    }
}, 400);

/**
 * 玩家是否在飞行区域内
 * @param {Player} player
 * @returns {String|undefined}
 */
function inFlyArea(player){
    for(let area of Config.flyArea){
        if(player.dimension.id === area.dimension){
            if(Tool.pointInArea_2D(player.location.x, player.location.z, area.start[0], area.start[1], area.end[0], area.end[1])){
                return area.name;
            }
        }
    }
    return undefined;
}

function enableFly(player){
    player.runCommand("gamerule sendcommandfeedback false");
    player.runCommand("ability @s mayfly true");
    player.runCommand("gamerule sendcommandfeedback true");
}

function disableFly(player){
    let res = player.dimension.getBlockFromRay(player.location, {x:0, y:-1, z:0}, {"includeLiquidBlocks":false, "includePassableBlocks": false});
                
    player.teleport({x: res.block.location.x, y: res.block.location.y+1, z: res.block.location.z});
    
    player.runCommand("gamerule sendcommandfeedback false");
    player.runCommand("ability @s mayfly false");
    player.runCommand("gamemode adventure");
    player.runCommand("gamemode survival");
    player.runCommand("gamerule sendcommandfeedback true");

}
