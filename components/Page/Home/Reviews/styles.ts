import styled from 'styled-components';

export const CardsWrapper = styled.ul`
    align-items:center;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
    margin:8rem auto 0;
    gap: 1.5rem;
`

export const CardWrapper = styled.li`
    align-items:center;
    border-radius:1.5rem;
    background-image:linear-gradient(to bottom right, ${({theme}) => theme.colors.ruby},${({theme}) => theme.colors.sky});
    display:flex;
    flex-flow:column;
    justify-content:center;
    max-width:95%;
    padding:2rem 1rem;
    row-gap:1rem;
    text-align:center;
    width:45rem;
    & > figure{
        aspect-ratio:4/4;
        border-radius:50%;
        overflow:hidden;
        position:relative;
        width:22rem;
        max-width:99%;
    }
    & > figcaption > section {
        & > h2{
            font-size:2.8rem;
            padding:1rem .5rem;
        }
        & > p{
            font-size:1.65rem;
            line-height:calc(1.65rem * 2);
        }
    }
`
