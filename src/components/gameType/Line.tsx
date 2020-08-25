import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Line() {
    return (
        <View style={styles.container} />
    );
}

const styles = StyleSheet.create({
    container: {
        height: 1,
        backgroundColor: 'rgb(235,235,235)'
    }
})