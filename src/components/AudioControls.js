import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AudioControls = ({ isPlaying, playAudio, pauseAudio, rewindAudio, forwardAudio }) => (
    <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={rewindAudio} style={styles.controlButton}>
            <Icon name="backward" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={isPlaying ? pauseAudio : playAudio} style={styles.playButton}>
            <Icon name={isPlaying ? 'pause' : 'play'} size={30} color={isPlaying ? '#FFA500' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={forwardAudio} style={styles.controlButton}>
            <Icon name="forward" size={30} color="#000" />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    controlButton: {
        marginHorizontal: 10,
    },
    playButton: {
        marginHorizontal: 20,
        backgroundColor: '#ADD8E6',
        borderRadius: 18,
        padding: 15,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default AudioControls;