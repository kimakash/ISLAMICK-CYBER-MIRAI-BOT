import pywhatkit as kt
import re

def play_song(command):
    match = re.match(r"song (.+)", command)
    if match:
        song_name = match.group(1)
        print(f"Playing: {song_name}")
        kt.playonyt(song_name)
    else:
        print("No song command detected.")

# উদাহরণ ব্যবহার:
user_input = input("তোমার কমান্ড দাও: ")
play_song(user_input)

# টার্মিনালে এই কমান্ড চালাও লাইব্রেরি ইনস্টল করতে:
# pip install pywhatkit
