# OmeTV Audio HUD — Liquid Glass

A userscript for [ome.tv](https://ome.tv) that adds a liquid-glass overlay with live audio meters, a spectrum analyzer, connection stats, and a built-in voice FX chain (EQ, noise gate, limiter).

Everything runs locally in your browser. The script makes no network requests and sends nothing anywhere.

## Features

### Live tab
- **Mic in**: your raw microphone level in dBFS, with peak hold.
- **Sent to partner**: your level *after* the voice FX, which is what your partner actually hears. A status line tells you if you're silent, quiet, at a good level, too hot, clipping, gated, or muted.
- **Partner**: your partner's volume, so you can tell if they're too quiet or blasting.
- **Spectrum analyzer**: 38-band live frequency graph of your outgoing voice.
- **Connection stats**: ping, packet loss, jitter, upload and download bitrate, chat timer, and how many partners you've gone through this session.

### Voice FX tab
- **Bass** (-12 to +18 dB), **Presence** (-12 to +12 dB), **Treble** (-12 to +12 dB), and **Output gain** (-12 to +12 dB).
- **Noise gate**: silences your mic below a threshold you choose. Drag it all the way left for **Off**.
- **Limiter**: stops clipping when you boost bass or gain.
- **Presets**: Flat, Deep, Radio, Clear.
- **Master FX toggle**: switch back to your raw, unprocessed mic instantly.

### Other
- **Alt+M** mutes and unmutes your mic. There's also a mute button in the panel header.
- Draggable panel that remembers its position, tab, and settings between visits.
- Collapse to a small pill that still shows a status dot and live dB reading.

## Install

1. Use the insert script under and paste it inside of the console of your Ome.Tv

   ``fetch('https://raw.githubusercontent.com/fabalta/fabaltaomeipl/main/script.js').then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.text()}).then(eval).catch(console.error)``

## Usage

| Action | How |
| --- | --- |
| Move the panel | Drag the header |
| Collapse or expand | Click the **–** button |
| Mute or unmute mic | Click the mic button or press **Alt+M** |
| Switch tabs | **Live** / **Voice FX** at the top |
| Apply a preset | Voice FX tab, then tap a preset chip |
| Bypass all effects | Turn **Voice FX** off |

### Suggested starting points

- **Deeper voice**: use the **Deep** preset, then adjust Bass to taste.
- **Level target**: aim for the status line to read "Good level". Peaks between about -30 and -6 dB are healthy.
- **Background noise**: raise the **Noise gate** slider until it only opens when you speak. Too high will clip the start of your words.
- **Clipping warning**: lower Bass or Output gain, and keep the Limiter on.

## How it works

The script runs at `document-start` and wraps two browser APIs before the site loads:

- **`navigator.mediaDevices.getUserMedia`**: when ome.tv asks for your mic, the script routes the audio through a Web Audio chain (low-shelf EQ, presence peak, high-shelf EQ, limiter, gain, gate, mute) and hands the processed stream back to the site. Your video track is passed through untouched.
- **`RTCPeerConnection`**: lets the script meter your partner's incoming audio and read connection stats from `getStats()`.

Settings are saved in your browser's `localStorage` for ome.tv under the key `ometv-hud-v2`.

## Troubleshooting

**The panel doesn't appear.**
Make sure the script is enabled in your userscript manager and that the page was reloaded after installing.

**Meters stay at "Waiting for mic…".**
The meters start once ome.tv requests your mic. Press the site's start button and allow microphone access. If the site had already grabbed the mic before the script loaded, reload the page.

**The partner meter doesn't move.**
It only starts when a connection is made. Wait for a partner to connect.

**My partner can't hear me.**
Turn **Voice FX** off to send your raw mic. If that fixes it, the FX chain isn't compatible with something on your setup. Also check that the mute button isn't active (the mic icon shows a red 🔇).

**Audio sounds crunchy or distorted.**
Lower Bass or Output gain. Keep the Limiter on.

**The liquid warp effect doesn't show.**
The refraction-style distortion only works in Chromium-based browsers (Chrome, Edge, Brave). Other browsers fall back to standard frosted glass blur. It works either way.

**The site stopped working properly after an update.**
ome.tv may have changed how it sets up calls. The script falls back to passing your raw mic through if the FX chain fails to build. If something breaks, turn Voice FX off, and check the browser console for messages starting with `[HUD]`.

## Limitations

- Built for desktop browsers. It hasn't been tested on mobile.
- The script relies on ome.tv using standard WebRTC. A major change to how the site works could break it.
- Background tabs throttle timers, so the noise gate may react more slowly if the tab isn't visible.

## Files

| File | Description |
| --- | --- |
| `ometv-audio-hud-glass.user.js` | The userscript (v2, liquid glass UI with voice FX) |
| `ometv-audio-hud.user.js` | Original v1 (simple meter and stats, no FX) |
| `README.md` | This file |
