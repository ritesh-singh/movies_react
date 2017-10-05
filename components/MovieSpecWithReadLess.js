import React from 'react'
import {Text, TouchableWithoutFeedback, View} from "react-native";

const styles = {
    titleStyle:{
        fontFamily:'Roboto-Light',
        fontSize:12
    },
    titleValueStyle:{
        fontFamily:'Roboto-Bold',
        fontSize:12
    }
};

const MovieSpecWithReadLess = (props) => {
    const {titleStyle,titleValueStyle} = styles;

    return (
        <View>
            <View style={{
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                elevation: 1,
                padding: 20
            }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={titleStyle}>LANGUAGE</Text>
                        <Text style={titleValueStyle}>EN</Text>
                    </View>

                    <View style={{width: 1, backgroundColor: '#939393', marginTop: 4, marginBottom: 4}}/>

                    <View style={{alignItems: 'center'}}>
                        <Text style={titleStyle}>RATING</Text>
                        <Text style={titleValueStyle}>4.7</Text>
                    </View>

                    <View style={{width: 1, backgroundColor: '#939393', marginTop: 4, marginBottom: 4}}/>

                    <View style={{alignItems: 'center'}}>
                        <Text style={titleStyle}>POPULARITY</Text>
                        <Text style={titleValueStyle}>60</Text>
                    </View>
                </View>

                <Text style={{alignSelf: 'center', marginTop: 10,marginBottom:10,fontSize:12,fontFamily:'Roboto-Bold'}}>
                    OVERVIEW
                </Text>

                <Text style={{paddingBottom: 10,fontSize:11,fontFamily:'Roboto-Light'}}>
                    {props.overView}
                </Text>
            </View>


            <View style={{marginTop: -20}}>
                <TouchableWithoutFeedback onPress={props.onPress}>
                    <View style={{
                        height: 40,
                        justifyContent: 'center',
                        elevation: 4
                    }}>
                        <Text style={{
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
                        }}>
                            READ LESS
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

export default MovieSpecWithReadLess