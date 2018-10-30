import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyD27iyutGLtrpY--kDban1_ZHuy-uWQq3Q",
            authDomain: "instaframe-8271f.firebaseapp.com",
            databaseURL: "https://instaframe-8271f.firebaseio.com",
            projectId: "instaframe-8271f",
            storageBucket: "",
            messagingSenderId: "924356428374"
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.alreadyLogin(user);
            }
            else {
                this.props.notLoginYet();
            }
        });
    }

    render() {
        return (
            <Main />
        )
    }

}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
