import { Button, Typography } from '@mui/material';
import  TextField from '@mui/material/TextField';
import React from 'react';
import useStyles from './style.js';
import { useMediaQuery } from 'react-responsive';

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
				<TextField 
			
					label='Your name' 
					variant='outlined' 
					margin='dense'
				/>
				<TextField 
					
					label="Your email address"
					margin='dense'
				/>
				<TextField
					
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
