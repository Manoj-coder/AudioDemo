import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PhraseList = ({ phrases, currentPhraseIndex }) => (
    <ScrollView style={styles.transcript}>
        {phrases.map((phrase, index) => (
            <View
                key={index}
                style={[
                    styles.messageContainer,
                    phrase.speakerName === 'John' ? styles.leftMessage : styles.rightMessage,
                ]}
            >
                <Text
                    style={[
                        styles.speakerName,
                        index === currentPhraseIndex && styles.activeSpeakerName,
                    ]}
                >
                    {phrase.speakerName}
                </Text>
                <View
                    style={[
                        styles.messageBox,
                        index === currentPhraseIndex && styles.activeMessageBox,
                    ]}
                >
                    <Text
                        style={[
                            styles.messageText,
                            index === currentPhraseIndex && styles.activeMessageText,
                        ]}
                    >
                        {phrase.words}
                    </Text>
                </View>
            </View>
        ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    transcript: {
        flex: 1,
    },
    messageContainer: {
        marginBottom: 10,
    },
    leftMessage: {
        alignItems: 'flex-start',
    },
    rightMessage: {
        alignItems: 'flex-end',
    },
    speakerName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    activeSpeakerName: {
        color: '#FFA500',
    },
    messageBox: {
        maxWidth: '70%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation: 10,
    },
    activeMessageBox: {
        backgroundColor: '#E1E4FF',
    },
    messageText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    activeMessageText: {
        color: '#DBA604',
    },
});

export default PhraseList;