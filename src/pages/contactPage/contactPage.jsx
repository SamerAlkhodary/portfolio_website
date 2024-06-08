import { Button, Typography } from '@mui/material';
import React from 'react';
import useStyles from './style.js';
import { useMediaQuery } from 'react-responsive';
import StyledTextField from '../../components/styledTextField.js/styledTextField.js';
import { Card } from './items';
import Consts from '../../consts.js';
const ContactPage = (props,ref)=> {
	
	const classes = useStyles();
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} className={classes.contactPage}>
			<Typography  fontWeight='bold' className={classes.title}variant='h4' fontFamily={'Merriweather'}>
				{'Get in touch'}
			</Typography>
			<div  className={isDesktopOrLaptop?classes.containerDesktop:classes.containerMobile} >
				
				<div className= {isDesktopOrLaptop?classes.formDesktop:classes.formMobile}>
					
					<StyledTextField
						InputProps={{
							style:{
								color:'white'
							}
						}}
						variant='standard'
						placeholder="Your Name"
						margin='dense'
					/>

					<StyledTextField
						InputProps={{
							style:{
								color:'white',
							}
						}}
						
						variant='standard'
						placeholder="Your email address"
						margin='dense'

					/>
					<StyledTextField
						InputProps={{
							style:{
								color:'white',
							}
						}}
						variant='standard'
						placeholder={'Message'} 
						multiline={true}
						margin='dense'

						rows={4}
					/>
					<Button variant='filled' 
						style={{backgroundColor:'#EEC283'}}>
						<Typography fontFamily={'Merriweather'} fontSize={15} fontWeight={'bold'} color={Consts.theme.primary}>
							{'Send'}
						</Typography>
					</Button>
				</div>
				<Card cardStyle={classes.businessCard}/>
	
			</div>
		</div>
     

	);
};
export default React.forwardRef(ContactPage);
