import React from 'react';
import {Text, View} from "react-native";
import ReadMoreView from "./ReadMoreView";

const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        padding: 20,
        marginTop: -30,
        elevation: 3
    },
    textContainerStyle: {
        alignItems: 'center'
    },
    text1Style: {},
    text2Style: {
        paddingTop: 5,
        fontWeight: 'bold',
        color: 'black'
    }
};

const MovieSpecifications = ({movie}) => {
    const {
        containerStyle, textContainerStyle,
        text1Style, text2Style
    } = styles;

    const {original_language, popularity, vote_average} = movie;

    return (

        <View style={containerStyle}>

            <View style={textContainerStyle}>
                <Text style={text1Style}>
                    LANGUAGE
                </Text>

                <Text style={text2Style}>
                    {original_language}
                </Text>
            </View>


            <View style={textContainerStyle}>
                <Text style={text1Style}>
                    RATING
                </Text>

                <Text style={text2Style}>
                    {popularity}
                </Text>
            </View>


            <View style={textContainerStyle}>
                <Text style={text1Style}>
                    POPULARITY
                </Text>

                <Text style={text2Style}>
                    {vote_average}
                </Text>
            </View>
        </View>

    );
};

export default MovieSpecifications;