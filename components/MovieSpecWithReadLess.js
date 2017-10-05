import React from 'react'
import {Text, TouchableWithoutFeedback, View} from "react-native";

const MovieSpecWithReadLess = (props) => {
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
                        <Text>LANGUAGE</Text>
                        <Text>EN</Text>
                    </View>

                    <View style={{width: 2, backgroundColor: 'black', marginTop: 4, marginBottom: 4}}/>

                    <View style={{alignItems: 'center'}}>
                        <Text>RATING</Text>
                        <Text>4.7</Text>
                    </View>

                    <View style={{width: 2, backgroundColor: 'black', marginTop: 4, marginBottom: 4}}/>

                    <View style={{alignItems: 'center'}}>
                        <Text>POPULARITY</Text>
                        <Text>60</Text>
                    </View>
                </View>

                <Text style={{alignSelf: 'center', marginTop: 10}}>
                    OVERVIEW
                </Text>

                <Text style={{paddingBottom: 10}}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum
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
                            borderRadius: 20
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