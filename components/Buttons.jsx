import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../constants';

export const CircleButton = ({ imgUrl, right, top, left, handlePress }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                width: 40,
                height: 40,
                backgroundColor: "white",
                position: "absolute",
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,

                top: top,
                right: right,
                left: left
            }}
        >
           <Image 
                source={imgUrl}
                style={{ width: 30, height: 30 }}
           />
        </TouchableOpacity>
    );
};

export const RectButton = ({ text, handlePress, fontSize }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                minWidth: 90,
                backgroundColor: COLORS.blue,
                borderRadius: 30,
            }}
        >
            <Text 
                style={{ 
                    textAlign: 'center', color: "white", padding: 10, fontSize: fontSize || 13
                }}
            > 
                { text } 
            </Text>
        </TouchableOpacity>
    )
}