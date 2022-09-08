import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { SHADOWS, SIZES } from '../constants';

export const CircleButton = ({ imgUrl, right, top }) => {
    return (
        <TouchableOpacity
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
                right: right
            }}
        >
           <Image 
                source={imgUrl}
                style={{ width: 30, height: 30 }}
           />
        </TouchableOpacity>
    );
};