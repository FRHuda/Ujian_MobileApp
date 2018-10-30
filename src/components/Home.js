import React, { Component } from 'react';
import { ScrollView, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getAllPost } from '../actions';
import { Header } from 'react-native-elements';
import HomeDetail from './HomeDetail';



class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Home'
    }

    componentWillMount() {
        this.props.getAllPost();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextprops) {
        this.createDataSource(nextprops);
    }

    createDataSource({ post }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(post);
    }

    renderRow = (post) => {
        return <HomeDetail post={post} />
    }

    render() {
        return (
            <ScrollView style={{ marginBottom: 15 }}>
                <Header
                    centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                />
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </ScrollView>

        )
    }
}

mapStateToProps = (state) => {
    const post = _.map(state.home, (val) => {
        return val;
    })

    const realpost = _.reverse(post);

    return { post };
}


export default connect(mapStateToProps, { getAllPost })(Home);