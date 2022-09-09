import { View, Text, Button } from 'react-native';

import { NFTTitle } from './SubInfos';
import { COLORS, SIZES, FONTS } from '../constants'
import { useEffect, useState } from 'react';

const DetailsDesc = ({ data }) => {
    const [text, setText] = useState(data.description)
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        if(text.length > 100) {
            const newText = text.slice(0, 100) + "[...]"
            setText(newText)
            setShowMore(true)
        }
    }, [])

    const handleShowMore = () => {
        setShowMore(false)
        setText(data.description)
    }

    return (
        <View>
           <NFTTitle title={data.name} subTitle={data.creator} />
           <View style={{ marginVertical: 12 }}>
                <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.primary }} >
                    Description
                </Text>
                <Text style={{ fontFamily: FONTS.regular, color: COLORS.secondary, textAlign: "justify" }}>
                    {text}
                </Text>
                {
                    showMore && 
                    <View
                        style={{
                            marginTop: 7,
                            justifyContent: "center",
                            alignItems: "flex-start"
                        }}
                    >
                        <Button title='Read More' onPress={handleShowMore} color={COLORS.gray}/>
                    </View>
                }

           </View>
           <View style={{ margintop: 12 }}>
                <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.primary }} >
                    Bild List
                </Text>
           </View>

        </View>
    );
};

export default DetailsDesc;