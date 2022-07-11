import { Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import useStyles from './style.js';
import { useMediaQuery } from 'react-responsive';
import StyledTextField from '../../components/styledTextField.js/styledTextField.js';
import logo from '../../res/logo.svg';
import gmail from '../../res/gmail.png';
import phone from '../../res/phone.png';
import linkedin from '../../res/linkedin.png';

const ContactPage = (props,ref)=> {
	
	const classes = useStyles();
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} className={classes.contactPage}>
			
			<div  className={isDesktopOrLaptop?classes.containerDesktop:classes.containerMobile} >
			
				<div className= {isDesktopOrLaptop?classes.formDesktop:classes.formMobile}>
					<Typography  fontWeight='bold' className={classes.title}variant='h4' fontFamily={'Merriweather'}>
						{'GET IN TOUCH'}
					</Typography>
					<StyledTextField
						label="Your Name"
						margin='dense'
					/>

					<StyledTextField
						label="Your email address"
						margin='dense'
					/>
					<StyledTextField
						label={'Your email'} 
						margin='dense' 
						multiline='true'
						rows={5}
					/>
					<Button variant='filled' 
						style={{backgroundColor:'#E4BFB7'}}>
						<Typography fontFamily={'Merriweather'} fontSize={15} fontWeight={'bold'}>
							{'SEND'}
						</Typography>
					</Button>
				</div>
				<div className={classes.businessCard}>
					
					<div className={classes.row}>
						<img src={logo} className={classes.logo}>
						</img>
						<div className={classes.column}>
							<Typography variant='h6' fontFamily={'Merriweather'}>
								{'Samer Alkhdodary'}
							</Typography>
							<Typography variant='subtitle1'  fontFamily={'Merriweather-light'}>
								{'Software Engineer'}
							</Typography>
						</div>
					
					</div>
					<div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',paddingTop:'1em'}}>
						<IconButton>
							<img className={classes.contactIcon} src={gmail}></img>
						</IconButton>
						<IconButton>
							<img  className={classes.contactIcon} src={linkedin}></img>
						</IconButton>
						<IconButton>
							<img  className={classes.contactIcon} src={phone}></img>
						</IconButton>
					</div>
				

				</div>
			</div>
		</div>
     

	);
};
export default React.forwardRef(ContactPage);
