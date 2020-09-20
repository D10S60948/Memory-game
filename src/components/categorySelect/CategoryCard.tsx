import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, shadowStyle } from '../../shared/consts';
import { useNavigation } from '@react-navigation/native';
import { setCategory } from '../../redux/gameSettings/actions';
import { useDispatch } from 'react-redux';

interface CategoryCardProps {
    title: string;
    image: ImageSourcePropType;
    value: 'animals' | 'sport' | 'transportation' | 'food' | 'cartoons';
    goOn: () => void;
}

export default function CategoryCard({ title, image, value, goOn }: CategoryCardProps) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const onCategorySelect = () => {
        dispatch(setCategory(value));
        // navigation.navigate('CardsAmountSelect');
        goOn();
    }
    return (
        <ImageBackground
            source={image}
            style={styles.container}
            resizeMode='cover'
            imageStyle={{ borderRadius: 6 }}
        >
            <LinearGradient
                colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.4)', 'transparent', 'transparent']}
                style={StyleSheet.absoluteFillObject}
            />
            <TouchableOpacity style={{ flex: 1, width: '100%' }} onPress={onCategorySelect}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        height: 180,
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 6,
        overflow: 'hidden',
        ...shadowStyle(4),
        borderColor: colors.OFFWHITE,
        borderWidth: 1,
        alignItems: 'center',
        paddingHorizontal: 8
    },
    text: {
        color: 'white',
        textShadowColor: colors.DARK_GREY,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        fontSize: 31,
        fontFamily: 'Abraham',
        elevation: 1,
        zIndex: 10,
        marginTop: 30,
        textAlign: 'center'
    }
})