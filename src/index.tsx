import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './stylesheets/index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter basename='/urban-choreo-ec/'><App /></BrowserRouter>, document.getElementById('root')) as HTMLElement;


