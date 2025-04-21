import pywhatkit as kt
import re

def play_song(command):
    match = re.match(r"song (.+)", command)
    if match:
        song_name = match.group(1)
        print(f"Playing: {song_name}")
        kt.playonyt(song_name)
    else:
        print("No song command detected. Please start with 'song'.")

# ব্যবহার উদাহরণ:
user_input = input("song: ")
play_song(user_input)
