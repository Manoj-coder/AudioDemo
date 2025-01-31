import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { formatTime } from '../utills/formatTime';

const AudioSlider = ({ currentTime, duration, onSlide }) => (
    <View style={styles.sliderContainer}>
        <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={duration}
            value={currentTime}
            onValueChange={onSlide}
            onSlidingComplete={onSlide}
            minimumTrackTintColor="#FFA500" // Color of the track before the thumb
            maximumTrackTintColor="#E5E5EA" // Color of the track after the thumb
            thumbTintColor="#FFA500" // Color of the thumb
            trackStyle={styles.trackStyle} // Custom track style
            thumbStyle={styles.thumbStyle} // Custom thumb style
        />
        <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
            <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    sliderContainer: {
        marginBottom: 20,
    },
    slider: {
        width: '100%',
        height: 40,
    },
    trackStyle: {
        height: 8, // Increase the height of the track
        borderRadius: 4, // Rounded corners for the track
    },
    thumbStyle: {
        width: 20, // Width of the thumb
        height: 20, // Height of the thumb
        borderRadius: 10, // Make the thumb circular
        backgroundColor: '#FFA500', // Color of the thumb
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    timeText: {
        fontSize: 14,
        color: '#000',
    },
});

export default AudioSlider;