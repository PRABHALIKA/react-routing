import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-widgets/dist/css/react-widgets.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
