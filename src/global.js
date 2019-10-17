import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');


    body {
        font-family: 'Open Sans', sans-serif;
        color: #190936;
        font-size: 100%;
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .bgGradienteRoxo {
        background: linear-gradient(#090b20 0%, #21093b 100%);
        border-radius: 5px;
        -webkit-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
        -moz-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
        box-shadow: 10px 10px 16px -5px rgba(126, 94, 94, 0.4);
        margin-top: 80px;
    }
`