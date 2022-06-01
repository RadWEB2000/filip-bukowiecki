import styled from 'styled-components';
export const BrandWrapper = styled.div`
    & > a{
        color:${({theme}) => theme.colors.cultured};
        font-size:2.1rem;
        font-weight:800;
        transition:.2s linear color;
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.ruby};
        }
        @media only screen {
            @media (max-width:300px){
                font-size:1.75rem;
                font-weight:700;
            }
        }
    }
`