import React, {Component} from 'react';
import {Text, View} from "react-native";

export default class MovieNameView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            isReadMore: this.props.isReadMore
        }
        console.log(this.props.isReadMore);
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props.isReadMore);
        this.setState({
            name: nextProps.name,
            isReadMore: nextProps.isReadMore
        });
    }

    getView() {

        const {containerStyle, textStyle} = styles;

        if (this.state.isReadMore) {
            return (
                <View style={containerStyle}>
                    <Text style={textStyle}>
                        {this.state.name}
                    </Text>
                </View>
            );
        } else {
            return (
                <View style={{backgroundColor: 'black', justifyContent: 'center'}}>
                    <Text style={{color: 'white', padding: 20,
                    fontSize:12,fontFamily:'Roboto-Bold'}}>
                        {this.state.name}
                    </Text>
                </View>
            );
        }

    }

    render() {
        return (
            <View style={{
                position: this.state.isReadMore ? 'absolute' : 'relative',
                alignSelf: this.state.isReadMore ? 'center' : null,
                marginTop: this.state.isReadMore ? 20 : null
            }}>
                {this.getView()}
            </View>
        );
    }
};

const styles = {
    containerStyle: {
        minWidth: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        height: 40,
        borderWidth: 3,
        borderColor: 'white'
    },
    textStyle: {
        color: 'white',
        fontSize:12,
        fontFamily:'Roboto-Bold'
    },
    mainContainerStyle: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 20
    }
}
