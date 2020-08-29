import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { colors } from '../shared/consts';
import { BackButton, Title } from '../shared';
import { data, Card } from '../components/categorySelect';

export default function CategorySelect() {
    return (
        <View style={styles.container}>
            <BackButton toScreen='GameType' />
            <Title text='קטגוריה' marginBottom={20} />
            <FlatList
                ListHeaderComponentStyle={{ marginTop: 30 }}
                data={data}
                renderItem={({ item }) => <Card {...item} />}
                keyExtractor={(_, i) => i.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
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