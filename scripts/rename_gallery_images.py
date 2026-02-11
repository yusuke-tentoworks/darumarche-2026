import os
import glob
import re

def rename_screenshots():
    folder_path = "images"
    # Match files starting with "スクリーンショット" or "Screenshot"
    files = glob.glob(os.path.join(folder_path, "スクリーンショット*.png")) + \
            glob.glob(os.path.join(folder_path, "Screenshot*.png"))
    
    files.sort() # Ensure consistent order
    
    for i, file_path in enumerate(files):
        new_name = f"gallery-2025-{i+1:02d}.png"
        new_path = os.path.join(folder_path, new_name)
        
        os.rename(file_path, new_path)
        print(f"Renamed: {os.path.basename(file_path)} -> {new_name}")

if __name__ == "__main__":
    rename_screenshots()
