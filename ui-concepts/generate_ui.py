#!/usr/bin/env python3
"""UI mockup generator using Gemini API"""
import subprocess
import json
import base64
import os

API_KEY = "AIzaSyAt7po5Nu0nZl4yBoCBJQ-63cL0QnQ0EYw"
MODEL = "gemini-3.1-flash-image-preview"
OUTPUT_DIR = "/Users/vicmini/.openclaw/workspace/Projects/local-ai-chat/ui-concepts"

# Generate multiple UI concepts with different styles
CONCEPTS = [
    ("hero-section.png", "Website hero section design mockup for a plumbing company called Swift Plumbing. Modern professional style. Left side: bold headline 'Your Trusted Local Plumbers' in large white text on dark blue background. Right side: friendly professional plumber in clean uniform smiling, photorealistic. Bottom left: orange 'Get Free Quote' button. Color palette: dark navy blue #1a365d, bright orange #ed8936 accent, clean white. Clean modern layout, high quality ui mockup, figma style, 16:9 aspect ratio."),
    
    ("services-section.png", "Website services section design mockup for a plumbing company. Card-based grid layout with 3 columns. Each card: service icon, title, short description. Services: Drain Cleaning, Water Heater Repair, Leak Detection. Background: light gray #f7fafc. Cards: white with subtle shadow, orange icon accents. Modern clean style, figma mockup, 16:9."),
    
    ("chat-widget.png", "AI chatbot widget UI design mockup for a business website. Chat window floating in bottom right corner. Header: 'Swift Plumbing AI Assistant' with robot icon. Left side: bot message bubble 'Hello! How can I help you today?' in light blue background. Right side: user message 'Do you offer emergency service?' in orange background. Input area at bottom with text field and send button. Modern chat UI design, clean professional, figma style, square aspect ratio."),
    
    ("testimonials-section.png", "Customer testimonials section design mockup for a plumbing website. Horizontal carousel with 3 testimonial cards. Each card: 5 star yellow rating stars, customer photo (professional headshot), quote text, customer name and location. Clean white background. Modern ui design, figma mockup, 16:9 aspect ratio."),
    
    ("full-landing-page.png", "Complete website landing page design mockup for a plumbing company. Shows header with logo and navigation: Home, Services, About, Contact. Hero section with plumber image, headline, CTA button. Services section with card grid. Testimonials section. Contact section with form and contact info. Footer with links. Full page overview, high fidelity mockup, modern professional style, figma style, 16:9 aspect ratio."),
]

def generate_image(filename, prompt):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={API_KEY}"
    payload = {
        "contents": [{"parts": [{"text": prompt}]}]
    }
    
    cmd = f'''curl -s -X POST "{url}" -H 'Content-Type: application/json' -d '{json.dumps(payload)}' > /tmp/ui_resp.txt'''
    subprocess.run(cmd, shell=True)
    
    try:
        with open('/tmp/ui_resp.txt') as f:
            d = json.load(f)
        
        parts = d.get('candidates', [{}])[0].get('content', {}).get('parts', [])
        for p in parts:
            if 'inlineData' in p:
                img_data = base64.b64decode(p['inlineData']['data'])
                path = f"{OUTPUT_DIR}/{filename}"
                with open(path, 'wb') as f:
                    f.write(img_data)
                print(f"✓ {filename} ({len(img_data)} bytes)")
                return True
        print(f"✗ {filename}: No image in response")
        print(f"Response: {d}")
        return False
    except Exception as e:
        print(f"✗ {filename}: {e}")
        return False

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"Generating UI concepts in {OUTPUT_DIR}...\n")
    
    for filename, prompt in CONCEPTS:
        print(f"Generating {filename}...")
        generate_image(filename, prompt)
        print()
        # Brief pause between requests
        import time
        time.sleep(1)
    
    print("Done!")

if __name__ == "__main__":
    main()