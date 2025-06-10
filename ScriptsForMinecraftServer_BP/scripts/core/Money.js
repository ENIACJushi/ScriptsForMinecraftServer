import { Player, world } from "@minecraft/server";

const MONEY_NAME = 'money';

export class Money {
  /**
   * 获取玩家金钱
   * @param {Player} player
   * @returns {number}
   */
  static get(player) {
    let scoreboard = world.scoreboard.getObjective(MONEY_NAME);
    try {
      let score = scoreboard.getScore(player);
      if (score !== undefined) {
        return score;
      }
    } catch { }
    world.scoreboard.getObjective(MONEY_NAME).setScore(player, 0);
    return 0;
  }

  /**
   * 设置玩家金钱
   * @param {Player} player
   * @param {number} money
   */
  static set(player, money){
    return world.scoreboard.getObjective(MONEY_NAME).setScore(player, money);
  }

  /**
   * 给予玩家金钱
   * @param {Player} pl
   * @param {number} money
   */
  static add(pl, money){
    return this.set(pl, this.get(pl) + money);
  }

  /**
   * 初始化计分板
   */
  static initScoreboard(){
    if(world.scoreboard.getObjective(MONEY_NAME) === undefined) {
      world.getDimension("overworld")
        .runCommand(`scoreboard objectives add ${MONEY_NAME} dummy ${MONEY_NAME}`);
    }
  }
}

Money.initScoreboard();
