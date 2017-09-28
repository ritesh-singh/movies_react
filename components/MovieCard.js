import React from 'react';
import {Image, View} from "react-native";
import MovieNameView from "./MovieNameView";
import {IMAGE_BASE_URL} from "../utils/Constants";
import MovieSpecifications from "./MovieSpecifications";
import ReadMoreView from "./ReadMoreView";

const MovieCard = ({movie}) => {
    const {backdrop_path, original_title} = movie;

    const {imageStyle, containerStyle} = styles;

    return (
        <View style={containerStyle}>

            <Image style={imageStyle}
                   source={{uri: `${IMAGE_BASE_URL}${backdrop_path}`}}
            />

            <MovieNameView name={original_title}/>

            <MovieSpecifications movie={movie}/>

            <View style={{marginTop:-15}}>
                <ReadMoreView/>
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
    }
};

export default MovieCard;