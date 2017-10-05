import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>
                POPULAR MOVIES
            </Text>
        </View>
    );
};


const styles = {
    containerStyle:{
        height:60,
        backgroundColor:'#1c1c2d',
        justifyContent:'center'
    },
    textStyle:{
        color:'#ffffff',
        fontSize:12,
        fontFamily:'Roboto-Light',
        marginLeft:8
    }
};

export default Header;