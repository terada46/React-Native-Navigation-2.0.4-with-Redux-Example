import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
    createNavigationPropConstructor,
    createReactNavigationReduxMiddleware,
    initializeListeners,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import MainPage from './MainPage';
import ChooseColorPage from './ChooseColorPage';

export const AppNavigator = createStackNavigator({
    Main: { screen: MainPage },
    ChooseColor: { screen: ChooseColorPage }
}, {
    initialRouteName: 'Main',
    navigationOptions: {
        header: null,
    }
});

export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
)

const navigationPropConstructor = createNavigationPropConstructor('root');

class AppWithNavigationState extends Component {
    componentDidMount() {
        initializeListeners('root', this.props.nav)
    }
    render() {
        const navigation = navigationPropConstructor(
            this.props.dispatch,
            this.props.nav,
        );
        return  <AppNavigator navigation={navigation} />;
    }
}
    
const mapStateToProps = state => ({
    nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState);