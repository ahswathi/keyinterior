import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => {
  return (
    <div>
      <a href="#">
        <FontAwesomeIcon icon={faFacebookF} style={{ color: '#3b5998' }} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2' }} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} style={{ color: '#c32aa3' }} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
