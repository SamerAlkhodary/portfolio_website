import { Button, Typography } from '@mui/material';
import React from 'react';
import classes from './style.js';
import { useMediaQuery } from 'react-responsive';
import StyledTextField from '../../components/styledTextField.js/styledTextField.js';
import Consts from '../../consts.js';
import translate from '../../res/strings/strings.js';
const ContactPage = (props,ref)=> {
	
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} style={classes.contactPage}>
			<Typography  fontWeight='bold' style={classes.title}variant='h5' fontFamily={'Merriweather'}>
				{translate('contactPageTitle')}
			</Typography>
			<div  style={isDesktopOrLaptop?classes.containerDesktop:classes.containerMobile} >
				
				<div style= {isDesktopOrLaptop?classes.formDesktop:classes.formMobile}>
					
					<StyledTextField
						InputProps={{
							style:{
								color:'white'
							}
						}}
						variant='standard'
						placeholder={translate('yourName')}
						margin='dense'
					/>

					<StyledTextField
						InputProps={{
							style:{
								color:'white',
							}
						}}
						
						variant='standard'
						placeholder={translate('yourEmail')}
						margin='dense'

					/>
					<StyledTextField
						InputProps={{
							style:{
								color:'white',
							}
						}}
						variant='standard'
						placeholder={translate('message')}
						multiline={true}
						margin='dense'

						rows={4}
					/>
					<Button variant='filled' 
						style={{backgroundColor:'#EEC283'}}>
						<Typography fontFamily={'Merriweather'} fontSize={15} fontWeight={'bold'} color={Consts.theme.secondary}>
							{translate('send')}
						</Typography>
					</Button>
				</div>
	
			</div>
		</div>
     

	);
};
export default React.forwardRef(ContactPage);
