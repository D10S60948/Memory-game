import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { colors } from '../shared/consts';
import { BackButton, Title } from '../shared';

export default function CategorySelect() {
    return (
        <View style={styles.container}>
            <BackButton toScreen='GameType' />
            <Title text='קטגוריה' />
            {/* <FlatList
            data={}
            renderItem={}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        padding: 15
    }
})