$git = "D:\Program Files\Git\bin\git.exe"

Write-Host "Checking Git status..."
& $git status

Write-Host "Adding files..."
& $git add .

Write-Host "Committing changes..."
& $git commit -m "Update landing template components"

Write-Host "Renaming branch to main..."
& $git branch -M main

Write-Host "Checking remote..."
& $git remote remove origin
& $git remote add origin https://github.com/NeuroVisionAG/landing-template.git

Write-Host "Pushing to GitHub..."
& $git push -u origin main --force

Write-Host "Done! Code is now on GitHub."
