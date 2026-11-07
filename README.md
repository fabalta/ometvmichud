# OmeTV Audio HUD — Liquid Glass

A lightweight, real-time audio monitoring and voice processing overlay for [OmeTV](https://ome.tv).

OmeTV Audio HUD adds a sleek Liquid Glass interface with live microphone monitoring, outgoing audio analysis, partner audio levels, WebRTC connection statistics, and an adjustable voice effects chain.

Everything runs directly in your browser using the Web Audio API and WebRTC. The script does not make its own external network requests or transmit configuration data to third-party services.

## Features

### Live Audio Monitoring

Monitor your microphone and audio connection in real time.

- **Mic in** — Displays your raw microphone input level in dBFS, including a live level meter and peak indicator.
- **Sent to partner** — Displays your outgoing audio level after voice processing, showing what is being sent through the audio track.
- **Partner** — Monitors incoming partner audio levels.
- **Live status indicator** — Displays your current microphone state and outgoing audio condition.
- **Peak monitoring** — Tracks recent audio peaks to help identify clipping and excessively loud input.
- **Audio device information** — Displays the active microphone device label when available.

### Spectrum Analyzer

A real-time frequency visualization of your outgoing microphone audio.

- 38-band frequency visualization.
- Live frequency analysis using the Web Audio API.
- Smooth spectrum rendering.
- Colorful frequency bars with a Liquid Glass interface.

### Connection Statistics

Monitor your WebRTC connection while chatting.

| Statistic | Description |
| --- | --- |
| Ping | Current WebRTC round-trip time in milliseconds. |
| Packet loss | Percentage of lost incoming packets. |
| Upload | Outgoing bitrate in kbps. |
| Download | Incoming bitrate in kbps. |
| Jitter | Incoming audio jitter in milliseconds. |
| Chat timer | Time elapsed since the connection started. |
| Session count | Number of WebRTC connections created during the session. |

Statistics are collected through `RTCPeerConnection.getStats()`.

### Voice FX

Customize your microphone audio with a built-in audio processing chain.

**Equalizer controls**

| Control | Range | Description |
| --- | --- | --- |
| Bass | -12 to +18 dB | Adjusts low frequencies. |
| Presence | -12 to +12 dB | Adjusts vocal presence and clarity. |
| Treble | -12 to +12 dB | Adjusts high frequencies. |
| Output gain | -12 to +12 dB | Adjusts the processed microphone volume. |

**Additional audio processing**

- **Noise gate** — Reduces background noise by silencing audio below your selected threshold. Adjustable from -80 to -25 dB. Set to -80 dB for Off.
- **Limiter** — Uses dynamic compression to help prevent clipping and excessive output levels.
- **Master FX toggle** — Instantly bypasses the processing chain and returns to your raw microphone audio.

**Built-in presets**

- **Flat** — Neutral audio processing.
- **Deep** — Boosted bass with reduced treble for a deeper vocal character.
- **Radio** — Enhanced bass and presence for a radio-style sound.
- **Clear** — Reduced bass with boosted presence and treble for additional vocal clarity.

All FX adjustments apply live without requiring a page reload.

### Microphone Controls

- Toggle microphone mute directly from the HUD.
- Use `Alt + M` to mute or unmute your microphone.
- Visual mute indicator.
- Smooth audio gain transitions.
- FX bypass for quickly troubleshooting audio issues.

### Liquid Glass Interface

A custom-designed interface inspired by Apple's Liquid Glass aesthetic.

- Translucent glass appearance.
- Layered gradients and highlights.
- Backdrop blur and saturation effects.
- SVG-based refraction and distortion filter.
- Rounded controls and animated toggles.
- Compact, responsive HUD layout.
- Draggable panel.
- Collapsible interface with a compact status pill.

## Installation

### Method 1 — Browser Console

1. Open [OmeTV](https://ome.tv).
2. Open your browser's Developer Console.
3. Paste the following command into the console.
4. Press Enter.
5. Start a conversation and allow microphone access.

```javascript
fetch('https://raw.githubusercontent.com/fabalta/ometvmichud/main/script.js')
  .then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.text();
  })
  .then(eval)
  .catch(console.error);
```

The HUD will automatically appear in the top-right corner.

**Note:** Browser security settings may prevent pasting into the Developer Console. Only execute scripts you have inspected and trust.

### Method 2 — Direct Script

You can also access the source code directly:

[View script.js](https://github.com/fabalta/ometvmichud/blob/main/script.js)

## Usage

| Action | How |
| --- | --- |
| Move the HUD | Drag its header. |
| Collapse the HUD | Click the `–` button. |
| Expand the HUD | Click the collapsed HUD. |
| Mute microphone | Click the microphone button. |
| Toggle microphone mute | Press `Alt + M`. |
| Open audio monitoring | Select the **Live** tab. |
| Open audio settings | Select the **Voice FX** tab. |
| Apply a preset | Select a preset chip in Voice FX. |
| Adjust equalizer | Move the Bass, Presence or Treble sliders. |
| Adjust microphone volume | Move the Output gain slider. |
| Configure noise gate | Adjust the Noise gate slider. |
| Disable audio processing | Turn **Voice FX** off. |
| Disable compression | Turn **Limiter** off. |

## Recommended Settings

### Deeper Voice

- Preset: **Deep**
- Adjust Bass to your preference.
- Keep the Limiter enabled.
- Adjust Output gain if necessary.

### Clearer Voice

- Preset: **Clear**
- Adjust Presence to improve vocal definition.
- Keep Output gain near 0 dB.

### Background Noise Reduction

- Enable Voice FX.
- Gradually increase the Noise gate threshold.
- Speak normally while adjusting it.
- Avoid setting the threshold too high, as it may cut off quieter parts of your speech.

### Preventing Audio Clipping

- Keep the Limiter enabled.
- Reduce Bass if your voice becomes distorted.
- Lower Output gain if necessary.
- Watch the outgoing audio meter for clipping warnings.

## How It Works

OmeTV Audio HUD uses native browser audio and networking APIs to monitor and process audio.

### Web Audio API

The script creates an audio processing chain when OmeTV requests microphone access through `navigator.mediaDevices.getUserMedia()`.

The original microphone stream is routed through the following processing stages:

```text
Microphone Input
       |
       +----> Input Analyzer
       |
       v
    Bass EQ
       |
       v
   Presence EQ
       |
       v
    Treble EQ
       |
       v
    Limiter
       |
       v
  Output Gain
       |
       v
   Noise Gate
       |
       v
   Microphone Mute
       |
       +----> Output Analyzer
       |
       v
  Processed Audio
       |
       v
   OmeTV / WebRTC
```

The original video tracks are preserved and passed through without audio processing.

### WebRTC Monitoring

The script wraps `RTCPeerConnection` to monitor connections created by OmeTV.

It uses:

- `getStats()` for connection statistics.
- Incoming audio tracks for partner audio monitoring.
- Outgoing and incoming RTP statistics for bitrate calculations.
- Candidate-pair statistics for round-trip time.
- Incoming RTP statistics for packet loss and jitter.

### Local Configuration

Your settings are stored in your browser's `localStorage`.

Storage key:

```text
ometv-hud-v2
```

Saved configuration includes:

- Voice FX enabled/disabled state.
- Bass, Presence and Treble values.
- Output gain.
- Noise gate threshold.
- Limiter state.
- Selected tab.
- HUD position.
- Collapsed/expanded state.

Microphone mute is session-based and is not stored as a persistent setting.

## Troubleshooting

**The HUD doesn't appear.**

- Make sure OmeTV has finished loading.
- Check the browser console for JavaScript errors.
- Verify that the script was executed successfully.
- Try refreshing the page and running the installation command again.

**Microphone meters show "Waiting for mic…".**

The audio processing chain is initialized when OmeTV requests microphone access.

- Start a conversation.
- Allow microphone access.
- Check your browser's microphone permissions.
- If the microphone was already initialized before the script was executed, reload the page.

**The partner meter doesn't move.**

The partner meter requires an active WebRTC connection and an incoming audio track.

Wait until a partner connects and starts transmitting audio.

**My partner cannot hear me.**

1. Turn Voice FX off.
2. Check that your microphone isn't muted.
3. Verify your browser's microphone permissions.
4. Check the console for `[HUD]` errors.

If disabling Voice FX fixes the problem, the audio processing chain may be incompatible with your current browser or setup.

**My audio sounds distorted.**

- Reduce Bass.
- Lower Output gain.
- Enable the Limiter.
- Check your microphone's input level.

**The spectrum analyzer isn't moving.**

The analyzer requires an initialized microphone and active audio processing chain.

**The liquid refraction effect isn't working.**

The interface includes a standard backdrop blur fallback. SVG filter-based refraction depends on browser rendering support, so the visual effect may differ between browsers.

**OmeTV stopped working after an update.**

OmeTV may have changed its microphone or WebRTC implementation.

The script attempts to fall back to the original microphone stream if the audio processing chain fails to initialize.

Check the browser console for errors beginning with:

```text
[HUD]
```

## Limitations

- Designed primarily for desktop browsers.
- Requires browser support for the Web Audio API and WebRTC.
- Microphone access must be granted to OmeTV.
- Connection statistics depend on the availability of WebRTC statistics.
- Partner audio monitoring requires an incoming audio track.
- Browser rendering support can affect the Liquid Glass refraction effect.
- Background browser tabs may throttle rendering and audio-related JavaScript timers.
- Changes to OmeTV's internal connection implementation may require script updates.

## Privacy

OmeTV Audio HUD processes microphone audio locally in your browser.

- No external analytics.
- No third-party telemetry.
- No remote audio processing.
- No separate microphone recording or upload functionality.
- Configuration is stored locally in browser storage.

The processed audio is still transmitted through OmeTV's normal WebRTC connection to your conversation partner.

## Files

| File | Description |
| --- | --- |
| `script.js` | Main OmeTV Audio HUD implementation. |
| `README.md` | Project documentation. |

## Credits

**OmeTV Audio HUD — Liquid Glass**

Developed by [fabalta](https://github.com/fabalta).

Source code: [github.com/fabalta/ometvmichud](https://github.com/fabalta/ometvmichud)

Built with JavaScript, Web Audio API, WebRTC and CSS.
