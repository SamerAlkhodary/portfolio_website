import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import React from 'react';
import {Typography } from '@mui/material';
import logo from '../../../../res/images/logo.svg';
import classes from './style.js';
import Consts from '../../../../consts.js';

const Card =({cardStyle})=>{
 
	return(
		<div style={cardStyle}>
					
			<div style={classes.row}>
            
				<div style={classes.column}>
					<Typography variant='h7' fontFamily={'Merriweather'}color={Consts.theme.secondary} fontWeight={'bold'}>
						{'PALMYRA ÉPÍTŐ KFT.'}
					</Typography>
					
				</div>
				<img src={logo} style={classes.logo}>
				</img>
        
			</div>
			<div style={classes.cardBody}>
				<div style={classes.cardContent}>
					<EmailIcon color={Consts.theme.secondary}/>
					<Typography  color={Consts.theme.secondary}>
						{'palmyraepito@gmail.com'}
					</Typography>
				</div>
				<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'1em'}}>
					<LocalPhoneIcon  color={Consts.theme.secondary}/>
					<Typography color={Consts.theme.secondary}>
						{'+3630201334'}
					</Typography>
				</div>
            
			</div>
    

		</div>
	);
};
export default Card;