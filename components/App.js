import React from 'react';
import {View} from "react-native";
import {Header} from "./common";
import MovieListing from "./MovieListing";

const App = () => {
    return (
        <View style={{flex:1}}>
            <Header/>
            <MovieListing/>
        </View>
    );
};

export default App;