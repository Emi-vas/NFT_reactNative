import { View, Text, Image } from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';


const DetailsBid = ({ bid }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: "center",
                marginLeft: 20,
            }}
        >
            <Image 
                source={bid.image}
                style={{ width: 50, height: 50, margin: 7 }}
            />

            <View>
                <Text
                    style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.primary }}
                >
                    Bid placed by {bid.name}
                </Text>
                <Text
                    style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.primary }}
                >
                    {bid.date}
                </Text>
            </View>
        </View>
    );
};

export default DetailsBid;