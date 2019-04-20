import styled from 'styled-components/macro';


// import responsive
import media from '../../utils/responsive';

export const Contain = styled.div`
    position:absolute;
    top:30%;
    width:40%;
    display: block;
    justify-content:space-around;
    padding: 2em;
    transform: translateY(-50%);
    text-align: center;
    border: solid 1px #FFFFFF;
    border-radius: 8px;
    background: rgba(0, 0, 0, .3);

/* responsive mobile */
    ${media.phone`
        width:90%;
        top:40%;
    `}

    hr{
        width: 40%;
        margin: 0 auto;
        margin-top:2em;
        margin-bottom: 2em;
    }
`;

export const Social = styled.div`
    display: flex;
    justify-content:space-around;
    div{
        display:flex;
        align-items: center;
        border: solid 1px #FFFFFF;
        background-color: #FFFFFF;
        border-radius: 8px;
        width:20%;
        transform: scale(1);
        transition: .1s transform .3s ease;
            :hover{
             transform: scale(1.1);
            } 
        a{
            text-decoration: none;
            color: inherit;
            padding: .4em;
            ${media.phone`padding: .8em;`}
        }
        span{
            margin-left:5px;
        }
        :first-child{
            color: #000000;
            border: solid 1px #000000;
        }
        :nth-child(2n){
            color: #D54235;
            border: solid 1px #D54235;
        }
        :last-child{
            color: #1ea1f1;
            border: solid 1px #1ea1f1;
        }
         /* responsive mobile */ 
        ${media.phone`
            text-align:center;
            width: 90%;
            margin:1em;
        `}
    }

`;

export const Separator = styled.div`
    display:flex;
    position:relative;
    margin:2rem 0;text-align:center;
    justify-content:space-between;
    align-items:center;
    flex:1;
    color: #FFFFFF;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #969ea2;
    font-size: 1.3rem;
    ::before, ::after{
        border-color: #FFFFFF;
        flex: 1;
        content: '';
        border-bottom: 1px solid #FFFFFF;
    }
    span{
        margin:0 1em 0 1em;
    }
`;

export const Form = styled.form`
    text-align: center;
    width: 50%;
    margin: 0 auto;
    ${media.phone`
        width: 80%;
    `}
    input{
        font-size:18px;
        ::placeholder{
            color: rgba(244,244,244,0.7);
        }
        ${media.phone`
            font-size:1.4em;
        `}
    }
    input:not([type='button']){
        color: #FFFFFF;
        border: none;
        background-color:transparent;
        border-bottom: solid 1px #FFFFFF;
        border-radius:0;
        outline: none;
        width:100%;
    }
    input[type='button']{
        background-color:#2E7AB1;
        color:#FFFFFF;
        font-weight: bold;
        border:none;
        padding: .5em;
        margin-top: 1em;
        appearance: none;
        letter-spacing: 3px;
        outline: none;
        cursor:pointer;
        transition: all .3s ease-in-out;
        :hover{
            border-radius: 8px;
            background-color:#2E7AB1;
        }
    }
    
        a{
            font-size: 13px;
            text-decoration:none;
            color:#FFFFFF;
            :hover{
                text-decoration: underline;
            }
        }
`;


export const Field = styled.div`
    margin-bottom:2em;
`;