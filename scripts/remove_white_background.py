from PIL import Image
import sys

def make_transparent(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # Check if the pixel is near white (R, G, B > 240)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0)) # Make it transparent
        else:
            new_data.append(item)
    
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Transparency applied to {output_path}")

if __name__ == "__main__":
    make_transparent("images/footer-logo.png", "images/footer-logo-transparent.png")
