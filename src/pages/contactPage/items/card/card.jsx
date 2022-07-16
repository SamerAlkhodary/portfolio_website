import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import React from 'react';
import {Typography } from '@mui/material';
import logo from '../../../../res/logo.svg';
import useStyles from './style.js';

const Card =({cardStyle})=>{
	const classes = useStyles();

	return(
		<div className={cardStyle}>
					
			<div className={classes.row}>
            
				<div className={classes.column}>
					<Typography variant='h6' fontFamily={'Merriweather'}>
						{'Samer Alkhdodary'}
					</Typography>
					<Typography variant='subtitle1'  fontFamily={'Merriweather-light'}>
						{'Software Engineer'}
					</Typography>
				</div>
				<img src={logo} className={classes.logo}>
				</img>
        
			</div>
			<div className={classes.cardBody}>
				<div className={classes.cardContent}>
					<EmailIcon/>
					<Typography>
						{'samerAlkhodary93@gmail.com'}
					</Typography>
				</div>
				<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'1em'}}>
					<LocalPhoneIcon/>
					<Typography>
						{'+46735147500'}
					</Typography>
				</div>
            
			</div>
    

		</div>
	);
};
export default Card;