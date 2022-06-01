import styled from 'styled-components';
export const OffersWrapper = styled.section`
    & > div{
        align-items:center;
        display:flex;
        justify-content:center;
        padding:1rem 0;
    }
    & > ul{
        align-items:start;
        display:flex;
        flex-flow:row wrap;
        gap:1rem;
        justify-content:space-evenly;
        & > li:nth-child(even){
            margin-top:6rem;
        }
    }

`
export const OfferWrapper = styled.li`
    border-radius:.85rem;
    flex-flow:column;
    margin:2rem auto;
    max-width:95%;
    padding:1.5rem .85rem;
    row-gap:.85rem;
    width:40rem;
    & > *{
        text-align:center;
        width:100%;
    }
    &,
    & > span{
        align-items:center;
        display:flex;
        justify-content:center;
    }

    & > span,
    & > h3{
        color:${({theme}) => theme.colors.sky};
    }
    & > span{
        font-size:6.25rem;
        height:6.5rem;
        width:6.5rem;
    }
    & > h3{
        font-size:2.4rem;
        @media only screen{
            @media (max-width:400px){
                font-size:2.1rem;
            }
        }
    }
    & > p{
        font-size:1.78rem;
        font-weight:300;
        opacity:.7;
        line-height:calc(1.78rem * 2);
        @media only screen{
            @media (max-width:400px){
                font-size:1.6rem;
                line-height:calc(1.6rem * 2);
            }
        }
    }
`