import { Player, system } from '@minecraft/server';
import { Permission } from './Permission';

export class Command {
  static list = { };

  /**
   * 注册指令
   * @param {String} name 指令名称
   * @param {number} permission 权限等级 如 Permission.Any
   * @param {Function} callback 回调
   * @param {String|undefined} [description=undefined] 指令描述
   */
  static register(name, permission, callback, description=undefined){
    if (this.list[name] === undefined) {
      this.list[name] = {
        'callback' : callback,
        'permission': permission,
        'description': description===undefined ? name : description
      };
    }
    return false;
  }

  /**
   * 触发指令
   * @param {Player|undefined} player 触发指令的玩家，不指定时使用最高权限执行
   * @param {String} message
   */
  static trigger(player, message){
    let commandInfo = this.list[message];
    if (commandInfo !== undefined) {
      // 无执行者，最高权限
      if (player === undefined || Permission.getPermission(player) >= commandInfo.permission) {
        system.run(()=> {
          let result = commandInfo.callback(player);
          if (result !== undefined) {
            player.sendMessage(`${result}`);
          }
        });
        return;
      }
      player.sendMessage(`§c你没有执行此条指令的权限。`);
      return;
    }
    player.sendMessage(`§c未知的命令! 发送\'!help\'查询所有指令。`);
    return;
  }

  /**
   * 注册帮助指令，在初始化时调用
   */
  static registerHelpCommand(){
    this.register('help', Permission.Any,
      /**
       * @param {Player} player
       */
      (player) => {
        let result = '';
        let permission = Permission.getPermission(player);
        for (let command in this.list) {
          if (this.list[command].permission <= permission) {
            result += `${command} - ${this.list[command].description}\n`;
          }
        }
        return result;
      },
      '获取所有指令'
    );
  }

  /**
   * 注册脚本事件，在初始化时调用
   */
  static registerScriptEvent(){
    system.afterEvents.scriptEventReceive.subscribe((event)=> {
      // if(event.sourceEntity===undefined) return; // 无执行者，最高权限
      this.trigger(event.sourceEntity, event.id.substring(5));
    }, {'namespaces': ['doge']})
  }
}

Command.registerScriptEvent();

