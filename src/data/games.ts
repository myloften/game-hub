import { Game } from '@/types/game';

export const games: Game[] = [
  {
    id: '1',
    title: '2048',
    description: '一款数字益智游戏，通过滑动合并相同的数字，目标是得到2048。考验你的策略思维！',
    category: '益智',
    image: 'https://placehold.co/600x400/png?text=2048',
    iframeUrl: 'https://play2048.co/'
  },
  {
    id: '2',
    title: '贪吃蛇',
    description: '经典的贪吃蛇游戏，通过键盘控制蛇的移动方向，吃到食物变长，但不能撞到墙或自己的身体。',
    category: '休闲',
    image: 'https://placehold.co/600x400/png?text=Snake',
    iframeUrl: 'https://playsnake.org/'
  },
  {
    id: '3',
    title: '俄罗斯方块',
    description: '经典的俄罗斯方块游戏，通过旋转和移动不同形状的方块，使其填满一行并消除。考验你的空间思维和反应速度！',
    category: '益智',
    image: 'https://placehold.co/600x400/png?text=Tetris',
    iframeUrl: 'https://tetris.com/play-tetris'
  },
  {
    id: '4',
    title: '跳跃忍者',
    description: '控制忍者角色，躲避障碍物，收集金币，看看你能跳多远！',
    category: '动作',
    image: 'https://placehold.co/600x400/png?text=Ninja',
    iframeUrl: 'https://ninjarunnergame.com/'
  },
  {
    id: '5',
    title: '数独挑战',
    description: '经典数独游戏，在9x9的格子中填入1-9的数字，使每行、每列和每个3x3的小方格中的数字都不重复。',
    category: '益智',
    image: 'https://placehold.co/600x400/png?text=Sudoku',
    iframeUrl: 'https://sudoku.com/'
  },
  {
    id: '6',
    title: '水果切切乐',
    description: '用鼠标切水果，躲避炸弹，看看你能得多少分！考验反应能力和手眼协调。',
    category: '休闲',
    image: 'https://placehold.co/600x400/png?text=Fruit+Ninja',
    iframeUrl: 'https://fruitninja.com/'
  },
  {
    id: '7',
    title: '塔防战争',
    description: '建造防御塔，阻止敌人入侵。合理分配资源，规划防御策略，保护你的基地！',
    category: '策略',
    image: 'https://placehold.co/600x400/png?text=Tower+Defense',
    iframeUrl: 'https://towerdefense.com/'
  },
  {
    id: '8',
    title: '记忆翻牌',
    description: '考验记忆力的翻牌游戏，找出所有相同的配对。适合所有年龄段的玩家！',
    category: '益智',
    image: 'https://placehold.co/600x400/png?text=Memory+Cards',
    iframeUrl: 'https://memorycards.com/'
  }
]; 