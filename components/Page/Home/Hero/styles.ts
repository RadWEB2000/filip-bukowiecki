import styled from 'styled-components';
export const HeroWrapper = styled.header`
    align-items:center;
    display:flex;
    height:97vh;
    justify-content:center;
    position:relative;
    width:100%;
    & > video{
        height:100%;
        object-fit:cover;
        object-position:center;
        width:100%;
    }
`