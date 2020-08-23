import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../shared/consts';

export default function Button() {
    return (
        <TouchableOpacity 
            style={styles.container}
        >
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        backgroundColor: colors.PURPLE
    }
})