import React from 'react';
import {View} from "react-native";
import {Header} from "./common";
import MovieListing from "./MovieListing";

const App = () => {
    return (
        <View>
            <Header/>
            <MovieListing/>
        </View>
    );
};

export default App;