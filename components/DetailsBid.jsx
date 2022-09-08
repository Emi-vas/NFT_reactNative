import { View, Text } from 'react-native';


const DetailsBid = ({ bid }) => {
    return (
        <View>
            <Text>{bid.name}</Text>
        </View>
    );
};

export default DetailsBid;