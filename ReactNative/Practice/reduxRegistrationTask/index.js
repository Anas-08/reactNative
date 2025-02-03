/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import reduxStore from './src/Redux/store';

const root = () => (
    <Provider store={reduxStore} >
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => root);
