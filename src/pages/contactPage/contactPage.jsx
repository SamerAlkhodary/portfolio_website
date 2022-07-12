import { Button, Typography } from '@mui/material';
import React from 'react';
import useStyles from './style.js';
import { useMediaQuery } from 'react-responsive';
import StyledTextField from '../../components/styledTextField.js/styledTextField.js';
import logo from '../../res/logo.svg';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
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
					<div style={{display:'flex',flexDirection:' column',justifyContent:'space-evenly',alignItems:'start',paddingTop:'1em'}}>
						<div style={{display:'flex',flex:1,flexDirection:'row',justifyContent:'space-between',gap:'1em'}}>
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
			</div>
		</div>
     

	);
};
export default React.forwardRef(ContactPage);
