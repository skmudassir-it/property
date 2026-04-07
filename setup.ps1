npx.cmd --yes create-next-app@latest temp_app --typescript --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm
Move-Item temp_app\* . -Force
Get-ChildItem -Path temp_app -Force | Where-Object { $_.Name -like '.*' -and $_.Name -ne '.git' } | Move-Item -Destination . -Force
Remove-Item temp_app -Recurse -Force

New-Item -ItemType Directory -Force -Path public\assets\luxury-real-estates
Copy-Item "C:\Users\south\.gemini\antigravity\brain\e19aeab7-da8e-4d43-83fa-c1c292d4eb21\hero_image_*.png" public\assets\luxury-real-estates\hero.jpg
Copy-Item "C:\Users\south\.gemini\antigravity\brain\e19aeab7-da8e-4d43-83fa-c1c292d4eb21\logo_gold_*.png" public\assets\luxury-real-estates\logo-gold.png
Copy-Item "C:\Users\south\.gemini\antigravity\brain\e19aeab7-da8e-4d43-83fa-c1c292d4eb21\gallery_1_*.png" public\assets\luxury-real-estates\gallery-1.jpg
Copy-Item "C:\Users\south\.gemini\antigravity\brain\e19aeab7-da8e-4d43-83fa-c1c292d4eb21\gallery_2_*.png" public\assets\luxury-real-estates\gallery-2.jpg
Copy-Item "C:\Users\south\.gemini\antigravity\brain\e19aeab7-da8e-4d43-83fa-c1c292d4eb21\gallery_3_*.png" public\assets\luxury-real-estates\gallery-3.jpg
Copy-Item "C:\Users\south\.gemini\antigravity\brain\e19aeab7-da8e-4d43-83fa-c1c292d4eb21\texture_gold_*.png" public\assets\luxury-real-estates\texture-gold.png
Copy-Item "C:\Users\south\.gemini\antigravity\brain\e19aeab7-da8e-4d43-83fa-c1c292d4eb21\divider_gold_*.png" public\assets\luxury-real-estates\divider-gold.png

npm install framer-motion lucide-react clsx tailwind-merge
