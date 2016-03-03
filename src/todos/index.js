import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(<App name="abc" value="123" autoPlay="true" />, document.getElementById('app'));
