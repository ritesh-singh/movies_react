import React from 'react';
import {Image, Text, View} from "react-native";

const MovieCard = ({movie}) => {
    const {backdrop_path} = movie;

    const {imageStyle, containerStyle, movieHeader, textStyle} = styles;

    return (
        <View style={containerStyle}>

            <Image style={imageStyle}
                   source={{uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`}}
            />

            <View style={movieHeader}>
                <Text style={textStyle}>
                    Mad MAX: FURY ROAD
                </Text>
            </View>

        </View>
    );
};

const styles = {
    imageStyle: {
        height: 200,
        flex: 1,
        width: null
    },
    containerStyle: {
        marginBottom: 15,
        flex: 1
    },
    movieHeader: {
        position: 'absolute',
        flex: 1,
        width: null,
        alignSelf: 'center',
        marginTop: 40,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        borderWidth:2,
        borderColor:'white'
    },
    textStyle: {
        color: 'white'
    }
};

export default MovieCard;