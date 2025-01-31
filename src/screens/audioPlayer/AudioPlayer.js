import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';
import Sound from 'react-native-sound';
import AudioControls from '../../components/AudioControls';
import AudioSlider from '../../components/AudioSlider';
import PhraseList from '../../components/PhraseList';
import { formatTime } from '../../utils/formatTime';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const soundRef = useRef(null);

    const audioFile = 'https://file.notion.so/f/f/24407104-f114-40ec-91ac-25f0ac0ac7a6/66b62104-67d0-48a9-956a-2534f0c1f52a/example_audio.mp3?table=block&id=1832fabc-bb3f-802e-91d5-ed73b3c8711b&spaceId=24407104-f114-40ec-91ac-25f0ac0ac7a6&expirationTimestamp=1738360800000&signature=p7VxLNZNiBaxevuWAXgbqHvZn6kzl-4_LKtGSKUAqAM&downloadName=example_audio.mp3';

    const phrases = [
        { speakerName: "John", words: "The deadline is next Friday.", time: 1474 },
        { speakerName: "Jack", words: "That’s sooner than I thought.", time: 1570 },
        { speakerName: "John", words: "Any major roadblocks?", time: 1667 },
        { speakerName: "Jack", words: "Need help with it?", time: 1989 },
        { speakerName: "John", words: "Maybe. The dataset’s incomplete.", time: 1214 },
        { speakerName: "Jack", words: "Did you check the backups?", time: 1486 },
    ];

    useEffect(() => {
        Sound.setCategory('Playback');
        const sound = new Sound(audioFile, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('Failed to load the sound', error);
                return;
            }
            setDuration(sound.getDuration());
        });
        soundRef.current = sound;

        return () => {
            sound.release();
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (soundRef.current && soundRef.current.isLoaded() && isPlaying) {
                soundRef.current.getCurrentTime((seconds) => {
                    setCurrentTime(seconds);
                    updatePhraseHighlight(seconds * 1000);
                });
            }
        }, 100);

        return () => clearInterval(interval);
    }, [isPlaying]);

    const updatePhraseHighlight = (timeMs) => {
        const totalPhrases = phrases.length;
        let totalTime = 0;

        for (let i = 0; i < totalPhrases; i++) {
            totalTime += phrases[i].time;
            if (timeMs < totalTime) {
                setCurrentPhraseIndex(i);
                break;
            }
            totalTime += 250; // Add pause duration
        }
    };

    const playAudio = () => {
        if (soundRef.current) {
            soundRef.current.play((success) => {
                if (success) {
                    console.log('Finished playing');
                } else {
                    console.log('Playback failed');
                }
                setIsPlaying(false);
            });
            setIsPlaying(true);
        }
    };

    const pauseAudio = () => {
        if (soundRef.current) {
            soundRef.current.pause();
            setIsPlaying(false);
        }
    };

    const rewindAudio = () => {
        if (currentPhraseIndex > 0) {
            const newIndex = currentPhraseIndex - 1;
            setCurrentPhraseIndex(newIndex);
            seekToPhrase(newIndex);
        }
    };

    const forwardAudio = () => {
        if (currentPhraseIndex < phrases.length - 1) {
            const newIndex = currentPhraseIndex + 1;
            setCurrentPhraseIndex(newIndex);
            seekToPhrase(newIndex);
        }
    };

    const seekToPhrase = (index) => {
        let totalTime = 0;
        for (let i = 0; i < index; i++) {
            totalTime += phrases[i].time + 250;
        }
        soundRef.current.setCurrentTime(totalTime / 1000);
        setCurrentTime(totalTime / 1000);
    };

    const onSlide = (value) => {
        if (soundRef.current) {
            soundRef.current.setCurrentTime(value);
            setCurrentTime(value);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <PhraseList phrases={phrases} currentPhraseIndex={currentPhraseIndex} />
                <AudioSlider currentTime={currentTime} duration={duration} onSlide={onSlide} />
                <AudioControls isPlaying={isPlaying} playAudio={playAudio} pauseAudio={pauseAudio} rewindAudio={rewindAudio} forwardAudio={forwardAudio} />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default AudioPlayer;