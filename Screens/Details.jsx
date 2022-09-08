import React from 'react';
import { View, Text, Image, StatusBar, FlatList } from 'react-native';

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants"
import FocusedStatusBar from '../components/FocusedStatusBar'
import DetailsBid from "../components/DetailsBid"
import {RectButton} from "../components/Buttons"
import DetailsHeader from '../components/DetailsHeader';

const Details = ({ route, navigation }) => {
    const { data } = route.params

    return (
        <View style={{ flex: 1 }}>
            <FocusedStatusBar />
            <DetailsHeader imgUrl={data.image} />

            <FlatList 
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />


            <View
                style={{
                    position: "absolute",
                    width: "100%",
                    bottom: 0,
                    padding: 15,
                }}
            >
                <RectButton text="Place a bid" handlePress={()=> {}} fontSize={20}/>
            </View>
        </View>
    );
};

export default Details;