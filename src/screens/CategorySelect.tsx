import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, data } from '../components/categorySelect';
import { Title } from '../shared';
import Background from '../shared/Background';
import { colors } from '../shared/consts';

export default function CategorySelect() {
    return (
        <Background bubbles backButton>
            <Title text='קטגוריה' marginBottom={20} />
            <FlatList
                ListHeaderComponentStyle={{ marginTop: 30 }}
                data={data}
                renderItem={({ item }) => <Card {...item} />}
                keyExtractor={(_, i) => i.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        padding: 15
    }
})