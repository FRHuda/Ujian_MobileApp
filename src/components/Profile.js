import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from './common';
import { logoutUser, postUpdate, postCreate } from '../actions';


class Profile extends Component {

    componentWillMount() {
        if (this.props.user) {
            this.setState({ email: this.props.user.email });
        }
    }

    buttonLogout = () => {
        Alert.alert(
            'Are you sure want to Log out ?',
            '',
            [
                { text: 'No', onPress: () => { }, style: 'cancel' },
                { text: 'Yes', onPress: this.logOut }
            ],
            { cancelable: false }
        );
    }

    logOut = () => {
        this.props.logoutUser();
        this.props.screenProps.rootNavigation.navigate('Login');
    }

    onUrlChange = (text) => {
        this.props.postUpdate('url', text);
    }

    onCaptionChange = (text) => {
        this.props.postUpdate('caption', text);
    }

    onButtonPress = () => {
        const { url, caption } = this.props;
        if (url == '' || caption == '') {
            Alert.alert(
                'You must fill the whole form',
                '',
                [
                    { text: 'Ok', onPress: () => { }, style: 'cancel' },
                ],
                { cancelable: false }
            );
        }
        if (url !== '' && caption !== '') {
            this.props.postCreate(url, caption);
        }
    }

    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: this.state.email, style: { color: '#fff' } }}
                    rightComponent={{
                        icon: 'user',
                        color: '#fff',
                        onPress: () => this.buttonLogout()
                    }}
                />
                <Card>
                    <CardSection>
                        <Text>Post Your Status :</Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            label="URL Image"
                            placeholder="Your Url"
                            value={this.props.url}
                            onChangeText={this.onUrlChange}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Caption"
                            placeholder="Your Caption"
                            value={this.props.caption}
                            onChangeText={this.onCaptionChange}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress}>
                            Post
                        </Button>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Text>Email: {this.state.email}</Text>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.buttonLogout}>Log Out</Button>
                    </CardSection>
                </Card>
            </View>
        );
    };
};

mapStateToProps = (state) => {
    const { user } = state.auth;
    const { url, caption } = state.post;

    return { user, url, caption };
}

export default connect(mapStateToProps, { logoutUser, postUpdate, postCreate })(Profile);