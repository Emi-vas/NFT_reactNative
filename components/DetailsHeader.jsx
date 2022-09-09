import { View, Text, Image } from 'react-native';
import { CircleButton } from './Buttons';
import { SubInfo } from './SubInfos';

import { assets } from '../constants';
import { useNavigation } from '@react-navigation/native';

const DetailsHeader = ({ imgUrl, price }) => {
    const navigation = useNavigation()

    return (
        <View style={{ width: "100%", height: 200 }}>
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
            <SubInfo price={price} />
        </View>
    );
};

export default DetailsHeader;