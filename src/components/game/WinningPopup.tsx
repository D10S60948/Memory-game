import React, { useEffect } from 'react';
import { StyleSheet, View, Modal, Text, Image } from 'react-native';
import { shadowStyle, colors } from '../../shared/consts';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

interface PopupProps {
    isVisible: boolean;
}

export default function WinningPopup({ isVisible }: PopupProps) {
    const { score } = useSelector((state: RootState) => state.game);
    const { nicknames } = useSelector((state: RootState) => state.gameSettings);
    const winnerName = score[0] > score[1] ? nicknames.player1 : nicknames.player2;
    return (
        <Modal
            animationType='fade'
            transparent
            visible={isVisible}
        >
            <View style={styles.container}>
                <View style={styles.box}>
                    {
                        score[0] === score[1] ?
                            <React.Fragment>
                                <Text style={styles.text}>והמנצח הגדול הוא....</Text>
                                <Image
                                    source={{ uri: 'https://www.animatedimages.org/data/media/492/animated-fireworks-image-0065.gif' }}
                                    style={{ height: '40%', width: '60%' }}
                                    resizeMode='contain'
                                />
                                <Text style={styles.winner}>שחקן 1</Text>
                            </React.Fragment>
                            :
                            <Text style={styles.text}>תיקו !</Text>
                    }
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        height: '60%',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        ...shadowStyle(4),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Assistant',
        fontSize: 27,
        color: colors.VERY_DARK_GREY,
        textAlign: 'center'
    },
    winner: {
        fontFamily: 'Dana',
        fontSize: 50,
        color: colors.VERY_DARK_GREY
    }
})