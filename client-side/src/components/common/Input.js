import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import useInput from '../../utils/common/useState';
import media from '../../utils/responsive';


const Pwd = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    div{
       border-bottom: solid 1px #FFFFFF;
       color: #FFFFFF;
      ${media.LargeDesktop`
        margin-bottom: 20px
      `}
       ${media.phone`
        margin-bottom: 6px
       `}
    }
`;

/**
 * @description - Retourne un input de type email
 */
export const Email = () => {
  const email = useInput('', 'email', 'email', 'email');
  return (
    <input {...email} />
  )
};

/**
 * @description - Retourne un input de type button
 */
export const Validate = ({ value }) => <input type='button' value={value} />;

/**
 * @description - Retourne un input de type email
 * @param {string} data - Valeur de l'auto-complete
 */
export const Password = ({data}) => {
    
    const [icon, setIcon] = useState(true);

    const password = useInput('', icon ? 'password': 'text', 'mot de passe', 'password');

    const showPassword = () => setIcon(prevState => !prevState);
    
    return (
      <div>
      <Pwd>
        <input {...password} autoComplete={data} />
        <div>
          <FontAwesomeIcon icon={icon ? faEyeSlash : faEye} size="2x" onClick={showPassword} />
        </div> 
      </Pwd>
      <Link to="/">mot de passe oublié ?</Link>
      </div>
    )
};

Password.propTypes = {
    data: PropTypes.string 
}
Validate.propTypes = {
    value: PropTypes.string
}

