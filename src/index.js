import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import GlobalStyle from './components/Styles'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import Styles from './components/Styles'

ReactDOM.render(<ThemeProvider theme={Styles}><App /></ThemeProvider>, document.getElementById('root'));
