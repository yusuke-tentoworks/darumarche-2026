from PIL import Image
import os

def combine_images(image_path1, image_path2, output_path):
    try:
        img1 = Image.open(image_path1)
        img2 = Image.open(image_path2)

        # Resize images to have the same width
        width = max(img1.width, img2.width)
        
        # Calculate height maintaining aspect ratio
        height1 = int(img1.height * (width / img1.width))
        height2 = int(img2.height * (width / img2.width))
        
        img1 = img1.resize((width, height1))
        img2 = img2.resize((width, height2))

        # Create new image
        new_img = Image.new('RGB', (width, height1 + height2))
        new_img.paste(img1, (0, 0))
        new_img.paste(img2, (0, height1))

        new_img.save(output_path)
        print(f"Successfully created {output_path}")

    except Exception as e:
        print(f"Error: {e}")

# Paths
brain_dir = "/Users/inoueyuusuke/.gemini/antigravity/brain/966051a1-15a2-4ca7-90a9-b29d47fb60d7"
image1 = os.path.join(brain_dir, "media__1770821664546.jpg") # Natur
image2 = os.path.join(brain_dir, "media__1770821664557.jpg") # Ayakanmuri/Meltyme
output = "images/shop-ayakanmuri-combined.jpg"

combine_images(image1, image2, output)
