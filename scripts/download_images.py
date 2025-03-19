import os
import requests
from PIL import Image, ImageDraw, ImageFont
import io

# 游戏列表
games = [
    {"title": "Pac-Man", "filename": "pacman.jpg", "search": "pacman arcade game"},
    {"title": "Arkanoid", "filename": "arkanoid.jpg", "search": "arkanoid breakout game"},
    {"title": "Snake", "filename": "snake.jpg", "search": "snake game classic"},
    {"title": "Hextris", "filename": "hextris.jpg", "search": "hextris game"},
    {"title": "Classic Minecraft", "filename": "minecraft.jpg", "search": "classic minecraft browser"},
    {"title": "Duck Hunt", "filename": "duckhunt.jpg", "search": "duck hunt nes game"},
    {"title": "Radius Raid", "filename": "radius-raid.jpg", "search": "radius raid game"},
    {"title": "HexGL", "filename": "hexgl.jpg", "search": "hexgl racing game"},
    {"title": "Lost World", "filename": "lostworld.jpg", "search": "lost world game"},
    {"title": "Powerline", "filename": "powerline.jpg", "search": "powerline io game"},
    {"title": "Zombs", "filename": "zombs.jpg", "search": "zombs io game"},
    {"title": "Diep", "filename": "diep.jpg", "search": "diep io game"},
    {"title": "Wings", "filename": "wings.jpg", "search": "wings io game"},
    {"title": "Starve", "filename": "starve.jpg", "search": "starve io game"},
    {"title": "2048", "filename": "2048.jpg", "search": "2048 puzzle game"},
    {"title": "Chess", "filename": "chess.jpg", "search": "chess game"},
    {"title": "Gartic", "filename": "gartic.jpg", "search": "gartic io game"},
    {"title": "Territorial", "filename": "territorial.jpg", "search": "territorial io game"},
    {"title": "Deeeep", "filename": "deeeep.jpg", "search": "deeeep io game"},
    {"title": "Splix", "filename": "splix.jpg", "search": "splix io game"},
    {"title": "Generals", "filename": "generals.jpg", "search": "generals io game"},
    {"title": "Slither", "filename": "slither.jpg", "search": "slither io game"},
    {"title": "Curve Fever", "filename": "curvefever.jpg", "search": "curve fever game"},
    {"title": "Evades", "filename": "evades.jpg", "search": "evades io game"},
    {"title": "Brutal", "filename": "brutal.jpg", "search": "brutal io game"},
    {"title": "Wilds", "filename": "wilds.jpg", "search": "wilds io game"},
    {"title": "Stab Fish", "filename": "stabfish.jpg", "search": "stabfish io game"},
    {"title": "Krunker", "filename": "krunker.jpg", "search": "krunker io game"},
    {"title": "Shell Shock", "filename": "shellshock.jpg", "search": "shell shock io game"},
    {"title": "Zombs Royale", "filename": "zombsroyale.jpg", "search": "zombs royale io game"},
    {"title": "Surviv", "filename": "surviv.jpg", "search": "surviv io game"},
    {"title": "1v1.LOL", "filename": "1v1lol.jpg", "search": "1v1 lol game"},
]

def create_placeholder_image(title, filename, size=(800, 600)):
    # 创建一个新的图片
    image = Image.new('RGB', size, color='#f0f0f0')
    draw = ImageDraw.Draw(image)
    
    # 绘制游戏标题
    title_text = title
    # 由于没有指定字体，这里使用简单的文本
    draw.text((size[0]/2, size[1]/2), title_text, fill='#666666', anchor="mm")
    
    # 保存图片
    image.save(f'public/games/{filename}')
    print(f"Created placeholder for {title}")

def main():
    # 确保目录存在
    os.makedirs('public/games', exist_ok=True)
    
    # 为每个游戏创建占位图片
    for game in games:
        try:
            create_placeholder_image(game['title'], game['filename'])
        except Exception as e:
            print(f"Error creating image for {game['title']}: {e}")

if __name__ == "__main__":
    main() 