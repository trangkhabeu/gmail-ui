import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import OcticonsIcon from 'react-native-vector-icons/Octicons';

const Header = () => {

    const [text, setText] = useState('');

    const handleChangeText = (newText) => {
        setText(newText);
    };

    return (
        <View style={{
            flexDirection: 'row', alignItems: 'center',
            height: 55,
            width: '100%',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: { width: -10, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
            borderRadius: 5,
            marginTop: 20
        }}>

            <Icon name="navicon" size={20} color="black" style={{ marginHorizontal: 20 }} />
            <TextInput
                onChangeText={handleChangeText}
                value={text}
                placeholder="メールを検索"
                placeholderTextColor="#999999"
            />
            <OcticonsIcon name="feed-person" size={35} color="#8fbc8f" style={{ marginLeft: 150 }} />
        </View>
    )
}
export default Header;