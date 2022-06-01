import styled from 'styled-components';
export const AboutWrapper = styled.div`
    align-items:start;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
    & > figure{
        border-radius:10rem 0 10rem 0;
        overflow:hidden;
        position:relative;
        max-width:95%;
        height:55rem;
        width:55rem;
    }
    & > section{
        align-items:flex-end;
        display:flex;
        flex-flow:column;
        justify-content:flex-end;
        text-align:end;
        width:65rem;
    }
    @media only screen {
        @media (min-width:1450px){
            & > figure{
                height:65rem;
                width:65rem;
            }       
            & > section{
                width:70rem;
            }
        }
        @media (max-width:1265px){
            & > figure{
                border-radius:10rem 0 10rem 0;
                height:52.5rem;
                width:52.5rem;
            }
            & > section{
                width:60rem;
            }
        }
        @media (max-width:1200px){
            & > figure{
                border-radius:10rem 0 10rem 0;
                height:62.5rem;
                width:42.5rem;
            }
            & > section{
                width:52.5rem;
            }
        }
        @media (max-width:1020px){
            & > figure{
                border-radius:10rem 0 10rem 0;
                height:70.5rem;
                width:40.5rem;
            }
            & > section{
                width:48.5rem;
            }
        }
        @media (max-width:940px){
            align-items:center;
            flex-flow:column;
            justify-content:center;
            gap:1rem;
            & > figure{
                aspect-ratio:16/9;
                border-radius:1rem 0 1rem 0;
                max-height:45.5rem;
                width:100%;
            }
            & > section{
                width:90%;
                text-align:center;
            }
        }
    }
`