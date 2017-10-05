import React from 'react';
import {View} from "react-native";
import MovieSpecifications from "./MovieSpecifications";

const MovieCard = ({movie}) => {

    const {containerStyle} = styles;

    return (
        <View style={containerStyle}>

            <MovieSpecifications movie={movie}/>

        </View>
    );
};

const styles = {
    containerStyle: {
        marginBottom: 15,
        flex: 1
    }
};



export default MovieCard;