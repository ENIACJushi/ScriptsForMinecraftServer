@echo off
@REM MinecraftPath: C:\Users\XXX\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\ScriptsForMinecraftServer_BP"
xcopy /I /Q /s /e "..\ScriptsForMinecraftServer_BP" "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\ScriptsForMinecraftServer_BP"
