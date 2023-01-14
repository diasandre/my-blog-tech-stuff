import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiDocument } from "react-icons/hi2";
import '../styles.css';
import { SOCIAL_URL, SOCIAL_TYPES } from '../constants/socialConstants';

const HeaderSocial = () => {
  const goToUrl = (type) => window.open(SOCIAL_URL[type], '_blank');
  return (
    <div>
      <HiDocument
        onClick={() => goToUrl(SOCIAL_TYPES.CURRICULUM)}
        className="social"
      />
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
