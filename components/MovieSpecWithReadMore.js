import React,{Component} from 'react'
import {Text, TouchableWithoutFeedback, View} from "react-native";
import MovieNameView from "./MovieNameView";

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
    text1Style: {
        fontFamily:'Roboto-Light',
        fontSize:14
    },
    text2Style: {
        paddingTop: 5,
        fontFamily:'Roboto-Bold',
        fontSize:14
    },
    containerStyle2: {
        height: 40,
        justifyContent: 'center',
        elevation: 4
    },
    textStyleReadMore: {
        color: 'white',
        backgroundColor: '#0076FF',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 40,
        paddingLeft: 40,
        borderRadius: 20,
        fontSize:14,
        fontFamily:'Roboto-Bold'
    }
};

export default class MovieSpecWithReadMore extends Component {


    render() {
        const {containerStyle, textContainerStyle, text1Style, text2Style} = styles;

        const {original_language,vote_average,popularity} = this.props.movie;

        return (
            <View>

                <View style={containerStyle}>

                    <View style={textContainerStyle}>
                        <Text style={text1Style}>
                            LANGUAGE
                        </Text>

                        <Text style={text2Style}>
                            {original_language.toUpperCase()}
                        </Text>
                    </View>


                    <View style={textContainerStyle}>
                        <Text style={text1Style}>
                            RATING
                        </Text>

                        <Text style={text2Style}>
                            {vote_average}
                        </Text>
                    </View>


                    <View style={textContainerStyle}>
                        <Text style={text1Style}>
                            POPULARITY
                        </Text>

                        <Text style={text2Style}>
                            {popularity.toFixed(1)}
                        </Text>
                    </View>
                </View>

                <View style={{marginTop: -20}}>
                    <TouchableWithoutFeedback onPress={this.props.onPress}>
                        <View style={styles.containerStyle2}>
                            <Text style={styles.textStyleReadMore}>
                                READ MORE
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
            </View>
        );
    };

}
