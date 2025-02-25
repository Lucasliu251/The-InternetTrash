import time
import requests
import os
import json

STEAM_API_KEY = "6270E484FB430B336A781AF035FEB92F"
DOWNLOAD_PATH = "../demoPath"  # Demo 文件保存路径

# 用于存储已下载的比赛分享代码
downloaded_codes = set()

# 获取下一个比赛的分享代码
def get_next_match_sharing_code(steam_id, known_code, steamidkey):
    url = f"https://api.steampowered.com/ICSGOPlayers_730/GetNextMatchSharingCode/v1?key={STEAM_API_KEY}&steamid={steam_id}&steamidkey={steamidkey}&knowncode={known_code}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if "result" in data and "nextcode" in data["result"]:
            return data["result"]["nextcode"]
    return None

# 下载 demo 文件
def download_demo(share_code):
    # 这里需要替换成实际下载 Demo 文件的 API 或 URL
    print(f"正在下载比赛 demo: {share_code}")
    # 模拟下载 Demo 文件
    demo_filename = os.path.join(DOWNLOAD_PATH, f"{share_code}.dem")
    with open(demo_filename, "w") as demo_file:
        demo_file.write(f"Demo file for {share_code}")
    print(f"下载完成: {share_code}")

# 监听并下载新的 Demo 文件
def auto_download_demos(steam_ids_and_codes):
    global downloaded_codes
    while True:
        for steam_id, known_code, steamidkey in steam_ids_and_codes:
            next_code = get_next_match_sharing_code(steam_id, known_code, steamidkey)
            if next_code and next_code not in downloaded_codes:
                # 下载 demo 文件
                download_demo(next_code)
                # 记录已下载的比赛代码
                downloaded_codes.add(next_code)
                # 更新 known_code 为新的 next_code
                known_code = next_code

        time.sleep(60 * 5)  # 每 5 分钟检查一次新的比赛分享代码

# 初始化下载目录
if not os.path.exists(DOWNLOAD_PATH):
    os.makedirs(DOWNLOAD_PATH)

# 用户输入的 Steam ID 和 初始比赛分享代码 和 验证码
steam_ids_and_codes = [
    ("76561199047005402", "CSGO-z8MCw-HAOWv-zkBCr-oWH8v-7BLwF", "9BY2-L64HA-HVKL"),
    #("765YYY", "CSGO-YT42K-Jxxxx-Kxxxx-5yyyy-Oixxx"),
    # 添加更多用户和比赛分享代码
]

# 启动自动下载功能
auto_download_demos(steam_ids_and_codes)
