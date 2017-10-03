import React from 'react';
import {Text, View} from "react-native";

const MovieNameView = ({name}) => {

    const {containerStyle, textStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={textStyle}>
                {name}
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        position: 'absolute',
        minWidth:150,
        flex:1,
        alignSelf: 'center',
        marginTop: 40,
        justifyContent: 'center',
        alignItems:'center',
        paddingLeft: 8,
        paddingRight: 8,
        height: 40,
        borderWidth: 3,
        borderColor: 'white'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold'
    }
}

export default MovieNameView;