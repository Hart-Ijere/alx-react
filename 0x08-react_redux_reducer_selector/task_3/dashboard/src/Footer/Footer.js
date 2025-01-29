import React from 'react';
import { AppContext } from '../App/AppContext';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const Footer = () => {
	return (
		<AppContext.Consumer>
			{({ user: { email, password, isLoggedIn }, logOut }) => (
				<div className='footer'>
					{isLoggedIn && (
						<p>
							<a>Contact us</a>
						</p>
					)}
					<p>
						Copyright {getFullYear()} - {getFooterCopy(true)}
					</p>
				</div>
			)}
		</AppContext.Consumer>
	);
};

export default Footer;