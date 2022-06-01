import { motion } from 'framer-motion';
import styled from 'styled-components';
export const MenuItemWrapper = styled.li`
    & > a {
        align-items:center;
        background-color:${({theme}) => theme.colors.ruby};
        border:.35rem solid ${({theme}) => theme.colors.cultured};
        color:${({theme}) => theme.colors.cultured};
        border-radius:5rem;
        display:flex;
        justify-content:center;
        font-size:3rem;
        font-weight:700;
        height:5.75rem;
        max-width:85%;
        margin:0 auto;
        text-transform:uppercase;
        transition:.12s linear background-color,.12s linear box-shadow, .12s linear text-shadow, .12s linear transform;
        user-select:none;
        width:35rem;
        &:focus,
        &:hover{
            background-color:${({theme}) => theme.colors.sky};
            transform:scaleX(.9);
        }
        @media only screen {
            @media (max-width:700px){
                font-size:2.7rem;
                height:5.75rem;
                width:25rem;
            }
            @media (max-width:400px){
                font-size:2.1rem;
                height:4.75rem;
            }
        }
    }

`

export const MenuWrapper = styled(motion.div)`
    background-color:${({theme}) => theme.colors.ruby};
    flex-flow:column;
    height:100vh;
    justify-content:flex-start;
    left:0;
    position:fixed;
    top:0;
    z-index:9999999999;
    &,
    & > * {
        align-items:center;
        display:flex;
        width:100%;
    }
    & > div{
        justify-content:end;
        padding:.5rem 2.25rem;
    }
    & > section{
        justify-content:center;
        height:100%;
        & > menu{
            align-items:center;
            display:flex;
            justify-content:center;
            flex-flow:column;
            row-gap:1.5rem;
        }
    }
`