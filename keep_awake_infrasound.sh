#!/bin/bash

# Generate infrasound file by using:
#   sox -n -r 44100 -c 2 infrasound.wav synth 60 sine 10 vol 0.01

# Function to handle SIGINT (Control-C)
trap "echo 'Exiting...'; exit 0" SIGINT

while true; do
  aplay infrasound.wav
done
