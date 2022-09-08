import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../constants'

const Background = () => {
    return (
        <View style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
        }}>
            <View style={{ height: 300, backgroundColor: COLORS.primary }} />
            <View style={{ flex: 1, backgroundColor: COLORS.secondary }} />
        </View>
    );
};

export default Background;