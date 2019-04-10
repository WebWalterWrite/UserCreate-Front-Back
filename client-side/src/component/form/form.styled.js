import styled from 'styled-components';

// import responsive
import media from '../../utils/responsive';

export const Contain = styled.div`
    position:absolute;
    top:20%;
    width:40%;
    display: flex;
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
    `}
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

export const Field = styled.div`
    margin-bottom:2em;
`;