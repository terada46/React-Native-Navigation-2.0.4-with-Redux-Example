import { AppRegistry } from 'react-native';
import ReduxExampleApp from './App';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

AppRegistry.registerComponent('reduxNavigation', () => ReduxExampleApp);
