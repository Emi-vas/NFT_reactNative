import React from 'react';
import { View, Text, Image,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton } from './Buttons';
import { NFTTitle, SubInfo } from './SubInfos';

const NFTCard = ({ data }) => {
    const navigation = useNavigation()

    return (
        <View
            style ={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,
                overflow: "hidden"
            }}
        >
            <View style={{width: "100%", height: 200 }}>
                <Image 
                    source={data.image}
                    resizeMode="cover"
                    style= {{
                        width: "100%",
                        height: "100%",
                    }}
                />
                 <CircleButton imgUrl={assets.heart} right={10} top={10}/>
            </View>
            
            <SubInfo price={data.price} />

            <View style={{ width: "100%", padding: SIZES.font }}>
                <NFTTitle title={data.name} subTitle={data.creator} />
            </View>
        </View>
    );
};

export default NFTCard;