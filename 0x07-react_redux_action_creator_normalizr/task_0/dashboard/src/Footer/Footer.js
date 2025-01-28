import React from 'react';
import { AppContext } from '../App/AppContext';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <footer>
            <p>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {context.user.isLoggedIn && <a href='#'>Contact us</a>}
          </footer>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Footer;