import { Button, Typography } from '@mui/material';
import React from 'react';
import useStyles from './style.js';
import { useMediaQuery } from 'react-responsive';
import StyledTextField from '../../components/styledTextField.js/styledTextField.js';
import { Card } from './items';
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
						multiline={true}
						rows={5}
					/>
					<Button variant='filled' 
						style={{backgroundColor:'#EEC283'}}>
						<Typography fontFamily={'Merriweather'} fontSize={15} fontWeight={'bold'}>
							{'SEND'}
						</Typography>
					</Button>
				</div>
				<Card cardStyle={classes.businessCard}/>
	
			</div>
		</div>
     

	);
};
export default React.forwardRef(ContactPage);
