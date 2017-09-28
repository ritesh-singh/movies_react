import React from 'react';
import {Text, View} from "react-native";

const styles = {
    containerStyle: {
        height:40,
        backgroundColor: 'blue',
        justifyContent:'center'
    },
    textStyle: {
        color:'white',
        alignSelf:'center'
    }
};

const ReadMoreView = () => {
    const {containerStyle, textStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={textStyle}>
                READ MORE
            </Text>
        </View>
    );
};

export default ReadMoreView;