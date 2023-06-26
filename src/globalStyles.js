import { createGlobalStyle } from "styled-components";

import ArialRegularWoff2 from './assets/fonts/arial-webfont.woff2'
import ArialBoldWoff2 from './assets/fonts/arialbd_1-webfont.woff2'
import ScheherazadeWoff2 from './assets/fonts/scheherazade-regular-webfont.woff2'
import NotoSansWoff2 from './assets/fonts/notosans-extralightitalic-webfont.woff2'

const GlobalStyles =  createGlobalStyle`
        @font-face {
            font-family: 'Arial';
            src: url(${ArialRegularWoff2}) format('woff2');
            font-weight: 400;
            font-style: normal;
        }
        @font-face {
            font-family: 'Arial';
            src: url(${ArialBoldWoff2}) format('woff2');
            font-weight: 700;
            font-style: normal;
        }
        @font-face {
            font-family: 'Scheherazade';
            src: url(${ScheherazadeWoff2}) format('woff2');
            font-weight: 400;
            font-style: normal;
        }
        @font-face {
            font-family: 'Noto Sans';
            src: url(${NotoSansWoff2}) format('woff2');
            font-weight: 200;
            font-style: italic;
        }

`

export default GlobalStyles