import React from 'react';
import { View, Text, SafeArea, FlatList } from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import HomeHeader from '../components/HomeHeader';
import Background from "../components/Background"
import NFTCard from '../components/NFTCard';

import { COLORS, NFTData } from "../constants"

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <FocusedStatusBar />
            <HomeHeader/>

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList 
                        data={NFTData}
                        renderItem={({item}) => <Text>{item.name}</Text>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                <Background />
            </View>
        </View>
    );
};

export default Home;