import styled from 'styled-components';
export const WelcomeWrapper = styled.section`
    align-items:center;
    display:flex;
    flex-flow:column;
    font-family:${({theme}) => theme.fonts.heading};
    justify-content:center;
    row-gap:1rem;
    margin:5rem auto;
    min-height:40rem;
    & > * {
        text-align:center;
        text-shadow:0 0 1rem ${({theme}) => theme.colors.gray};
        word-break:break-all;
        word-wrap:break-word;
    }
    & > h1{
        color:${({theme}) => theme.colors.rose};
        font-size:7.5rem;
    }
    & > h2{
        color:${({theme}) => theme.colors.white};
        font-size:3.5rem;
    }
    @media only screen{
        @media (max-width:820px){
            & > h1{
                font-size:6rem;
            }
            & > h2{
                font-size:2.85rem;
            }
        }
        @media (max-width:500px){
            & > h1{
                font-size:4rem;
            }
            & > h2{
                font-size:2.45rem;
            }
        }
        @media (max-width:300px){
            & > h1{
                font-size:3.25rem;
            }
            & > h2{
                font-size:2.45rem;
            }
        }
    }
`