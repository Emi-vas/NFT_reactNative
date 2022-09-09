import React, { useEffect, useState } from 'react';
import { View, FlatList, } from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import HomeHeader from '../components/HomeHeader';
import Background from "../components/Background"
import NFTCard from '../components/NFTCard';

import { COLORS, NFTData } from "../constants"

const Home = () => {
    const [search, setSearch] = useState('')
    const [dataFilterd, setDataFilterd] = useState(NFTData)

    useEffect(() => {
        if(search) {
            const data = NFTData.filter((elem) => elem.name.includes(search))
            setDataFilterd(data)
        } else {
            setDataFilterd(NFTData)
        }
    }, [search])

    return (
            <View style={{ flex: 1 }}>
                <FocusedStatusBar />
                <HomeHeader setSearch={setSearch} search={search}/>

                <View style={{ flex: 1 }}>
                    <View style={{ zIndex: 0 }}>
                        <FlatList 
                            data={dataFilterd}
                            renderItem={({item}) => <NFTCard data={item}/>}
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