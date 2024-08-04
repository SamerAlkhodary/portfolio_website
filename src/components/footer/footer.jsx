import React from 'react';
import classes from './style';
import Logo from '../../res/images/vertical_logo.svg';
import { IconButton, Link, Typography } from '@mui/material';
import info from '../../res/strings/info';
import InstagramIcon from '@mui/icons-material/Instagram';
import translate from '../../res/strings/strings';
import { useMediaQuery } from 'react-responsive';
import FacebookIcon from '@mui/icons-material/Facebook';
import useAnalytics from '../../utils/analytics';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Footer({edge}) {
	const {sendEvent} = useAnalytics();
	const navigate = useNavigate();

	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div style={{...isDesktopOrLaptop?classes.footerDesktop:classes.footerMobile,borderTop: edge?'3px solid black':'',		}}>
			<img style={{ height: 70, width: 200 }} src={Logo}alt={'logo'}/>	
			<div style={classes.contact}>
				<Typography variant={'h6'} fontFamily={'Merriweather'}  style={classes.h1}>
					{
						translate('contactDetails')
					}
				</Typography>
				<Link underline='none' onClick={()=>{
					window.open(`mailto:${info.email}`);
					sendEvent({
						category: 'contacts',
						action: 'Click',
						label: 'email',
					});

				}
				} variant="body1"  style={classes.link}>
					{
						info.email
					}
				</Link>
				<Link underline='none' onClick={()=>{
					window.open('tel:'+info.number);
					sendEvent({
						category: 'contacts',
						action: 'Click',
						label: 'phone',
					});
				}} variant="body1"  style={classes.link}>
					{
						info.number
					}
				</Link>
			</div>
			<div style={classes.socialMedia}>
				<Typography variant={'h6'} fontFamily={'Merriweather'}  style={classes.h1}>
					{
						translate('followUs')
					}
				</Typography>
				<div style={classes.iconList}>
					<IconButton  aria-label={'Click this to go to Instagram page'} onClick={()=>{ 
						window.open(info.instagramLink, '_blank', 'noreferrer');
						sendEvent({
							category: 'contacts',
							action: 'Click',
							label: 'instagram',
						});
					}}>
						<InstagramIcon style={classes.instagram}></InstagramIcon>
					</IconButton>
					<IconButton aria-label={'Click this to go to Facebook page'}  onClick={()=>{ 
						window.open(info.facebookLink, '_blank', 'noreferrer');
						sendEvent({
							category: 'contacts',
							action: 'Click',
							label: 'facebook',
						});
					}}>
						<FacebookIcon style={classes.instagram}></FacebookIcon>
					</IconButton>
				</div>

			</div>
			<div style={classes.contact}>
				<Typography variant={'h6'} fontFamily={'Merriweather'}  style={classes.h1}>
					{
						translate('legal')
					}
				</Typography>
				<Link underline='none' variant="body1"  style={classes.link} onClick={()=>{
					navigate('/cookie-policy');
					sendEvent({
						category: 'legals',
						action: 'Click',
						label: 'cookie_policy',
					});
				}}>
					{translate('cookiePolicy')}
				</Link>
				
			</div>
			
		</div>
	);
}
export default Footer;
