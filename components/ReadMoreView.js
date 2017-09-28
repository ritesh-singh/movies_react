import React from 'react';
import {Text, View} from "react-native";

const styles = {
    containerStyle: {
        height:40,
        justifyContent:'center',
        elevation:4
    },
    textStyle: {
        color:'white',
        backgroundColor: 'blue',
        alignSelf:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingRight:40,
        paddingLeft:40,
        borderRadius:20
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