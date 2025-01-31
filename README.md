Audio Player React Native App
A simple React Native app that plays audio and highlights the corresponding transcript phrases in real-time. Perfect for learning how to build audio players with synchronized text.

Features
Play, pause, rewind, and forward audio.

Transcript phrases are highlighted as the audio plays.

Easy-to-use slider for adjusting playback.

Works on both iOS and Android.

How to Set Up
What You Need
Node.js (v14 or higher)

React Native CLI

Android Studio (for Android) or Xcode (for iOS)

Steps
Clone the project:

bash
Copy
git clone https://github.com/your-username/audio-player-react-native.git
cd audio-player-react-native
Install dependencies:

bash
Copy
npm install
Install iOS dependencies (if you're using iOS):

bash
Copy
cd ios && pod install && cd ..
Run the app:

For Android:

bash
Copy
npx react-native run-android
For iOS:

bash
Copy
npx react-native run-ios
How to Use
Play Audio:

Tap the Play button to start the audio.

The transcript will highlight the current phrase as the audio plays.

Pause Audio:

Tap the Pause button to stop the audio.

Rewind/Forward:

Use the Rewind and Forward buttons to skip to the previous or next phrase.

Adjust Playback:

Drag the slider to jump to a specific part of the audio.

Project Structure
Here’s what the project looks like:

Copy
audio-player-react-native/
├── assets/                  # Audio files and images
├── components/              # Reusable components (e.g., buttons, sliders)
├── screens/                 # Main screens (e.g., the audio player)
├── utils/                   # Helper functions (e.g., formatting time)
├── App.js                   # Main app file
├── index.js                 # Entry point for React Native
├── package.json             # List of dependencies
└── README.md                # This file
Libraries Used
react-native-sound: For playing audio.

@react-native-community/slider: For the playback slider.

react-native-vector-icons: For play, pause, rewind, and forward icons.