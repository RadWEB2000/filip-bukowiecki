import styled from 'styled-components';
export const NavigationWrapper = styled.nav`
    align-items:center;
    background-color:${({theme}) => theme.colors.black};
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
    height:5rem;
    padding:0 2rem;
    position:sticky;
    top:0;
    z-index:99;
    @media only screen {
        @media (min-width:1450px){
            height:6rem;
            padding:0 2rem;
        }
        @media (max-width:300px){
            padding:0 1rem;
        }
    }
`