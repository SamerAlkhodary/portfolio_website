import { Button, Typography } from '@mui/material';
import React from 'react';
import useStyles from './style.js';
import { useMediaQuery } from 'react-responsive';
import StyledTextField from '../../components/styledTextField.js/styledTextField.js';

const ContactPage = (props,ref)=> {
	
	const classes = useStyles();
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} className={isDesktopOrLaptop?classes.containerDesktop:classes.containerMobile} >
			<Typography  fontWeight='bold' className={classes.title}variant='h4' fontFamily={'Merriweather'}>
				{'GET IN TOUCH'}
			</Typography>
			<div className= {isDesktopOrLaptop?classes.formDesktop:classes.formMobile}>
		

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
					className={classes.textInput} 
					multiline='true'
					rows={5}
				/>

				
				<Button variant='filled' 
					
					style={{backgroundColor:'#E4BFB7'}}
					className={classes.buttonStyle}>
					<Typography fontFamily={'Merriweather'} fontSize={15} fontWeight={'bold'}>
						{'SEND'}
					</Typography>
				</Button>
			</div>

		
		
		</div>
     

	);
};
export default React.forwardRef(ContactPage);
