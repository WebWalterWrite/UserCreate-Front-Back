import styled from 'styled-components';
import media from '../../utils/responsive';

export const Section = styled.section`
    position:absolute;
    top:20%;
    width:40%;
    padding: 1em;
    transform: translateY(-50%);
    border: solid 1px #FFFFFF;
    background: rgba(244, 244, 244, .3);
    color: #FFFFFF;
    font-size:22px;
    ${media.phone`
        width:90%;
    `}
`;