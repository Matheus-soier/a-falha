import sys
from PIL import Image
import numpy as np
import os

input_path = os.path.expanduser('~/Downloads/ChatGPT Image 22 de fev. de 2026, 02_49_22.png')
output_path = './public/matrix-hands.png'

try:
    img = Image.open(input_path).convert('RGBA')
    data = np.array(img)
    
    # Extract channels
    r = data[:,:,0].astype(int)
    g = data[:,:,1].astype(int)
    b = data[:,:,2].astype(int)
    a = data[:,:,3].astype(int)
    
    # Calculate max and min differences to identify grayscale (black/white lines vs colored pills)
    max_val = np.maximum(np.maximum(r, g), b)
    min_val = np.minimum(np.minimum(r, g), b)
    diff = max_val - min_val
    
    # Identify black/dark lines (mostly grayscale and dark)
    is_line = (max_val < 100) & (diff < 40)
    
    # Identify white/light background (mostly grayscale and light)
    is_bg = (min_val > 150) & (diff < 40)
    
    # Turn lines to neon green (42, 245, 152)
    data[is_line, 0] = 42
    data[is_line, 1] = 245
    data[is_line, 2] = 152
    
    # Turn background to black (5, 8, 8) or transparent
    # Let's make it fully transparent so it blends perfectly
    data[is_bg, 0] = 0
    data[is_bg, 1] = 0
    data[is_bg, 2] = 0
    data[is_bg, 3] = 0
    
    # Also handle intermediate grayish pixels (anti-aliasing)
    # If it's grayish (diff < 40) but neither fully black nor fully white:
    is_gray = (~is_line) & (~is_bg) & (diff < 40)
    
    # For anti-aliasing, map brightness to alpha of the neon green color
    # Brightness (0 to 255). We want dark grayscale to remain green but fade to transparent as it gets lighter.
    brightness = max_val[is_gray]
    alpha_map = np.clip(255 - brightness, 0, 255)
    
    data[is_gray, 0] = 42
    data[is_gray, 1] = 245
    data[is_gray, 2] = 152
    data[is_gray, 3] = alpha_map
    
    # Let's save the result
    out_img = Image.fromarray(data, 'RGBA')
    out_img.save(output_path)
    print("Success: Image processed and saved to", output_path)
except Exception as e:
    print("Error:", str(e))
