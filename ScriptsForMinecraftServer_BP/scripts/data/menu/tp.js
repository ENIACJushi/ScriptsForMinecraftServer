export const tp ={
  "type": "button",
  "op": "false",
  "title": "传送系统",
  "content": "§d快速前往你想去的地方",
  "buttons": [
    {
      "title": "§lTPA",
      "image": "textures/ui/FriendsDiversity",
      "onClick": {
        "type": "playerCmd",
        "run": "/tpa"
      }
    },
    {
      "title": "§l传送电话",
      "image": "textures/ui/phone",
      "onClick": {
        "type": "playerCmd",
        "run": "hifuutp"
      }
    },
    {
      "title": "§l前往提瓦特大陆",
      "image": "textures/ui/monkey_god",
      "onClick": {
        "type": "playerCmd",
        "run": "startgenshin"
      }
    }
  ],
  "exit": {
    "type": "",
    "run": ""
  }
}