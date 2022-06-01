import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    padding:2rem .25rem;
    & > a{
        background-color:${({theme}) => theme.colors.ruby};
        border-radius:3rem;
        flex-flow:row nowrap;
        gap:.5rem;
        padding:.85rem 2.15rem;
        transition:.2s linear background-color,.2s linear transform;
        @media only screen{
            @media (max-width:300px){
                flex-flow:column;
                padding:.95rem 2.15rem;
            }
            @media (max-width:220px){
                padding:1.95rem 1.25rem;
            }
        }
        &,
        & > span{
            align-items:center;
            display:flex;
            justify-content:center;
        }
        & > span{
            height:3.25rem;
            font-size:3rem;
            width:3.25rem;
        }
        & > p{
            font-size:2rem;
            font-weight:600;
            text-align:center;
        }
        &:focus,
        &:hover{
            background-color:${({theme}) => theme.colors.rose};
            transform:scaleX(.9);
        }
    }

`


export const ColumnWrapper = styled.div`
    & > .heading{
        color:${({theme}) => theme.colors.rose};
        filter:brightness(125%);
        transform:scale(.75);
        width:100%;
        @media only screen{
            @media (max-width:320px){
                font-size:2rem;
                transform:scale(1);
                text-align:center;
            }
        }
    }
    & > .grid{
        display:grid;
        grid-gap:.5rem;
        grid-template-columns:repeat(2,1fr);
        padding:.45rem;
        @media only screen{
            @media (max-width:490px){
                align-items:center;
                display:flex;
                flex-flow:column;
                justify-content:center;
            }
        }
        
    }
    @media only screen{
        @media (max-width:900px){
            width:90%;
        }
    }
`

export const SectionWrapper = styled.section`
    padding:2rem 1rem;
`
export const WorksWrapper = styled.section`
    & > .movies{
        display:grid;
        grid-column-gap:1rem;
        grid-template-columns:repeat(2,1fr);
        @media only screen{
            @media (max-width:900px){
                align-items:center;
                display:flex;
                flex-flow:column;
                justify-content:center;
            }
        }
    }
`
export const WorkWrapper = styled.li`
    /* display:none; */
    align-items:center;
    aspect-ratio:16/9;
    background-color:${({theme}) => theme.colors.gray};
    border-radius:.85rem;
    display:flex;
    justify-content:center;
    margin:auto;
    width:100%;
    & > iframe{
        height:100%;
        object-fit:cover;
        object-position:center;
        width:100%;
    }
`