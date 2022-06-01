import styled from 'styled-components';

export const AuthorWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    flex-flow:row wrap;
    justify-content:center;
    font-size:2rem;
    font-weight:700;
    gap:1rem 1.1rem;
    text-align:center;
    word-wrap:break-word;
    word-break:break-all;
    & > a{
        transition:.2s linear color;
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.sky};
        }
    }
`
export const FooterWrapper = styled.footer`
    align-items:center;
    background-color:${({theme}) => theme.colors.black};
    display:flex;
    flex-flow:column;
    row-gap:3rem;
    padding:2rem 0;
    & > * {
        width:100%;
    }
`
export const SocialsWrapper = styled.div`
    padding:2rem .25rem;
    & > ul{
        align-items:center;
        display:flex;
        flex-flow:row wrap;
        gap:2rem;
        justify-content:center;
    }
`

export const SocialWrapper = styled.a`
    height:5rem;
    position:relative;
    width:5rem;
    &,
    & > span{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    &::before{
        background-color:${({theme}) => theme.colors.rose};
        border-radius:2rem;
        bottom:0;
        height:.45rem;
        left:0;
        transition:.2s linear width;
        width:0%;
    }
    & > span{
        font-size:3rem;
        height:100%;
        transition:.2s linear color,.2s linear transform;
        width:100%;
    }
    &:focus,
    &:hover{
        &::before{
            width:100%;
        }
        & > span{
            color:${({theme}) => theme.colors.rose};
            transform:scale(1.2);
        }
    }   
`