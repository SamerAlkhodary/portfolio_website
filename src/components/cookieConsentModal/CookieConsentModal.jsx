import React,{useCallback, useState} from 'react';
import classes from './style';
import CookieConsent from 'react-cookie-consent';
import Consts from '../../consts';
import { FormControlLabel, FormGroup, Switch, Typography, alpha, styled,Link } from '@mui/material';
import { useNavigate,useLocation } from 'react-router-dom';
import translate from '../../res/strings/strings';


// eslint-disable-next-line react/prop-types
function CookieConsentModal() {
	const navigate = useNavigate();
	const location = useLocation();
	const [switchValue, setSwitchValue] = useState({
		essentials: true,
		analytics: false,
	});

	const acceptCookie= ()=>{
	};
	const declineCookies= ()=>{
	};
	const label= (variant,label)=>{
		return <Typography fontFamily={'Merriweather'} variant={variant} fontSize={'0.75em'}>
			{label}
		</Typography>;
	};
	const AccentSwitch = styled(Switch)(({ theme }) => ({
		'& .MuiSwitch-switchBase.Mui-checked': {
			color: Consts.theme.accent,
			'&:hover': {
				backgroundColor: alpha( Consts.theme.accent, theme.palette.action.hoverOpacity),
			},
		},
		'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
			backgroundColor:Consts.theme.accent,
		},
	}));
	
	return (
		<CookieConsent
			style={classes.cookie}
			enableDeclineButton
			cookieName="analytics-consent"
			onAccept={acceptCookie}
			onDecline={declineCookies}
			declineCookieValue={
				switchValue
			}
			cookieValue={
				{
					essentials: true,
					analytics: true,
				}
			}

			buttonText="Allow all"
			buttonStyle={{ backgroundColor: Consts.theme.accent, color:  Consts.theme.secondary,fontSize:'0.8em',fontWeight:'bold',fontFamily:Consts.theme.fontFamily}}
			declineButtonText="Allow selection"
			declineButtonStyle={{ backgroundColor: Consts.theme.secondary, color: Consts.theme.primary,fontSize:'0.8em',fontWeight:'bold',fontFamily:Consts.theme.fontFamily }}
			overlay
		>   <Typography paragraph style={classes.h2} fontFamily={'Merriweather'}>
				{'This website uses cookies'}
			</Typography>
			<Link  variant="body1"  style={classes.link} onClick={()=>{navigate('/cookie-policy');}}>
				{'Learn more'}
			</Link>
			<div style={{height:'1em'}} />
			<FormGroup>
				<FormControlLabel control={<AccentSwitch checked disabled required color={Consts.theme.accent}/>} disableTypography label={label('h7','Essentials')} />
				<FormControlLabel 
					checked={switchValue.analytics}
					onChange={(e,v)=>{
						setSwitchValue({
							essentials:true,
							analytics:v
						});
					}
					} control={<AccentSwitch />} label={label('h7','Analytical')} />
			</FormGroup>
		</CookieConsent>
	);
}
export default CookieConsentModal;
