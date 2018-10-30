import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './common';


class HomeDetail extends Component {

    render() {
        const {
            thumbnailStyle,
            thumbnailContainerStyle,
            headerContentStyle,
            headerTextStyle,
            imageStyle,
            textEmail,
            textCaption
        } = styles;
        const { email, url, caption } = this.props.post;

        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image source={{ uri: url }} style={thumbnailStyle} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{email}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image
                        style={imageStyle}
                        source={{ uri: url }}
                    />
                </CardSection>
                <CardSection>
                    <Text style={textEmail}>{email}</Text>
                    <Text style={textCaption}>{caption}</Text>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1
    },
    textEmail: {
        marginRight: 10,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    textCaption: {
        flex: 1,
        flexWrap: 'wrap'
    }
};

export default HomeDetail;
