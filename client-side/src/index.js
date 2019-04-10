import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import App from './App';
import * as serviceWorker from './serviceWorker';

// import responsive styke
import media from '../src/utils/responsive';

// import image
import background from '../src/assets/images/agus-dietrich-747398-unsplash.jpg';

// default style
const GlobalStyle = createGlobalStyle`

*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}

body{
    background:url(${background});
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    ${media.phone`
        background-size: cover;
    `}
}
main{
    position:relative;
    display: flex;
    justify-content:center;

    height:100vh;
}
header{
    display:flex;
    align-items:center;
    border-bottom: solid 1px #FFFFFF;
    padding:10px;
    ${media.phone`
        display: block;
    `}
    h1{
        width:30%;
        color: #FFFFFF;
        letter-spacing: 3px;
        ${media.phone`
            width:100%;
            text-align: left;
        `}
    }
    a{
        text-decoration:none !important;
        color: #FFFFFF;
    }

}

`;
ReactDOM.render(<Fragment><GlobalStyle/><App /></Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
