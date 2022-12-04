import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import '../styles.css';
import { SOCIAL_URL, SOCIAL_TYPES } from '../constants/socialConstants';

const HeaderSocial = () => {
  const goToUrl = (type) => window.open(SOCIAL_URL[type], '_blank');
  return (
    <div>
      <AiFillLinkedin
        onClick={() => goToUrl(SOCIAL_TYPES.LINKEDIN)}
        className="social"
      />
      <AiFillGithub
        onClick={() => goToUrl(SOCIAL_TYPES.GITHUB)}
        className="social"
      />
    </div>
  );
};

export default HeaderSocial;
