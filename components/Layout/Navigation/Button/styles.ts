import styled from 'styled-components';
export const Button = styled.div`
    align-items:center;
    cursor:pointer;
    display:flex;
    flex-direction:column;
    position:relative;
    & > span{
        display:block;
        border-radius:2rem;
        width:100%;
    }
`
export const CloseButtonWrapper = styled(Button)`
    height:4.2rem;
    width:4.2rem;
    & > span{
        background-color:${({theme}) => theme.colors.cultured};
        height:.35rem;
        left:50%;
        position:absolute;
        top:50%;
        transition:.2s linear background-color,.2s linear transform;
        width:90%;
        &:first-of-type{
            transform:translate(-50%,-50%) rotate(45deg);
        }
        &:last-of-type{
            transform:translate(-50%,-50%) rotate(-45deg);
        }
    }
    &:focus,
    &:hover{
        & > span{
            &:first-of-type{
                transform:translate(-50%,-50%) rotate(45deg) scale(.85);
            }
            &:last-of-type{
                transform:translate(-50%,-50%) rotate(-45deg) scale(.9);
            }   
        }
    }
`


export const OpenButtonWrapper = styled(Button)`
    height:3.85rem;
    justify-content:space-around;
    padding:.25rem;
    width:3.85rem;
    @media only screen {
        @media (max-width:300px){
            height:3.15rem;
            width:3.15rem;
        }
    }
    & > span{
        background-color:${({theme}) => theme.colors.cultured};
        height:.25rem;
        transition:.2s linear background-color,.2s linear transform;
    }
    &:focus,
    &:hover{
        & > span{
            background-color:${({theme}) => theme.colors.white};
            &:nth-of-type(odd){
                transform:scaleX(.9);
            }
            &:nth-of-type(even){
                transform:scaleX(.65);
            }
        }
    }
`