import React from 'react';
import { View, Text, Image } from 'react-native';
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants';

export const NFTTitle = ({title, subTitle}) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: FONTS.bold,
                    color: COLORS.blue,
                    fontSize: SIZES.medium
                }}
            >{title}</Text>

            <Text
                style={{
                    fontFamily: FONTS.regular,
                    color: COLORS.blue,
                    fontSize: SIZES.small
                }}
            > by {subTitle}</Text>
        </View>
    );
};
export const ETHPrice = () => {
    return (
        <View>
            <Text>eth</Text>
        </View>
    );
};
export const ImageCmp = ({ imgUrl, index }) => {
    return (
        <View>
            <Image 
                source={imgUrl}
                style={{
                    width: 50,
                    height: 50,
                    marginLeft: index === 0 ? 0 : -SIZES.font
                }}
            />
        </View>
    );
};
export const People = () => {
    return (
        <View
            style= {{
                flexDirection: "row",
            }}
        >
            {
                [assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                    <ImageCmp imgUrl={imgUrl} index={index} key={index}/>
                ))
            }
        </View>
    );
};
export const Price = ({price}) => {
    return (
        <View
            style= {{
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.base,
                backgroundColor: "white",
                justifyContent: 'center',
                alignContent:"center",
                maxWidth: "50%",
                elevation: 3
            }}
        >
            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary }}>Price </Text>
            <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.secondary }}>{`${price} $`}</Text>
        </View>
    );
};
export const SubInfo = ({ price }) => {
    return (
        <View
            style={{
                width: '100%',
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge,
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <People />
            <Price price={price} />
        </View>
    );
};

