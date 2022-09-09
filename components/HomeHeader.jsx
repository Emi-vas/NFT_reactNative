import { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, Keyboard } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 

import { COLORS, SIZES, FONTS, assets, FLEX } from "../constants"

const HomeHeader = ({ setSearch, search }) => {

    const [displayCross, setDisplayCross] = useState(false)

    useEffect(() => {
        if(search != "") {
            setDisplayCross(true)
        } else {
            setDisplayCross(false)
        }
    }, [search])

    const handleSearch = (value) => {
        setSearch(value)
    }
    return (
        <View
            style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.font
            }}
        >
            <View
                style={{
                    width: "100%",
                    ...FLEX.spaceBetween
                }}
            >
                <Image source={assets.logo} style={{ width: 90, height: 25 }} />

                <View>
                    <Image source={assets.person01} resizeMode="contain" style={{ width: 45, height: 45, }}/>
                    <Image 
                        source={assets.badge} 
                        resizeMode="contain" 
                        style={{
                            position: "absolute",
                            width: 25,
                            bottom: -7,
                            right: -7
                         }} 
                    />
                </View>
            </View>


            <View style={{ marginVertical: 10 }}>
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        borderRadius: 40,
                        backgroundColor: COLORS.gray,
                        alignItems: 'center',
                        padding: 9
                    }}
                >
                    <Image 
                        source={assets.search}
                        style={{ width: 20, height: 20, marginRight: SIZES.base }}
                    />

                    <TextInput
                        value={search}
                        placeholder="Search NFTs"
                        style={{ flex: 1, color: "white" }}
                        onChangeText={handleSearch}
                    />
                    
                    {
                        displayCross &&
                        <Entypo
                            name="circle-with-cross" size={24} color="white" 
                            onPress={()=> {
                                setSearch("")
                                Keyboard.dismiss()
                            }}
                        />
                    }
                   
                </View>
            </View>
        </View>
    );
};

export default HomeHeader;