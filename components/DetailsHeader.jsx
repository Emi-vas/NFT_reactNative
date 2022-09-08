import { View, Text, Image } from 'react-native';
import { CircleButton } from './Buttons';

import { assets } from '../constants';
import { useNavigation } from '@react-navigation/native';

const DetailsHeader = ({ imgUrl }) => {
    const navigation = useNavigation()

    return (
        <View style={{ width: "100%", height: 350 }}>
            <Image 
                source={imgUrl}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: "100%"
                }}
            />

            <CircleButton 
                imgUrl={assets.left}
                top={10}
                left={10}
                handlePress={() => { navigation.navigate("Home") }}
            />
            <CircleButton 
                imgUrl={assets.heart}
                top={10}
                right={10}
                handlePress={() => {}}
            />
        </View>
    );
};

export default DetailsHeader;