import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        colors:{
            black:string;
            blush:string;
            cultured:string;
            gray:string;
            jet:string;
            rose:string;
            ruby:string;
            sky:string;
            white:string;
        },
        fonts:{
            heading:string;
            regular:string;
        }
    }
}