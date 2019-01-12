import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="International Offensive (CSIO): Translations Radio Mod for CSGO"
      meta={[
        {
          name: 'description',
          content:
            'Radio Modification for Counter-Strike: Global Offensive (CSGO) providing handy translations to communicate with teammates that do not speak your language.',
        },
        {
          name: 'keywords',
          content:
            'csgo, radio, csio, international offensive, counter, strike, cs, counter-strike, counterstrike, cs, radio, mod, raigasm, toxic, russian, english, german',
        },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
