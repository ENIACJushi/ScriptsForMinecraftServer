/**
 * 表单商店数据
 */
export const shopData = [
{
    "name": "买入",
    "type": "root",
    "sell": false, // 由根节点指定买入还是售出
    "image": "",
    "data": [
        {
            "name": "实体货币兑换",
            "type": "group",
            "image": "textures/items/coin_gold.png",
            "data": [
              {
                "name": "铜币",
                "type": "exam",
                "image": "textures/items/coin_copper.png",
                "data": {
                  "type": "wheat:coin_copper",
                  "aux": 0,
                  "remark": "铜币",
                  "money": 1
                }
              },
              {
                "name": "铁币",
                "type": "exam",
                "image": "textures/items/coin_iron.png",
                "data": {
                  "type": "wheat:coin_iron",
                  "aux": 0,
                  "remark": "铁币",
                  "money": 10
                }
              },
              {
                "name": "金币",
                "type": "exam",
                "image": "textures/items/coin_gold.png",
                "data": {
                  "type": "wheat:coin_gold",
                  "aux": 0,
                  "remark": "金币",
                  "money": 100
                }
              },
              {
                "name": "钻币",
                "type": "exam",
                "image": "textures/items/coin_diamond.png",
                "data": {
                  "type": "wheat:coin_diamond",
                  "aux": 0,
                  "remark": "钻币",
                  "money": 1000
                }
              },
              {
                "name": "星币",
                "type": "exam",
                "image": "textures/items/coin_star.png",
                "data": {
                  "type": "wheat:coin_star",
                  "aux": 0,
                  "remark": "星币",
                  "money": 10000
                }
              }
            ]
        },
        {
            "name": "§5『魂符』",
            "type": "exam",
            "image": "textures/items/soul_spell.png",
            "data": {
              "type": "dogelake:soul_spell",
              "aux": 3,
              "remark": "可以抵消一次死亡掉落",
              "money": 4998
            }
        },
        {
            "name": "迷途之家",
            "type": "group",
            "image": "textures/ui/Chen(Blooms of Spirit Possession).png",
            "data": [
              {
                "name": "鞘翅",
                "type": "exam",
                "image": "",
                "data": {
                  "type": "minecraft:elytra",
                  "aux": 0,
                  "remark": "在主世界恣意飞翔",
                  "money": 10000
                }
            },
            {
                "name": "焰火火箭",
                "type": "exam",
                "image": "",
                "data": {
                  "type": "minecraft:firework_rocket",
                  "aux": 0,
                  "remark": "帮助鞘翅飞行",
                  "money": 10
                }
            },
            {
                "name": "特制·急迫红茶",
                "type": "exam",
                "image": "",
                "data": {
                  "type": "wheat:potion_bottle_haste",
                  "aux": 0,
                  "remark": "十六夜咲夜特制的红茶，喝了可以让你在采矿时精神满满。",
                  "money": 450
                }
            }
            ]   
        }
    ]
},
{
    "name": "卖出",
    "type": "root",
    "sell": true,
    "image": "",
    "data": [
        {
          "name": "龙首",
          "type": "exam",
          "image": "",
          "data": {
            "type": "minecraft:skull",
            "aux": 5,
            "remark": "太懒了没有写简介~",
            "money": 1000
          }
        },
        {
          "name": "实体货币兑换",
          "type": "group",
          "image": "textures/items/coin_gold.png",
          "data": [
            {
              "name": "铜币",
              "type": "exam",
              "image": "textures/items/coin_copper.png",
              "data": {
                "type": "wheat:coin_copper",
                "aux": 0,
                "remark": "铜币",
                "money": 1
              }
            },
            {
              "name": "铁币",
              "type": "exam",
              "image": "textures/items/coin_iron.png",
              "data": {
                "type": "wheat:coin_iron",
                "aux": 0,
                "remark": "铁币",
                "money": 10
              }
            },
            {
              "name": "金币",
              "type": "exam",
              "image": "textures/items/coin_gold.png",
              "data": {
                "type": "wheat:coin_gold",
                "aux": 0,
                "remark": "金币",
                "money": 100
              }
            },
            {
              "name": "钻币",
              "type": "exam",
              "image": "textures/items/coin_diamond.png",
              "data": {
                "type": "wheat:coin_diamond",
                "aux": 0,
                "remark": "钻币",
                "money": 1000
              }
            },
            {
              "name": "星币",
              "type": "exam",
              "image": "textures/items/coin_star.png",
              "data": {
                "type": "wheat:coin_star",
                "aux": 0,
                "remark": "星币",
                "money": 10000
              }
            }
          ]
        },
        {
          "name": "矿物",
          "type": "group",
          "image": "textures/items/raw_iron.png",
          "data": [
            {
              "name": "煤",
              "type": "exam",
              "image": "textures/items/coal.png",
              "data": {
                "type": "minecraft:coal",
                "aux": 0,
                "remark": "煤",
                "money": 7
              }
            },
            {
              "name": "粗铜",
              "type": "exam",
              "image": "textures/items/raw_copper.png",
              "data": {
                "type": "minecraft:raw_copper",
                "aux": 0,
                "remark": "粗铜",
                "money": 10
              }
            },
            {
              "name": "红石",
              "type": "exam",
              "image": "textures/items/redstone_dust.png",
              "data": {
                "type": "minecraft:redstone",
                "aux": 0,
                "remark": "红石",
                "money": 12
              }
            },
            {
              "name": "绿宝石",
              "type": "exam",
              "image": "textures/items/emerald.png",
              "data": {
                "type": "minecraft:emerald",
                "aux": 0,
                "remark": "绿宝石",
                "money": 15
              }
            },
            {
              "name": "粗铁",
              "type": "exam",
              "image": "textures/items/raw_iron.png",
              "data": {
                "type": "minecraft:raw_iron",
                "aux": 0,
                "remark": "粗铁",
                "money": 20
              }
            },
            {
              "name": "青金石",
              "type": "exam",
              "image": "textures/items/dye_powder_blue.png",
              "data": {
                "type": "minecraft:lapis_lazuli",
                "aux": 0,
                "remark": "青金石",
                "money": 18
              }
            },
            {
              "name": "粗金",
              "type": "exam",
              "image": "textures/items/raw_gold.png",
              "data": {
                "type": "minecraft:raw_gold",
                "aux": 0,
                "remark": "粗金",
                "money": 30
              }
            },
            {
              "name": "紫水晶",
              "type": "exam",
              "image": "textures/items/amethyst_shard.png",
              "data": {
                "type": "minecraft:amethyst_shard",
                "aux": 0,
                "remark": "紫水晶",
                "money": 30
              }
            },
            {
              "name": "萤石粉",
              "type": "exam",
              "image": "textures/items/glowstone_dust.png",
              "data": {
                "type": "minecraft:glowstone_dust",
                "aux": 0,
                "remark": "萤石粉",
                "money": 2
              }
            },
            {
              "name": "钻石",
              "type": "exam",
              "image": "textures/items/diamond.png",
              "data": {
                "type": "minecraft:diamond",
                "aux": 0,
                "remark": "钻石",
                "money": 100
              }
            },
            {
              "name": "远古残骸",
              "type": "exam",
              "image": "textures/blocks/ancient_debris_side.png",
              "data": {
                "type": "minecraft:ancient_debris",
                "aux": 0,
                "remark": "远古残骸",
                "money": 300
              }
            }
          ]
        },
        {
          "name": "海产",
          "type": "group",
          "image": "textures/items/pamobile/pa_karp_bucket.png",
          "data": [
            {
              "name": "月鱼",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:raw_moon_fish",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 200
              }
            },
            {
              "name": "卡普鱼",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:raw_karp",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 20
              }
            },
            {
              "name": "小龙虾",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:raw_crab",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 50
              }
            },
            {
              "name": "沙丁鱼",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:raw_sardine",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 100
              }
            },
            {
              "name": "生蛤",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:raw_clam",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 90
              }
            },
            {
              "name": "珍珠",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:pearl",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 300
              }
            },
            {
              "name": "壳",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:shell",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 100
              }
            },
            {
              "name": "方鱼",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:raw_fang_fish",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 90
              }
            },
            {
              "name": "硬鱼鳞",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:hard_scale",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 400
              }
            },
            {
              "name": "油",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:oil",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 200
              }
            },
            {
              "name": "浮萍",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:duckweed",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 20
              }
            },
            {
              "name": "蟹甲碎片",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:crab_armor_shard",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 400
              }
            },
            {
              "name": "虾",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:raw_shrimp",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 10
              }
            },
            {
              "name": "鸭帽",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:duck_fresade",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 30
              }
            },
            {
              "name": "海带帽",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:kelp_fresade",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 30
              }
            },
            {
              "name": "冰鱼皮",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:icefish_skin",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 250
              }
            },
            {
              "name": "海蘑菇",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:sea_shroom",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 10
              }
            },
            {
              "name": "海胆",
              "type": "exam",
              "image": "",
              "data": {
                "type": "enj:raw_urchin",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 70
              }
            },
            {
              "name": "热带花",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:beach_flower",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 40
              }
            },
            {
              "name": "胶状物",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:jelly",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 50
              }
            },
            {
              "name": "浮游生物块",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:plankton_block",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 200
              }
            }
          ]
        },
        {
          "name": "生物战利品",
          "type": "group",
          "image": "",
          "data": [
            {
              "name": "下界之星",
              "type": "exam",
              "image": "",
              "data": {
                "type": "minecraft:nether_star",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 5000
              }
            },
            {
              "name": "烈焰棒",
              "type": "exam",
              "image": "",
              "data": {
                "type": "minecraft:blaze_rod",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 137
              }
            },
            {
              "name": "恶魂之泪",
              "type": "exam",
              "image": "",
              "data": {
                "type": "minecraft:ghast_tear",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 120
              }
            },
            {
              "name": "龙息",
              "type": "exam",
              "image": "",
              "data": {
                "type": "minecraft:dragon_breath",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 160
              }
            },
            {
              "name": "腐肉",
              "type": "exam",
              "image": "",
              "data": {
                "type": "minecraft:rotten_flesh",
                "aux": 0,
                "remark": "太懒了没有写简介~",
                "money": 2
              }
            },
            {
              "name": "紫水晶块",
              "type": "exam",
              "image": "",
              "data": {
                "type": "pa:amethystenite",
                "aux": 0,
                "remark": "生物掉落",
                "money": 20
              }
            }
          ]
        },
        {
          "name": "龙首",
          "type": "exam",
          "image": "",
          "data": {
            "type": "minecraft:skull",
            "aux": 5,
            "remark": "太懒了没有写简介~",
            "money": 1000
          }
        },
        {
          "name": "蜂蜜",
          "type": "exam",
          "image": "",
          "data": {
            "type": "minecraft:honey_bottle",
            "aux": 0,
            "remark": "太懒了没有写简介~",
            "money": 50
          }
        },
        {
          "name": "影击碎片",
          "type": "exam",
          "image": "",
          "data": {
            "type": "minecraft:echo_shard",
            "aux": 0,
            "remark": "太懒了没有写简介~",
            "money": 180
          }
        }
    ]
}
]