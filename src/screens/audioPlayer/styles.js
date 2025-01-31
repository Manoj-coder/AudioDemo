import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
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
        color: '#FFA500', // Orange for active speaker name
    },
    messageBox: {
        maxWidth: '70%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    activeMessageBox: {
        backgroundColor: '#ADD8E6', // Light blue for active message box
    },
    messageText: {
        fontSize: 16,
        color: '#333',
    },
    activeMessageText: {
        color: '#FFA500', // Orange for active message text
    },
    sliderContainer: {
        marginBottom: 20,
    },
    slider: {
        width: '100%',
        height: 40, // Increased slider height
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
    controls: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    playButtonContainer: {
        backgroundColor: '#ADD8E6', // Light blue box for play button
        borderRadius: 50,
        padding: 10,
        marginHorizontal: 10, // Space between buttons
    },
});

export default styles;