import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, data } from '../components/categorySelect';
import { Title } from '../shared';
import { colors } from '../shared/consts';

interface GameTypeSelectProps {
    goOn: () => void;
}

export default function CategorySelect({ goOn }: GameTypeSelectProps) {
    return (
        <View style={{ flex: 1 }} >
            <Title text='קטגוריה' marginBottom={20} />
            <FlatList
                ListHeaderComponentStyle={{ marginTop: 30 }}
                data={data}
                renderItem={({ item }) => <Card {...item} goOn={goOn} />}
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