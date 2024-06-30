import { Button, Typography } from '@mui/material';
import React from 'react';
import useStyles from './style.js';
import { useMediaQuery } from 'react-responsive';
import StyledTextField from '../../components/styledTextField.js/styledTextField.js';
import { Card } from './items';
import Consts from '../../consts.js';
import translate from '../../res/strings/strings.js';
const ContactPage = (props,ref)=> {
	
	const classes = useStyles();
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});
	return (
		<div ref={ref} className={classes.contactPage}>
			<Typography  fontWeight='bold' className={classes.title}variant='h5' fontFamily={'Merriweather'}>
				{translate('contactPageTitle')}
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
				<Card cardStyle={classes.businessCard}/>
	
			</div>
		</div>
     

	);
};
export default React.forwardRef(ContactPage);
