import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    @import url('http://fonts.cdnfonts.com/css/lemonmilk?styles=18118,18119,18123');
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;600;700&display=swap');
    *{
        box-sizing:border-box;
        font-smooth: always;
        margin:0;
        padding:0;
        scroll-behavior:smooth;
    }
    ::after,
    ::before{
        content:'';
        position:absolute;
    }
    ::selection{
        background-color:${({theme}) => theme.colors.sky};
        color:${({theme}) => theme.colors.jet};
    }
    a{
        color:inherit;
        outline:none;
        text-decoration:none;
    }
    body{
        background-color:${({theme}) => theme.colors.jet};
        color:${({theme}) => theme.colors.blush};
        font-family:${({theme}) => theme.fonts.regular};
        font-size:1.6rem;
        font-weight:400;
    }
    button{
        all:unset;
        cursor:pointer;
    }
    html{
        font-size:62.5%;
    }
    iframe{
        all:unset;
    }
    li,
    ol,
    ul{
        list-style:none;
    }
    main{
        margin:2rem auto;
        width:95%;
        & > *{
            margin:5rem auto;
        }
        & > span{
            display:flex;
            height:10rem;
        }
    }

    .center{
        text-align:center;
    }

    .content{
        font-family:${({theme}) => theme.fonts.regular};
        font-size:1.9rem;
        font-weight:500;
        line-height:calc(1.9rem * 2);
        padding:.95rem 1.1rem;
        @media only screen{
            @media (min-width:1450px){
                font-size:2.1rem;
                line-height:calc(2.1rem * 2);
            }
            @media (max-width:940px){
                font-size:1.7rem;
                line-height:calc(1.7rem * 2);
            }
        }
    }

    .heading{
        color:${({theme}) => theme.colors.sky};
        font-family:${({theme}) => theme.fonts.heading};
        font-size:4.2rem;
        @media only screen{
            @media (min-width:1450px){
                font-size:6.25rem;
            }
            @media (max-width:940px){
                font-size:3.8rem;
                width:100%;
            }
            @media (max-width:220px){
                font-size:2.2rem;
            }
        }
    }

`;
