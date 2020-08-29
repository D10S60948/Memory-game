import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    text: string,
    fontSize?: number,
    marginBottom?: number
};

export default function Title({ text, fontSize = 36, marginBottom = 0 }: Props) {
    return (
        <View style={{ alignItems: 'center', marginBottom }}>
            <Text style={{ fontFamily: 'Gan', fontSize }}>{text}</Text>
        </View>
    );
}
