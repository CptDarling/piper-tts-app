require('dotenv').config();
const { exec } = require('child_process');

const textToSpeech = (text, outputFile) => {
  const model = process.env.MODEL || 'en_GB-alan-low'
  const command = `echo "${text}" | ~/piper/build/piper --model ~/piper/models/${model}.onnx --output_file ${outputFile}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Output: ${stdout}`);

    // Play the generated audio file
    exec(`aplay ${outputFile}`, (playError, playStdout, playStderr) => {
      if (playError) {
        console.error(`Play Error: ${playError.message}`);
        return;
      }
      if (playStderr) {
        console.error(`Play Stderr: ${playStderr}`);
        return;
      }
      console.log(`Play Output: ${playStdout}`);
    });
  });
};

// Example usage
textToSpeech('Hello, world.', `${process.env.MODEL}.wav`);

