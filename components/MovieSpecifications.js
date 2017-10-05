import React, {Component} from 'react';
import {View, UIManager, LayoutAnimation, Image} from "react-native";
import MovieSpecWithReadMore from "./MovieSpecWithReadMore";
import MovieSpecWithReadLess from "./MovieSpecWithReadLess";
import MovieNameView from "./MovieNameView";
import {IMAGE_BASE_URL} from "../utils/Constants";

export default class MovieSpecifications extends Component {


    constructor(props) {
        super(props);
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentWillMount() {
        this.state = {
            isReadMoreVisible: true
        }
        this.movie = this.props.movie;
    }


    updateState() {
        var customLayoutLinear = {
            duration: 1000,
            create: {
                duration: 200,
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                duration: 200,
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.scaleXY
            },
        };

        LayoutAnimation.configureNext(customLayoutLinear);

        this.setState({
            isReadMoreVisible: !this.state.isReadMoreVisible
        });
    }

    getView() {

        const {backdrop_path, original_title,overview,original_language,vote_average,popularity} = this.movie;

        if(this.state.isReadMoreVisible){
            return (
                <View>

                    <Image style={styles.imageStyle}
                           source={{uri: `${IMAGE_BASE_URL}${backdrop_path}`}}
                    />

                    <MovieNameView isReadMore = {this.state.isReadMoreVisible}
                    name={original_title}/>

                    <MovieSpecWithReadMore onPress={() => this.updateState()}
                        movie={{original_language,vote_average,popularity}}
                    />

                </View>
            );
        }else if(!this.state.isReadMoreVisible){
            return (
                <View>

                    <Image style={styles.imageStyle}
                           source={{uri: `${IMAGE_BASE_URL}${backdrop_path}`}}
                    />

                    <MovieNameView isReadMore = {this.state.isReadMoreVisible}
                                   name={original_title}/>

                    <MovieSpecWithReadLess onPress={() => this.updateState()}
                        overView={overview}
                    />

                </View>
            );
        }else{
            return null;
        }
    }

    render() {
        return (
            <View>
                {this.getView()}
            </View>
        );
    }


};

const styles = {
    imageStyle: {
        height: 200,
        flex: 1,
        width: null
    },
}
