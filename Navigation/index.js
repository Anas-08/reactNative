/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import reduxStore from './src/redux/store/store';

const Root = () => (
    <Provider store={reduxStore}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
