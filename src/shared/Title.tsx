import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    text: string,
    fontSize?: number
};

export default function Title({ text, fontSize = 36 }: Props) {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Gan', fontSize }}>{text}</Text>
        </View>
    );
}
