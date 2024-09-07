# piper-tts-app README

## Directory Structure

```
~/piper/
    ├── build/
    ├── models/
    │   └── en_GB-alan-low.onnx
    └── piper-tts-app/
        ├── app.js
        └── keep_awake_infrasound.sh
```

## Prerequisites

- Ensure `aplay` and `sox` are installed:
  ```bash
  sudo apt-get install -y alsa-utils sox
  ```

## Running the App

### 1. **Generate an Infrasound Tone**

Generate a low-frequency sine wave:
```bash
sox -n -r 44100 -c 2 ~/piper-tts-app/infrasound.wav synth 60 sine 10 vol 0.01
```

### 2. **Run the Infrasound Script**

Keep the USB audio device awake by running the infrasound script:
```bash
cd ~/piper-tts-app
./keep_awake_infrasound.sh 2>/dev/null &
```

### 3. **Run the NodeJS App**

Generate and play the speech:
```bash
cd ~/piper-tts-app
MODEL=en_GB-alan-low node app.js
```

This will generate the `en_GB-alan-low.wav` file and play it using `aplay`.

### Stopping the Infrasound Script

To stop the infrasound script, press `Control-C`. The script is designed to catch this signal and exit gracefully.

If it was run in the background use `ps -ef|grep '[i]nfrasound'` to find the process and `kill` it.
